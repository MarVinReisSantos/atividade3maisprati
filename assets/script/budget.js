class Budget{
  constructor(nomeCliente, nomeVendedor, telefone, descricao, precoOrcamento, id = undefined){
    const dataAtual = new Date();
    const ano = dataAtual.getFullYear(); 
    const mes = dataAtual.getMonth() + 1;
    const dia = dataAtual.getDate();

    this.nomeCliente = nomeCliente;
    this.nomeVendedor = nomeVendedor;
    this.telefone = telefone;
    this.data = `${dia.toString().padStart(2, '0')}-${mes.toString().padStart(2, '0')}-${ano}`;
    this.hora = `${dataAtual.getHours()}:${dataAtual.getMinutes()}`;
    this.descricao = descricao;
    this.precoOrcamento = precoOrcamento;

    if(id == undefined){
      this.id = Math.floor(Math.random() * (10000)) + 1;
    }else{
      this.id = id;
    }
  }
}