const show_nav = document.querySelector("#show_nav");
const nav_right = document.querySelector(".nav_right");

const nav = document.createElement("div");
nav.classList.add("mobile_menu");
show_nav.addEventListener("click", () => {
        nav.innerHTML = `
            <a href="#" class="nav_link_mobile" style = "color: hsl(210, 4%, 67%);">about</a>
            <a href="#" class="nav_link_mobile" style = "color: hsl(210, 4%, 67%);">services</a>
            <a href="#" class="nav_link_mobile" style = "color: hsl(210, 4%, 67%);">projects</a>
            <a href="#" class="nav_link_mobile mobile_nav_button" style = "color: hsl(212, 27%, 19%)">contact</a>
        `;
    nav_right.insertAdjacentElement("afterend", nav);
    nav.classList.toggle("mobile_nav_remove");
});
