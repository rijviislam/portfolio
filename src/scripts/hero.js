
const customCursor = document.querySelector(".custom_cursor");
const interactiveElements = document.querySelectorAll('a, i');
const gamil = document.querySelectorAll(".my_gmail");

document.addEventListener("mousemove", (e) => {
    customCursor.style.left = e.pageX + 'px';
    customCursor.style.top = e.pageY + 'px';
});

interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
        customCursor.style.width = '40px';
        customCursor.style.height = '40px';
        customCursor.innerHTML = "";
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
        customCursor.style.width = "70px";
        customCursor.style.height = "70px";
        customCursor.innerHTML = "copy";
        customCursor.style.textAlign = "center";
        customCursor.style.lineHeight = "30px";
    });
    mail.addEventListener("mouseleave", () => {
        customCursor.style.width = "10px";
        customCursor.style.height = "10px";
    });
})

// var loader = document.querySelector(".loaderSvgWrapper");

// window.addEventListener("load", function () {
//     loader.style.display = "none";
// }
// )









