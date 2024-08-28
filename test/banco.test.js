
const Banco = require("../src/banco");

describe('fbdfdfbdfb',()=>{
    let conta;

    beforeEach(()=>{
        conta = new Banco('Banco do Brasil',100);
        conta2 = new Banco('Nubank',200);
    })

    test("Validando metodo depositar", async () => {
        expect(conta.depositar(21)).toBe(121);
            
    });

    test("Validando metodo sacar", async () => {
        expect(conta.sacar(21)).toBe(79);
            
    });

    test("Validando metodo transferir", async () => {
        expect(conta.transferir(50,conta2));
        expect(conta2.obterSaldo()).toBe(250);
        expect(conta.obterSaldo()).toBe(50);
            
    });


});


