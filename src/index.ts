// 1. Crie uma classe Contador, que encapsule um valor usado para
// contagem de itens ou eventos. A classe deve oferecer métodos que
// devem:
// a) Zerar;
// b) Incrementar;
// c) Retornar o valor do contador.
console.log('exercicio 1');

class Contador {
  private item: number;

  constructor(valorInicial = 0) {
    this.item = valorInicial;
  }

  zerar() {
    this.item = 0;
  }

  incermentar() {
    this.item++;
  }

  imprimeContador() {
    return console.log(this.item);
  }
}


const contador = new Contador();
contador.incermentar();
contador.incermentar();
contador.incermentar();
contador.imprimeContador();
contador.zerar();
contador.imprimeContador();

// 2. Crie uma classe que modele uma bola:
// a. Atributos
// i. Cor
// ii. Circunferência
// iii. Material
// b. Métodos
// i. Trocar Cor
// ii. Mostrar cor
console.log('exercicio 2');

class Bola {
  cor: string;
  circunferencia: number;
  material: string;

  constructor(cor: string, circunferencia: number, material: string) {
    this.cor = cor;
    this.circunferencia = circunferencia;
    this.material = material;
  }

  trocarACor(cor: string) {
    this.cor = cor;
  }

  mostrarACor() {
    return console.log(this.cor);
  }
}

const bola1 = new Bola("azul", 20, "plástico");
bola1.mostrarACor();
bola1.trocarACor("vermelho");
bola1.mostrarACor();

// 3. Crie uma classe para implementar uma conta corrente. A classe
// deve possuir os seguintes atributos:
// a. Número da conta
// b. Nome do correntista
// c. Saldo
// Os métodos são os seguintes:
// a) Alterar nome
// b) Deposito
// c) Saque
// No construtor, o saldo é opcional, com valor padrão zero e os
// demais atributos são obrigatórios. A conta não pode ficar com saldo
// negativo.
console.log('exercicio 3');

class ContaCorrente {
  private numero: string;
  public nome: string;
  public saldo: number;

  constructor(numero: string, nome: string, saldoInicial?: number) {
    this.numero = numero;
    this.nome = nome;
    this.saldo = saldoInicial || 0;
  }

  alterarNome(nome: string) {
    this.nome = nome;
  }

  deposito(valor: number) {
    this.saldo += valor;
  }

  saque(valor: number) {
    if (valor > this.saldo) {
      return "Saldo insuficiente";
    }

    return this.saldo -= valor;
  }
}

const contaKelly = new ContaCorrente("123456", "Kelly");
console.log(contaKelly.saldo);
contaKelly.deposito(100);
console.log(contaKelly.saldo);
console.log(contaKelly.saque(200));
console.log(contaKelly.saldo);
contaKelly.alterarNome("Tanara");
console.log(contaKelly.nome);

// 4. Crie uma classe para representar uma Calculadora. Esta classe
// deve conter um atributo que servirá para armazenar o histórico das
// operações e seus respectivos resultados.
// a. Esta classe deve conter as operações de somar, multiplicar,
// dividir e diminuir.
// b. Esta classe deve iniciar com o histórico vazio
// c. Esta classe deve conter uma ação para visualizar o histórico.
console.log('exercicio 4');

class Calculadora {
  private operacoes: string[] = [];

  somar(a: number, b: number): number {
    const resultado = a + b;
    this.operacoes.push(`Soma de ${a} e ${b} = ${resultado}`);
    return resultado;
  }

  multiplicar(a: number, b: number): number {
    const resultado = a * b;
    this.operacoes.push(`Multiplicação de ${a} e ${b} = ${resultado}`);
    return resultado;
  }

  dividir(a: number, b: number): number {
    const resultado = a / b;
    this.operacoes.push(`Divisão de ${a} e ${b} = ${resultado}`);
    return resultado;
  }

  diminuir(a: number, b: number): number {
    const resultado = a - b;
    this.operacoes.push(`Subtração de ${a} e ${b} = ${resultado}`);
    return resultado;
  }

  getOperacoes(): string[] {
    return this.operacoes;
  }
}
const Calc = new Calculadora();

const somar = Calc.somar(5, 5);
console.log(somar);

const diminuir = Calc.diminuir(10, 5);
console.log(diminuir);

const dividir = Calc.dividir(10, 5);
console.log(dividir);

const multiplicar = Calc.multiplicar(10, 2);
console.log(multiplicar);

// 5. Faça um programa completo utilizando classes e métodos que:
// a. Possua uma classe chamada BombaCombustivel, com no
// mínimo esses atributos:
// i. tipoCombustivel.
// ii. valorLitro
// iii. quantidadeCombustivel

