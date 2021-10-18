function whf(model, btnElement) {
    var i, tabContent, tabBtn;

    tabContent = document.getElementsByClassName("tab-content");

    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabBtn = document.getElementsByClassName("tab-btn");

    for (i = 0; i < tabBtn.length; i++) {
        tabBtn[i].style.backgroundColor = "";
    }

    document.getElementById(model).style.display = "flex";
    document.getElementById(model).style.transition = ".5s";

    // btnElement.setAttribute("id", "active");

}

document.getElementById("clickedOn").click();