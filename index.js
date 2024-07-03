const menuButtons = document.querySelectorAll(".menuButton");

menuButtons.forEach((menuButton) => {
  menuButton.addEventListener("click", function toggleDropdownMenu() {
    const parentEl = menuButton.parentElement;
    const menuItems = parentEl.children[1];
    menuItems.classList.toggle("toggleDropdown");
  });
});