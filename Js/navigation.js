
const mobileNavItems = document.querySelectorAll(".mobile-nav-item");

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

mobileNavItems.forEach(item => {

    const linkPage =
        item.getAttribute("href").split("/").pop();

    if (linkPage === currentPage) {

        item.classList.add("active");

    } else {

        item.classList.remove("active");

    }

});