# The Odin Project - Dropdown Menu

This is a simple module to handle a dropdown menu with HTML, CSS and JavaScript, using the `forEach` and `addEventListener` to handle the clicked button and display the menu items inside. You can use as many dropdowns in one application as your desire.

Using class name `.menuButton` to be the parent of the dropdown menu which when toggled will dhow the items. Both the button and `ul` need to be wrapped in a `div` with the class name `.menuWrapper` and the `ul` is labeled with the class name `.menuItems`. 

Example:
```
    <div class="menuWrapper">
      <button class="menuButton">{button-name}</button>
      <ul class="menuItems toggleDropdown">
        <li><a href="#">{Link-name}</a></li>
        <li><a href="#">{Link-name}</a></li>
        <li><a href="#">{Link-name}</a></li>
        <li><a href="#">{Link-name}</a></li>
      </ul>
    </div>
```

Using this as a template. you'll create easy to navigate and simple drop down menus for your projects.

