const emailContact = document.getElementById("email-contact");

emailContact.addEventListener("click", function (event) {
    const email = "juansebastianvarelaroncancio@gmail.com";
    const isMobile = /Android|iPhone|iPad|iPod/i.test(
        navigator.userAgent
    );
    if (!isMobile) {
        event.preventDefault();
        const gmailUrl =
            `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
        window.open(gmailUrl, "_blank");
    }
});