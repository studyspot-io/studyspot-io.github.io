function toggleMenu() {
  var links = document.getElementById("myLinks");
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
    console.log ("dgdg")
  }
}
function toggleDropdown() {
  var dropdown = document.getElementById("dropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}
function translatePage(language) {}
const cookiePopup = document.getElementById('cookie-popup');
const cookieBtn = document.getElementById('cookie-btn');

// Check if the cookie consent is already given
if (!localStorage.getItem('cookieConsent')) {
  setTimeout(() => {
    cookiePopup.classList.add('show');
  }, 1000); // Show popup after 1 second
}

cookieBtn.addEventListener('click', () => {
  cookiePopup.classList.remove('show');
  localStorage.setItem('cookieConsent', 'true');
});
);