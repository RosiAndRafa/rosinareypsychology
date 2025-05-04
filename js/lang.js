
document.addEventListener("DOMContentLoaded", function () {
    const langSelectors = document.querySelectorAll(".lang");

    langSelectors.forEach(flag => {
        flag.addEventListener("click", function () {
            const lang = this.getAttribute("data-lang");
            document.querySelectorAll(".es").forEach(el => {
                el.style.display = lang === "es" ? "block" : "none";
            });
            document.querySelectorAll(".en").forEach(el => {
                el.style.display = lang === "en" ? "block" : "none";
            });
        });
    });
});
