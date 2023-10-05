
const observerContact = document.querySelectorAll(".contact");

const observer = new IntersectionObserver((element) => {
    element.forEach((observeE) => {
        if (observeE.isIntersecting) {
            observeE.target.classList.add("contact_content_active");
        } else {
            observeE.target.classList.remove("contact_content_active");
        }
    });
});
observerContact.forEach((item) => {
    observer.observe(item);
});