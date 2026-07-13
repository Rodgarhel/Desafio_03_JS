const ele = document.getElementById("ele1")

function pintar(clicked, color = "green"){
    clicked.style.backgroundColor = color};

ele.addEventListener("click", () => pintar(ele, "yellow")
)

pintar(ele)