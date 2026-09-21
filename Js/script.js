const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

/*==============================
      SCROLL REVEAL
==============================*/

const reveals = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-up");

function revealSections(){

    const windowHeight = window.innerHeight;

    reveals.forEach((element)=>{

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint){

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

window.addEventListener("load", revealSections);

lucide.createIcons();



/*=========================================
        MOBILE NAVIGATION
=========================================*/

const mobileMenuToggle =
    document.querySelector('.mobile-menu-toggle');

const mobileNavigation =
    document.querySelector('.navbar > .nav-links');

if (mobileMenuToggle && mobileNavigation) {

    mobileMenuToggle.addEventListener('click', () => {

        mobileNavigation.classList.toggle('mobile-open');

    });

}

/* ==========================================================
   PAGE TRANSITIONS
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Animate page entrance
    document.body.classList.add("page-enter");


    // Handle internal navigation
    const links = document.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", function (event) {

            const href = this.getAttribute("href");

            // Ignore links without a destination
            if (!href) return;

            // Ignore anchors
            if (href.startsWith("#")) return;

            // Ignore external links
            if (this.hostname !== window.location.hostname) return;

            // Ignore new-tab links
            if (this.target === "_blank") return;

            // Ignore downloads
            if (this.hasAttribute("download")) return;

            event.preventDefault();

            document.body.classList.remove("page-enter");
            document.body.classList.add("page-exit");

            setTimeout(() => {

                window.location.href = href;

            }, 350);

        });

    });

});