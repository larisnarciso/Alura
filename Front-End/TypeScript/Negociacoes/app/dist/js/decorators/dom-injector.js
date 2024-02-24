export function domInjector(seletor) {
    return function (target, propetyKey) {
        console.log(`Modificando protype ${target.constructor.name} e adicionando getter para a propriedade ${propetyKey}`);
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`buscando elemento do DOM com o seletor ${seletor} para injetar em ${propetyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propetyKey, { get: getter });
    };
}
//# sourceMappingURL=dom-injector.js.map