/* Object.values

    const produto = {nome : 'Produto', preco : 1.8};
    const caneca =  Object.assign({}, produto, {material : 'porcelana'});

    console.log(Object.values(caneca));
*/

/* Object.entries
    
    const produto = {nome : 'Produto', preco : 1.8};
    const caneca =  Object.assign({}, produto, {material : 'porcelana'});

    console.log(Object.entries(caneca));

*/

/* Object.assign(des, any)
    const produto = {nome : 'Produto', preco : 1.8};
    const caneca =  Object.assign({}, produto, {material : 'porcelana'});

    caneca.nome = 'Caneca';
    caneca.preco = 2.5;
    console.log(produto);
    console.log(caneca);
*/
// Object.getOwnPropertyDescriptor(o , 'prop')


/* ... (spread)
    const produto = {nome : 'Produto', preco : 1.8};
    const caneca =  {
        ...produto , 
        material : 'Porcelana'
    };
    console.log(produto);
    caneca.nome = 'Caneca';
    caneca.preco = 2.5;
    console.log(caneca);
*/


/* Object.keys (retorna as chaves do objeto)

    const produto = {nome : 'Produto', preco : 1.8};
    const caneca =  Object.assign({}, produto, {material : 'porcelana'});

    console.log(Object.keys(caneca));

*/

/* Object.freeze (congela o objeto)
    
    const produto = {nome : 'Produto', preco : 1.8};
    Object.freeze(produto);
    produto.nome = 'outro nome';
    console.log(produto);

*/
/* Object.defineProperties (define varias propriedades)
    const produto = {nome : 'Produto', preco : 1.8};
    Object.defineProperty(produto, 'nome',{
        writable : false,
        configurable : false
    });
    console.log(Object.getOwnPropertyDescriptor(produto , 'nome'));
    produto.preco = 'outro preco';
    produto.nome = 'outro nome';
    delete produto.nome;
    console.log(produto);

*/
// Object.defineProperty (define uma propriedade)

const produto = {nome : 'Produto', preco : 1.8};
    const caneca =  Object.assign({}, produto, {material : 'porcelana'});

    console.log(Object.values(caneca));

