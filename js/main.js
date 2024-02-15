function openForm() {
    document.getElementById("popup-inputs").style.display = "block";
}

function closeForm() {
    document.getElementById("popup-inputs").style.display = "none";
}

function toggleNav() {
    var sidebar = document.getElementById("mobile-menu");
    sidebar.classList.toggle('open');
}

const smoothLinks = document.querySelectorAll("a[href^='#']");
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute("href");

        document.querySelector(id).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
};