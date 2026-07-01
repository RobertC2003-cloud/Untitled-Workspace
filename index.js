
// 
//
//

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
    .sendForm(
      'service_27jn1ji',
      'template_5gay43j',
      event.target,
      'zy_XPFxKnKe6Q4mAr'
    ) .then(() => {
     loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
    }) .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly at treylaker24@gmail.com"
        );
    })
}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}
