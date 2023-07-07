const iframe = document.getElementById("my-iframe");

iframe.onload = () => {
  console.log("Carregou o iframe na página principal!");
};

const inputMessage = document.getElementById("input-message");
const btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", () => {
  iframe.contentWindow.postMessage(
    {
      type: "action1",
      value: inputMessage.value,
    },
    "*"
  );
});

window.onmessage = function (event) {
  if (event.data.type == "action2") {
    const message = document.getElementById("message");
    message.innerText = event.data.value;
  }
};
