function limparCampo() {
  var inputField = document.getElementById("inputField");
  if (inputField.value === "Digite seu texto") {
    inputField.value = "";
  }
}

let textResult = "";

function encriptar() {
  let userText = document.querySelector("input").value;
  const regexOk = regexRule.test(userText);

  if (!userText.length || !regexOk) {
    alert(
      "Informe um texto para encriptar ou desencriptar usando apenas letras minúsculas sem acento"
    );
    updateResult(userText);
  } else {
    const encriptarCodigo = secret.encriptar;

    for (key in encriptarCodigo) {
      userText = userText.replaceAll(key, encriptarCodigo[key]);
    }
    textResult = userText;
    updateResult(userText);
  }
}

function desencriptar() {
  let userText = document.querySelector("input").value;

  const regexOk = regexRule.test(userText);

  if (!userText.length || !regexOk) {
    alert(
      "Informe um texto para encriptar ou desencriptar usando apenas letras minúsculas sem acento"
    );
  } else {
    const desencriptarCodigo = secret.descriptar;

    for (key in desencriptarCodigo) {
      userText = userText.replaceAll(key, desencriptarCodigo[key]);
    }
    console.log("2", userText);
    textResult = userText;
    updateResult(userText);
  }
}

function updateResult(text) {
  let resultContainer = document.getElementById("textResultArea");
  resultContainer.innerText = text;

  console.log('text', text);

  let buttonResult = document.getElementById("resultButton");
  let noMsnContainer = document.getElementById("containerNoMsn")

  if (text) {  
    buttonResult.removeAttribute("disabled");
    buttonResult.style = "";

    noMsnContainer.style.display = "none";
  } else {
    buttonResult.setAttribute("disabled", true);
    buttonResult.style = "display:none";

    resultContainer.style = "display:none"

    noMsnContainer.style.display = "table-row";
  }
};

function copyResult() {
    let copyText = document.getElementById("textResultArea");
    console.log('ct', copyText.textContent);
    copyText.focus();
    copyText.setSelectionRange(0, copyText.value.length);
}

const secret = {
  encriptar: {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  },
  descriptar: {
    enter: "e",
    ai: "a",
    imes: "i",
    ober: "o",
    ufat: "u",
  },
};

const regexRule = /^[a-z\s]+$/;
