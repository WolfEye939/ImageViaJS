const imgRoot = "./img/"

const imagelist = [
    "Klem",
    "MalAsri",
    "Faraday",
    "MalAsriGlass"
];


/*
const Klem_IMG = document.getElementById("ImgKlem")
const Asri_IMG = document.getElementById("ImgAsri")
const Fara_IMG = document.getElementById("ImgFara")
*/

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

var Klem_IMG = document.getElementById('ImgKlem');
var Asri_IMG = document.getElementById('ImgAsri');
var Fara_IMG = document.getElementById('ImgFara');
var GlassAE_IMG = document.getElementById('ImgGlassAE');

function changeImg1() {
    if (Klem_IMG.src.match("Klem.png")) 
      { Klem_IMG.src = imgRoot + imagelist[0] + "_AE.png"; } 
    else { Klem_IMG.src = imgRoot + imagelist[0] + ".png"; }
}

function changeImg2() {
    if (Asri_IMG.src.match("MalAsri.png")) 
      { Asri_IMG.src = imgRoot + imagelist[1] + "_AE.png"; }
    else { document.getElementById("ImgAsri").src = imgRoot + imagelist[1] + ".png"; }
}

function changeImg3() {
    if (Fara_IMG.src.match("Faraday.png")) 
        { Fara_IMG.src = imgRoot + imagelist[2] + "_AE.png"; }
      else 
        { document.getElementById("ImgFara").src = imgRoot + imagelist[2] + ".png"; }
}

function changeImg4() {
  if(GlassAE_IMG.src.match("MalAsriGlass.png"))
      { GlassAE_IMG.src = imgRoot + imagelist[3] + "_AE.png"; }
    else
      { document.getElementById("ImgGlassAE").src = imgRoot + imagelist[3] + ".png"; }
}