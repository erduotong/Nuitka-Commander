function openMenu() {
    let open_menu_button = document.querySelector(".open_menu_button");
    open_menu_button.style.visibility = "hidden";
    open_menu_button.style.opacity = "0";
    let menu_sidebar = document.getElementById("menu_sidebar");
    menu_sidebar.style.width = Math.max(window.innerWidth * 0.15, 150) + "px";
}

function closeMenu() {
    let menu_sidebar = document.getElementById("menu_sidebar");
    menu_sidebar.style.width = "0";
    let open_menu_button = document.querySelector(".open_menu_button");
    open_menu_button.style.visibility = "visible";
    open_menu_button.style.opacity = "1";
}