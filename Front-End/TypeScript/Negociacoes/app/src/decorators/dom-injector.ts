export function domInjector(seletor: string) {
  return function (target: any, propetyKey: string) {
    console.log(
      `Modificando protype ${target.constructor.name} e adicionando getter para a propriedade ${propetyKey}`
    );
    let elemento: HTMLElement;
    const getter = function () {
      if (!elemento) {
        elemento = <HTMLElement>document.querySelector(seletor);
        console.log(
          `buscando elemento do DOM com o seletor ${seletor} para injetar em ${propetyKey}`
        );
      }
      return elemento;
    };
    Object.defineProperty(target, propetyKey, { get: getter });
  };
}
