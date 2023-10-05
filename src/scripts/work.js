AOS.init();

const observeWork = document.querySelectorAll(".work");

const myObserve = new IntersectionObserver((element) => {
    element.forEach((item => {
        if (item.isIntersecting) {
            item.target.classList.add('work_active');
        } else {
            item.target.classList.remove('work_active');
        }
    }));
});

observeWork.forEach((item) => {
    myObserve.observe(item);
});