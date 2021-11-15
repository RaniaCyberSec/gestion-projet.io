const bloc = Array.from(document.querySelectorAll(".cadre"));
const li = Array.from(document.querySelectorAll("li"));

li.forEach((date) => {
    date.addEventListener("click", (e) => {
        for (let i = 0; i < li.length; i++) {
            if (li[i] === e.target) {
                li[i].classList.add("actual");
            } else {
                li[i].classList.remove("actual");
            }
        }
        for (let i = 0; i < bloc.length; i++) {
            if (i === li.indexOf(e.target)) {
                bloc[i].classList.add("visible");
            } else {
                bloc[i].classList.remove("visible");
            }
        }
    });
});
