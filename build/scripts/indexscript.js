var currentImage = 0;
var myImages = [
    "https://i.ytimg.com/vi/_jHKkonePsE/maxresdefault.jpg",
    "https://www.cappex.com/assets/c-2000/photos/042915_staffheadshots_0429.jpg",
    "https://i.ytimg.com/vi/9sxMr4IdXaU/maxresdefault.jpg"
];
var intervalNum = 4000;

document.getElementById("myImg").style.background = `#f3f3f3 url(' ${myImages[currentImage]}') bottom center no-repeat`;
document.getElementById("myImg").style.backgroundSize = "cover";
document.getElementById(`myButton1`).style.background = "#FC0";
document.getElementById(`myButton2`).style.background = "rgba(0, 0, 0, 0.0)";
document.getElementById(`myButton3`).style.background = "rgba(0, 0, 0, 0.0)";

function nextFunction() {
    console.log(currentImage);
    console.log("length: " + myImages.length)
    if (myImages[currentImage] != null) {
        if (currentImage == myImages.length - 1) {
            currentImage = 0;
            document.getElementById("myImg").style.background = `#f3f3f3 url(' ${myImages[currentImage]}')  bottom center no-repeat`;
            document.getElementById("myImg").style.backgroundSize = "cover";
        } else if (currentImage >= 0) {

            document.getElementById("myImg").style.background = `#f3f3f3 url(' ${myImages[currentImage + 1]}')  bottom center no-repeat`;
            document.getElementById("myImg").style.backgroundSize = "cover";
            currentImage += 1;
        } else {
            currentImage = 0;
            document.getElementById("myImg").style.background = `#f3f3f3 url(' ${myImages[currentImage]}')  bottom center no-repeat`;
            document.getElementById("myImg").style.backgroundSize = "cover";
        }
    }
    switch(currentImage){
        case 0:
        document.getElementById(`myButton1`).style.background = "#FC0";
        document.getElementById(`myButton2`).style.background = "rgba(0, 0, 0, 0.0)";
        document.getElementById(`myButton3`).style.background = "rgba(0, 0, 0, 0.0)";
        break;
        case 1:
        document.getElementById(`myButton2`).style.background = "#FC0";
        document.getElementById(`myButton1`).style.background = "rgba(0, 0, 0, 0.0)";
        document.getElementById(`myButton3`).style.background = "rgba(0, 0, 0, 0.0)";
        break;
        case 2:
        document.getElementById("myButton1").style.background = "rgba(0, 0, 0, 0.0)";
        document.getElementById("myButton2").style.background = "rgba(0, 0, 0, 0.0)";
        document.getElementById("myButton3").style.background = "#FC0";
        break;
    }
    
}
function prevFunction() {
    intervalNum = 0;    
    console.log(currentImage);
    console.log("length: " + myImages.length)
    if (myImages[currentImage] != null) {
        if (currentImage == 0) {
            currentImage = myImages.length - 1;
            document.getElementById("myImg").style.background = `#f3f3f3 url(' ${myImages[currentImage]}')  bottom center no-repeat`;
            document.getElementById("myImg").style.backgroundSize = "cover";

        } else if (currentImage <= myImages.length - 1) {

            document.getElementById("myImg").style.background = `#f3f3f3 url(' ${myImages[currentImage - 1]}')  bottom center no-repeat`;
            document.getElementById("myImg").style.backgroundSize = "cover";

            currentImage -= 1;
        } else {
            currentImage = 0;
            document.getElementById("myImg").style.background = `#f3f3f3 url(' ${myImages[currentImage]}')  bottom center no-repeat`;
            document.getElementById("myImg").style.backgroundSize = "cover";
        }
    }
    switch(currentImage){
        case 0:
        document.getElementById(`myButton1`).style.background = "#FC0";
        document.getElementById(`myButton2`).style.background = "rgba(0, 0, 0, 0.0)";
        document.getElementById(`myButton3`).style.background = "rgba(0, 0, 0, 0.0)";
        break;
        case 1:
        document.getElementById(`myButton2`).style.background = "#FC0";
        document.getElementById(`myButton1`).style.background = "rgba(0, 0, 0, 0.0)";
        document.getElementById(`myButton3`).style.background = "rgba(0, 0, 0, 0.0)";
        break;
        case 2:
        document.getElementById("myButton1").style.background = "rgba(0, 0, 0, 0.0)";
        document.getElementById("myButton2").style.background = "rgba(0, 0, 0, 0.0)";
        document.getElementById("myButton3").style.background = "#FC0";
        break;
    }
    
}

function currentDiv(n) {
    intervalNum = 0;
    currentImage = n-1;
    console.log("IF: "+ currentImage);
    document.getElementById("myImg").style.background = `#f3f3f3 url(' ${myImages[currentImage]}')  bottom center no-repeat`;
    document.getElementById("myImg").style.backgroundSize = "cover";
    switch(currentImage){
        case 0:
        document.getElementById(`myButton1`).style.background = "#FC0";
        document.getElementById(`myButton2`).style.background = "rgba(0, 0, 0, 0.0)";
        document.getElementById(`myButton3`).style.background = "rgba(0, 0, 0, 0.0)";
        break;
        case 1:
        document.getElementById(`myButton2`).style.background = "#FC0";
        document.getElementById(`myButton1`).style.background = "rgba(0, 0, 0, 0.0)";
        document.getElementById(`myButton3`).style.background = "rgba(0, 0, 0, 0.0)";
        break;
        case 2:
        document.getElementById("myButton1").style.background = "rgba(0, 0, 0, 0.0)";
        document.getElementById("myButton2").style.background = "rgba(0, 0, 0, 0.0)";
        document.getElementById("myButton3").style.background = "#FC0";
        break;
    }
  
}



setInterval(nextFunction, intervalNum);