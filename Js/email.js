const emailLink = document.getElementById("email-link");

const email = "hello.designdecoded@gmail.com";

const subject = "Design Inquiry — Design Decoded";

const body = `Hello Design Decoded,

I'm interested in your design services and would like to discuss a project.

Project Type:
Project Description:
Preferred Deadline:

Please let me know the next steps.

Thank you.`;

const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

if (isMobile) {
    emailLink.href =
        `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
} else {
    emailLink.href =
        `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    emailLink.target = "_blank";
}

const footerEmailLink = document.getElementById("footer-email-link");

if (isMobile) {
    footerEmailLink.href =
        `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
} else {
    footerEmailLink.href =
        `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    footerEmailLink.target = "_blank";
}