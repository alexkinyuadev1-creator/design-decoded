const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        // Close every other FAQ
        faqItems.forEach(otherItem => {

            if (otherItem !== item) {

                otherItem.classList.remove("active");

            }

        });

        // Open or close the clicked FAQ
        item.classList.toggle("active");

    });

});