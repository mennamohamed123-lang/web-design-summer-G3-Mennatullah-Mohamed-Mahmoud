let changeImg = () => {
    let img = document.querySelector("img");

    if (img.src.includes("menni.jpeg")) {
        img.src = "images/nemo.jpg";
    } 
    else {
        img.src = "images/menni.jpeg";
    }
}