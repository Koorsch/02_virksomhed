const pdfFrame = document.querySelector("#pdfFrame");
const pdfContainer = document.getElementById("pdfContainer");

function printMenu() {
  const iframeW = pdfFrame.contentWindow || pdfFrame.contentDocument;

  // Åbn pdf i nyt vindue
  const printW = window.open(iframeW.location.href, "_blank");

  // Venter på at pdf'n skal loade
  printW.addEventListener("load", function () {
    // Print når det er klart at loade
    printW.print();

    // Luk automatisk efter 2000ms hvis man ikke trykker
    setTimeout(function () {
      printW.close();
    }, 2000);
  });

  // Luk hvis man ikke trykker rigtigt.
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
  const iframeW = pdfFrame.contentWindow || pdfFrame.contentDocument;
  iframeW.postMessage("save", "*");
}
