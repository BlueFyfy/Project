const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
// document.querySelector("#hr") is also okay!

setInterval(() => {
    var day = new Date();
    var hh = day.getHours() * 30;
    var mm = day.getMinutes() * 6;
    var ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
    min.style.transform = `rotateZ(${(mm)}deg)`;
    sec.style.transform = `rotateZ(${(ss)}deg)`;
})



