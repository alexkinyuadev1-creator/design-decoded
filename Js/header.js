/* ==========================================================
   DESKTOP HEADER MENU
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const headerMenuToggle =
        document.getElementById("headerMenuToggle");

    const headerNavigation =
        document.getElementById("headerNavigation");


    /* Stop if the elements don't exist */
    if (!headerMenuToggle || !headerNavigation) {
        return;
    }


    /* ======================================================
       OPEN / CLOSE MENU
    ====================================================== */

    headerMenuToggle.addEventListener("click", (event) => {

        /* Prevent the outside-click listener from interfering */
        event.stopPropagation();

        const isOpen =
            headerNavigation.classList.toggle("active");


        /* Update accessibility state */
        headerMenuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );


        /* Update button label */
        headerMenuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation"
                : "Open navigation"
        );


        /* Change icon */
        const icon =
            headerMenuToggle.querySelector("[data-lucide]");


        if (icon) {

            icon.setAttribute(
                "data-lucide",
                isOpen ? "x" : "menu"
            );


            /* Re-render Lucide icon */
            if (typeof lucide !== "undefined") {
                lucide.createIcons();
            }

        }

    });


    /* ======================================================
       CLOSE WHEN CLICKING OUTSIDE
    ====================================================== */

    document.addEventListener("click", (event) => {

        if (
            !headerNavigation.contains(event.target) &&
            !headerMenuToggle.contains(event.target)
        ) {

            closeHeaderMenu();

        }

    });


    /* ======================================================
       CLOSE WITH ESCAPE
    ====================================================== */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            closeHeaderMenu();

        }

    });


    /* ======================================================
       CLOSE MENU FUNCTION
    ====================================================== */

    function closeHeaderMenu() {

        headerNavigation.classList.remove("active");


        headerMenuToggle.setAttribute(
            "aria-expanded",
            "false"
        );


        headerMenuToggle.setAttribute(
            "aria-label",
            "Open navigation"
        );


        const icon =
            headerMenuToggle.querySelector("[data-lucide]");


        if (icon) {

            icon.setAttribute(
                "data-lucide",
                "menu"
            );


            if (typeof lucide !== "undefined") {
                lucide.createIcons();
            }

        }

    }

});