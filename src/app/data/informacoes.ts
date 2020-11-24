export class Informacoes {
    public listaDeInformacoes = [
        { titulo: "Onde?", descricao: 'O casamento será no <a target="_blank" rel="noopener noreferrer" href="https://www.palladiumhotelgroup.com/pt/hoteis/brasil/bahia/grand-palladium-imbassai-resort-spa"> Grand Palladium Imbassaí Resort & Spa</a>, um maravilhoso Resort All-Inclusive.' },
        { titulo: "O que é um Resort All-Inclusive?", descricao: 'Em um Resort All-Inclusive você só precisa pagar a hospedagem e todo o restante está incluso. Comida e bebida à vontade, além de acesso às áreas de lazer do hotel. <a target="_blank" rel="noopener noreferrer" href="https://www.palladiumhotelgroup.com/pt/hoteis/brasil/bahia/grand-palladium-imbassai-resort-spa">Saiba mais</a>.' },
        { titulo: "Como faço para ir?", descricao: 'Você precisa garantir sua hospedagem com a <a target="_blank" rel="noopener noreferrer" href="https://www.palladiumhotelgroup.com/pt/hoteis/brasil/bahia/grand-palladium-imbassai-resort-spa">Kemp Wedding</a>.' },
        { titulo: "Como falo com a Kemp Wedding?", descricao: 'Basta mandar uma mensagem no Whastapp deles assim: Olá, quero fechar um pacote para o casamento do Breno e da Dielen.' },
        { titulo: "Qual é o Whatsapp deles?", descricao: 'O número é (61) 3024-9707. Ou, se preferir, <a target="_blank" rel="noopener noreferrer" href="https://wa.me/556130249707">basta clicar aqui</a>.' },
        { titulo: "Existe outro jeito de entrar em contato?", descricao: 'Claro! Se você preferir, pode ligar para o número (61) 3024-9707. Ou ainda, pode ir na <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Kemp+Wedding/@-15.7434988,-47.8943972,15z/data=!4m2!3m1!1s0x0:0xe24ab3dd03b4d7c?sa=X&ved=2ahUKEwi1hJ-apIDtAhWMIbkGHf5ABLAQ_BIwCnoECBMQBQ">sede deles na Asa Norte, CLN 315 Bloco B Loja 18</a>.' },
    ];

    get ListaDeInformacoes() {
        return this.listaDeInformacoes;
    }

    constructor() { }
}
