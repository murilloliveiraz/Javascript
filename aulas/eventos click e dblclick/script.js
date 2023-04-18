var btn = document.querySelector("#button");

btn.addEventListener("click", function(){
    console.log("clicou");
    console.log(this);

    this.style.color = "red";
});

var title = document.querySelector("#title");

title.addEventListener("click" , function(){
    var subtitle = document.querySelector("#subtitle");

    subtitle.style.display = "none";
});

var subtitle = document.querySelector("#subtitle");

subtitle.addEventListener("dblclick" , function(){
    console.log("click duplo");
});