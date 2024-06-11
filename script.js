const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrContainer = document.getElementById("qr-body");

let size = sizes.value;

// generateBtn.addEventListener('click',(e)=>{
//     e.preventDefault();//we use preventDefault prevent this site to submit value.
// }) run this page and show how you form stop

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (qrText.value.length > 0) {
    generateQRCode();
  } else {
    alert("Enter the text or Url to generate your OR Code");
  }
});

sizes.addEventListener("change", (e) => {
  size = e.target.value;
  generateQRCode();
});

function generateQRCode() {
  qrContainer.innerHTML = ""; // Clear previous QR Code
  new QRCode(qrContainer, {
    text: qrText.value,
    width: parseInt(size),
    height: parseInt(size),
    colorDark: "#000000",
    colorLight: "#ffffff",
  });
}
