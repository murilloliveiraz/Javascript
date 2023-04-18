const upperName = name => name.toUpperCase();
const countLetters = count => count.length;
console.log(countLetters("murillo"));

class Menu {
    constructor (hello) {
        this.menuElement = document.querySelector(hello);
        this.activeClass = "active";
    }
    addActiveEvent () {
        this.menuElement.addEventListener("click" , event => {
            console.log(this);
            event.target.classList.add(this.activeClass);
        });
    }
}

const menu = new Menu (".principal");
menu.addActiveEvent();