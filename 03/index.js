const precoDoTenis = 1299;
const meuDinheiro = 800;

const desconto = precoDoTenis - meuDinheiro;
const cupom = 100 * desconto / precoDoTenis;

console.log(`O valor do cupom deve ser ${cupom}%`);