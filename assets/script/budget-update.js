const  renderUpdate = (id) =>{
  const repository = new Repository();
  const budget = repository.getBudget(id);

  console.log(budget)
  document.getElementById("nomeCliente").value = budget.nomeCliente;
  document.getElementById("nomeVendedor").value = budget.nomeVendedor;
  document.getElementById("telefone").value = budget.telefone;
  document.getElementById("descricao").value = budget.descricao;
  document.getElementById("precoOrcamento").value = budget.precoOrcamento;
  document.getElementById("id").value = budget.id;
}

const budgetUpdate = () =>{
  const id = document.getElementById("id").value;
  const nomeCliente = document.getElementById("nomeCliente").value 
  const nomeVendedor = document.getElementById("nomeVendedor").value 
  const telefone = document.getElementById("telefone").value 
  const descricao = document.getElementById("descricao").value 
  const precoOrcamento = document.getElementById("precoOrcamento").value 

  const budget = new Budget(nomeCliente, nomeVendedor, telefone, descricao, precoOrcamento, id);
  const repository = new Repository();
  
  repository.updateBudget(budget, id);

  requisitar("budget-list.html");
}