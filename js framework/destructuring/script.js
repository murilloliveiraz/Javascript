const frutas = ["banana" , "uva"]
const [fruta1, fruta2] = frutas;

console.log(frutas)

const useState = [
    'blue',
    function(color) {
        useState[0] = color;
    }
];

const [color , setColor] = useState;

setColor("red");