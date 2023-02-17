let but = document.getElementById("customButton");
let bg = document.getElementById("bgColorInput");
let fc = document.getElementById("fontColorInput");
let fz = document.getElementById("fontSizeInput");
let fw = document.getElementById("fontWeightInput");
let pa = document.getElementById("paddingInput");
let br = document.getElementById("borderRadiusInput");

function apply() {
    but.style.backgroundColor = bg.value;
    but.style.color = fc.value;
    but.style.fontSize = fz.value;
    but.style.fontWeight = fw.value;
    but.style.padding = pa.value;
    but.style.borderRadius = br.value;

}
