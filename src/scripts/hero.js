
const customCursor = document.querySelector(".custom_cursor");
const interactiveElements = document.querySelectorAll('a, i ');
const gamil = document.querySelectorAll(".my_gmail");

document.addEventListener("mousemove", (e) => {
    customCursor.style.left = e.pageX + 'px';
    customCursor.style.top = e.pageY + 'px';
});

interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
        customCursor.style.width = '40px';
        customCursor.style.height = '40px';
        customCursor.classList.add('active');
    });
    element.addEventListener("mouseleave", () => {
        customCursor.style.width = '10px';
        customCursor.style.height = '10px';
        customCursor.classList.remove('active');
    });
});

gamil.forEach((mail) => {
    mail.addEventListener("mouseenter", () => {
        customCursor.style.width = "50px";
        customCursor.style.height = "50px";
    });
    mail.addEventListener("mouseleave", () => {
        customCursor.style.width = "10px";
        customCursor.style.height = "10px";
    });
})

