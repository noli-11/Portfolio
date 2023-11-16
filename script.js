const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSectionId = link.getAttribute('href');
        const targetSection = document.querySelector(targetSectionId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

function sendMessage() {
    (function () {
        emailjs.init("VNkrEMIGyoErhIgJW");
    })();

    var serviceID = "service_wx82f4c";
    var templateID = "template_i8blg37";

    var params = {
        sendername: document.querySelector("#name").value,
        senderemail: document.querySelector("#email").value,
        message: document.querySelector("#message").value
    };

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert('Thank you, ' + params['sendername'] + '! Your message has been sent.');
        })
        .catch(error => {
            console.error('Error sending email:', error);
        });
}
