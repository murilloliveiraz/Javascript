const pontos = 1200;

const nivelUsuario = pontos >= 1000 ? 'Usuario VIP' : 'Usuario Normal';

const corPadrao = 'Red';
const corUser = corPadrao || 'Black';

console.log(nivelUsuario , corUser)