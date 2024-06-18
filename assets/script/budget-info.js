const renderBudgetInfo = (id)=>{
  const repository = new Repository();
  const budget = repository.getBudget(id);

  document.getElementById("nomeCliente").innerText = budget.nomeCliente;
  document.getElementById("data").innerText = budget.data;
  document.getElementById("hora").innerText = budget.hora;
  document.getElementById("nomeVendedor").innerText = budget.nomeVendedor;
  document.getElementById("telefone").innerText = budget.telefone;
  document.getElementById("descricao").innerText = budget.descricao;
  document.getElementById("precoOrcamento").innerText = budget.precoOrcamento;
}

//Screen information 
const imprimir = ()=>{
  const rowBtn = document.getElementsByClassName("form-actions")[0];
  rowBtn.style.opacity = "0";
  window.print();
  rowBtn.style.opacity = "1";
}