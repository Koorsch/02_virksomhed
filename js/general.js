/* Deklarere knap og menu*/
const btn = document.querySelector("#menu_toggle");
const menu = document.querySelector(".menu");

/* Kigge efter clicks på knappen*/
btn.addEventListener("click", toggleMenu);

function toggleMenu() {
  /* Simple toggle med klasstilføjelse der kigger i CSS'n */
  menu.classList.toggle("shown");

  /* #Deklarerer en variable der kigger hvis togglen er igang,
      console.log når der klikkes. 
  const menuShown = menu.classList.contains("shown");
  if (menuShown) {
    console.log(menuShown);
  } else {
    console.log(menuShown);
  }
  */
}
