const pdfFrame = document.querySelector("#pdfFrame");
const pdfContainer = document.getElementById("pdfContainer");
const iframeW = pdfFrame.contentWindow || pdfFrame.contentDocument;

function printMenu() {
  // Open the PDF in a new window or tab
  const printW = window.open(iframeW.location.href, "_blank");

  // Wait for the PDF to load
  printW.addEventListener("load", function () {
    // Call the print function on the new window
    printW.print();

    // Close the window after a delay (100 milliseconds in this example)
    const closePrintWindow = function () {
      printW.close();
    };
    setTimeout(closePrintWindow, 100);
  });

  // Handle the cancellation of the print dialog
  const cancelPrint = function () {
    printW.close();
  };
  window.addEventListener("afterprint", cancelPrint);
}

function openMenu(url) {
  pdfFrame.src = url;
  pdfContainer.classList.add("active");
}

function closeMenu() {
  pdfFrame.src = "";
  pdfContainer.classList.remove("active");
}

function saveMenu() {
  iframeW.postMessage("save", "*");
}
