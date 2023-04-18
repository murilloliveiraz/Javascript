document.addEventListener ("keydown" , function(event){
    if (event.key === " "){
        console.log("apertou Enter");
    }
    console.log(event.key);
});

document.addEventListener ("keyup" , function(event){
    if (event.key === "Enter"){
        console.log("soltou Enter");
    }
});