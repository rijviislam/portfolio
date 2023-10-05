const observeSkill = document.querySelectorAll(".skill");

const myObserve = new IntersectionObserver((item) => {
    item.forEach((element) => {
        if (element.isIntersecting) {
            element.target.classList.add("skill_active");
        } else {
            element.target.classList.remove("skill_active");
        };
    });
});

observeSkill.forEach((e) => {
    myObserve.observe(e);
});
