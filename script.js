document.querySelectorAll(".preview").forEach(img => {
    img.addEventListener("mouseover", function () {
        upDate(this);
    });
    img.addEventListener("mouseleave", undo);

   
    img.addEventListener("focus", function () {
        upDate(this);
    });
    img.addEventListener("blur", undo);
});


function upDate(previewPic) {
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
    imageDiv.innerText = previewPic.alt;
}


function undo() {
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "";
    imageDiv.innerText = "Hover over an image below to display here.";
}

window.onload = function () {
    addTabFocusAttributes();
    console.log("Page loaded, tabindex attributes added.");
};


function addTabFocusAttributes() {
    const previews = document.querySelectorAll(".preview");
    previews.forEach((img, index) => {
        img.setAttribute("tabindex", index + 1); 
    });
}
