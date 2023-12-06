const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input");

const qrCodeImg = document.querySelector("#qr-code img");

//Event => Quando ele clicar no QE Code button vai adicionar o evento que vai ser de click

//Gerar QR Code
function generateQRCode() {
    
    const qrCodeInputValue = qrCodeInput.value;

    console.log(qrCodeInputValue);

    if (!qrCodeInputValue) return;

    

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;


    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        qrCodeBtn.innerText = "Código criado!";
    });
    
}


qrCodeBtn.addEventListener("click", () => {
    generateQRCode();
});


qrCodeInput.addEventListener("keydown", (e) => {
   if(e.code === "Enter") {
    generateQRCode();
   }
});

//Limpar área do QR Code, fazendo um novo evento

qrCodeInput.addEventListener("keyup", () => {
    if(!qrCodeInput.value) {
     container.classList.remove("active");
     qrCodeBtn.innerText = "Gerar QR Code";
    }
});

