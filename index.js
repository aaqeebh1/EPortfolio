let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;
const headerLogo = document.getElementById("personal__logo")

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += "dark-mode"; // Use add() for adding classes
    headerLogo.src="./assets/2.svg";
  } else {
    document.body.classList.remove("dark-mode");
    headerLogo.src = "./assets/1.svg";
    console.log(headerLogo.src);
  }
}
toggleContrast();

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_gwblbeu",
      "template_ai8vrne",
      event.target,
      "3x3ysnv9MM0dQ2_7m"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The Email service is temporarliy unavailable. Please contact me directly on aaqeebh1@googlemail.com"
      );
    });
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal__open", "disable-scroll");
  }
  isModalOpen = true;
  document.body.classList += " modal__open disable-scroll";
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function getGlideConfig() {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) { // Small screens
        return {
          type: 'carousel',
          perView: 1,
        };
      } else if (screenWidth >= 768 && screenWidth < 1024) { // Medium screens
        return {
          type: 'carousel',
          perView: 2,
        };
      } else { // Large screens and above
        return {
          type: 'carousel',
          perView: 3,
        };
      }
    }
    
