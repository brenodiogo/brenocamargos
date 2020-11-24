export class Convidados {
    public listaDePresenca = [
        { nome: "Breno Camargos", img: "./assets/img/avatar.svg", confirmado: true },
        { nome: "Dielen Galeno", img: "./assets/img/avatar.svg", confirmado: true },
        { nome: "Lete Camargos", img: "./assets/img/avatar.svg", confirmado: true },
        { nome: "Irene Camargos", img: "./assets/img/avatar.svg", confirmado: true },
        { nome: "Douglas Renan", img: "./assets/img/avatar.svg", confirmado: true },
        { nome: "Diogo Carneiro", img: "./assets/img/avatar.svg", confirmado: true },
        { nome: "Guilherme Gontijo", img: "./assets/img/avatar.svg", confirmado: true },
        { nome: "Tiago Medeiros", img: "./assets/img/avatar.svg", confirmado: true },
    ];

    get ListaDePresenca() {
        return this.listaDePresenca;
    }

    constructor(){}
}