// b. Possua no mínimo esses métodos:
// i. abastecerPorValor() – método onde é informado o
// valor a ser abastecido e mostra a quantidade de litros
// que foi colocada no veículo

// ii. abastecerPorLitro() – método onde é informado a
// quantidade em litros de combustível e mostra o valor a
// ser pago pelo cliente.

// iii. alterarValor() – altera o valor do litro do combustível.
// iv. alterarCombustivel() – altera o tipo do combustível.
// v. alterarQuantidadeCombustivel() – altera a
// quantidade de combustível restante na bomba.

// OBS: Sempre que acontecer um abastecimento é necessário
// atualizar a quantidade de combustível total na bomba. Não deve ser
// possível abastecer se não tiver gasolina suficiente na bomba.
console.log('exercicio 5');

class BombaCombustivel {
  public tipoCombustivel: string;
  public valorLitro: number;
  private quantidadeCombustivel: number;

  constructor(
    tipoCombustivel: string,
    valorLitro: number,
    quantidadeCombustivel: number
  ) {
    this.tipoCombustivel = tipoCombustivel;
    this.valorLitro = valorLitro;
    this.quantidadeCombustivel = quantidadeCombustivel;
  }

  abastecerPorValor(valor: number) {
    const litros = valor / this.valorLitro;

    if (litros <= this.quantidadeCombustivel) {
      this.quantidadeCombustivel - litros;
      return `Abasteceu ${litros} litros de ${this.tipoCombustivel}`;
    } else {
      return 'Quantidade de litros indisponível na bomba';
    }
  }

  abastecerPorLitro(litros: number) {
    if (litros <= this.quantidadeCombustivel) {
      this.quantidadeCombustivel - litros;
      const valorTotal = litros * this.valorLitro;

      return `Abasteceu ${litros} litros de ${this.tipoCombustivel}, e o valor total é de ${valorTotal}`;
    } else {
      return "Quantidade de litros indisponível na bomba";
    }
  }

  alterarValor(novoValor: number) {
    const novoValorDoLitro = (this.valorLitro = novoValor);
    return `O valor do litro do combustivel ${this.tipoCombustivel} é de ${novoValorDoLitro} reais`;
  }

  alterarCombustivel(novoCombustivel: string) {
    this.tipoCombustivel = novoCombustivel;
    return `O combustivel disponível é ${this.tipoCombustivel}`;
  }

  alterarQuantidadeCombustivel(novaQuantidade: number) {
    this.quantidadeCombustivel = novaQuantidade;
    return `A quantidade de combustivel disponível é ${this.quantidadeCombustivel} litros`;
  }
}

const bomba = new BombaCombustivel("gasolina", 5, 500);
console.log(bomba.abastecerPorLitro(100));
console.log(bomba.abastecerPorValor(200));
console.log(bomba.alterarValor(6));
console.log(bomba.alterarCombustivel("alcool"));
console.log(bomba.alterarQuantidadeCombustivel(600));

// 6. Implemente uma classe chamada Carro com as seguintes
// propriedades:
// a. Um veículo tem um certo consumo de combustível (medidos
// em km / litro) e uma certa quantidade de combustível no
// tanque.
// b. O consumo é especificado no construtor e o nível de
// combustível inicial é 0.
// c. Forneça um método andar() que simula o ato de dirigir o
// veículo por uma certa distância, reduzindo o nível de
// combustível no tanque de gasolina.

// d. Forneça um método obterGasolina(), que retorna o nível atual
// de combustível e forneça um método adicionarGasolina(),
// para abastecer o tanque.
console.log('exercicio 6');

class Carro {
  consumoDeCombustivel: number;
  quantidadeDeCombustivel: number;

  constructor(consumo: number) {
    this.consumoDeCombustivel = consumo;
    this.quantidadeDeCombustivel = 0;
  }

  andar(distancia: number) {
    const distanciaPercorrida = distancia / this.consumoDeCombustivel;
    return this.quantidadeDeCombustivel -= distanciaPercorrida;
  }

  obterGasolina() {
    return this.quantidadeDeCombustivel;
  }

  adicionarGasolina(quantidadeGasolina: number) {
    return this.quantidadeDeCombustivel += quantidadeGasolina;
  }
}

const apocalypse = new Carro(17);
console.log(apocalypse.adicionarGasolina(84));
console.log(apocalypse.andar(126));
console.log(apocalypse.obterGasolina());

class RegistroOperacao {
  operacao: string;
  operandos: number[];
  resultado: number;

  constructor(operacao: string, operandos: number[], resultado: number) {
    this.operacao = operacao;
    this.operandos = operandos;
    this.resultado = resultado;
  }

  imprimeRegistro() {
    console.log(`${this.operacao} [${this.operandos}] = ${this.resultado}`);
  }
}
