function upDate(previewPic) {
    console.log(previewPic); 
    console.log(previewPic.src, previewPic.alt); 

    
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
    imageDiv.innerText = previewPic.alt;
}
