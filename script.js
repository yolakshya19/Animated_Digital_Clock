
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const time = document.querySelector(".time");

setInterval(() => {
    const date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    if (hh >= 12) {
        hh = hh - 12;
    }
    time.textContent = date.toLocaleTimeString();
    hour.setAttribute("data-number", hh + mm / 60);
    minute.setAttribute("data-number", mm + ss / 60);
    second.setAttribute("data-number", ss);
    const circles = document.querySelectorAll(".circle");

    function drawCircle(circle, color, strokeWidth, radius) {
        circle.width = window.innerWidth;
        circle.height = window.innerHeight;
        let max_value = circle.dataset.number;
        let actual_value = circle.parentNode.dataset.number;

        let angle = (actual_value / max_value) * 2 * Math.PI;
        const ctx = circle.getContext("2d");
        ctx.beginPath();
        ctx.arc(circle.width / 2, circle.height / 2, radius, 0, angle, false);
        ctx.lineCap = "round";
        ctx.strokeStyle = color;
        ctx.lineWidth = strokeWidth;
        ctx.stroke();
    }

    drawCircle(circles[0], "#102542", 8, 200);
    drawCircle(circles[1], "#F87060", 8, 180);
    drawCircle(circles[2], "#CDD7D6", 8, 160);
    // circle, length, color, strokeWidth, radius
}, 1000);
