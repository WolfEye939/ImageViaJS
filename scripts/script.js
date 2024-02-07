const imgRoot = "./img/"

const imagelist = [
    "Klem.png",
    "KlemAE.png"
];

//let klemImg = document.getElementsById('');
function changeImgA() { 
    document.getElementById("ImgKlem").src = imgRoot + imagelist[1];
    return console.log("Changed to Alpha Emission");
};


function changeImgB() { 
    document.getElementById("ImgKlem").src = imgRoot + imagelist[0];
    return console.log("Changed back to Original");
}