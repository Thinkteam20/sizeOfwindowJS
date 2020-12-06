
const body = document.querySelector("body")

function controlBG(event){
    const sizeOfWindow = document.documentElement.clientWidth;;
    //console.log(sizeOfWindow);
    if(sizeOfWindow > 701 ){
        body.style.backgroundColor = "red";
    }else if(sizeOfWindow < 700 && sizeOfWindow > 300 ){
        body.style.backgroundColor = "#59a5a5";
    }else if(sizeOfWindow > 0 && sizeOfWindow < 300){
        body.style.backgroundColor = "#112111";
    }
    
}

function init(){
    window.addEventListener("resize",controlBG);
}

init();