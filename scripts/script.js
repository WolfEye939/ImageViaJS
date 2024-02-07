const imgRoot = "./img/"

const imagelist = [
    "Klem",
    "MalAsri",
    "Faraday"
];

const Klem_IMG = document.getElementById("ImgKlem")
const Asri_IMG = document.getElementById("ImgAsri")
const Fara_IMG = document.getElementById("ImgFara")

//let klemImg = document.getElementsById('');
function changeImgA() { 
    document.getElementById("ImgKlem").src = imgRoot + imagelist[0] + " AE.png"
    document.getElementById("ImgAsri").src = imgRoot + imagelist[1] + " AE.png";
    document.getElementById("ImgFara").src = imgRoot + imagelist[2] + " AE.png";
    return console.log("Changed to Alpha Emission");
};


function changeImgB() { 
    document.getElementById("ImgKlem").src = imgRoot + imagelist[0] + ".png"
    document.getElementById("ImgAsri").src = imgRoot + imagelist[1] + ".png";
    document.getElementById("ImgFara").src = imgRoot + imagelist[2] + ".png"
    return console.log("Changed back to Original");
}

function changeImg() {
    if (Klem_IMG.src.match("./img/Klem.png"), Asri_IMG.src.match("./img/MalAsri.PNG"), Fara_IMG.src.match("./img/Fara.PNG")) { 
        document.getElementById("ImgKlem").src = imgRoot + imagelist[0] + " AE.png";
        document.getElementById("ImgAsri").src = imgRoot + imagelist[1] + " AE.png";
        document.getElementById("ImgFara").src = imgRoot + imagelist[2] + " AE.png";
    } 
    else { 
        document.getElementById("ImgKlem").src = imgRoot + imagelist[0] + ".png";
        document.getElementById("ImgAsri").src = imgRoot + imagelist[1] + ".png";
        document.getElementById("ImgFara").src = imgRoot + imagelist[2] + ".png"; 
    }
}