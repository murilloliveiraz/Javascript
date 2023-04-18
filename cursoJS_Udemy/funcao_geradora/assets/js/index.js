function* geradora1(){
    yield 'Valor1';

    yield 'Valor2';

    yield 'Valor3';

}

function* geradora2(){
    let i = 0;

    while(true){
        yield i;
        i++;
    }
}


function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}
 
function* geradora4(){
    geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4= geradora4();

function* geradora5(){
    yield function(){
        console.log('vim do yl');
    };

    yield function(){
        console.log('vim do return');
    }

    yield function(){
        console.log('vim do ultim yl');
    }
}

const g5= geradora5();

const f1 = g5.next().value;
const f2 = g5.next().value;
const f3 = g5.next().value;

f1();
f2();
f3();

// const g1 = geradora();
// console.log(g1.next().value)
// console.log(g1.next().value)
// console.log(g1.next().value)
// console.log(g1.next())