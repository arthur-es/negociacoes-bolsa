class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacoesView.update();
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        console.log(negociacao);
        this._negociacoes.adiciona(negociacao);
        this._negociacoes.paraArray().length = 0;
        this._negociacoes.paraArray().forEach(negociacao => {
            console.log("Data: " + negociacao.data);
            console.log("Quantidade: " + negociacao.quantidade);
            console.log("Valor: " + negociacao.valor);
        });
    }
}
