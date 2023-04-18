var title = document.querySelector("#title");

title.addEventListener("mouseover", function(){
    this.style.background = "yellow";
});

title.addEventListener ("mouseout", function(){
    this.style.background = "#fff";
})

var subtitle = document.querySelector("#subtitle");


subtitle.addEventListener("mouseover" , function(){

    var p = document.querySelector("#paragrafo");

    p.classList.remove ("hide");
});

subtitle.addEventListener("mouseout" , function(){

    var p = document.querySelector("#paragrafo");

    p.classList.add ("hide");
});