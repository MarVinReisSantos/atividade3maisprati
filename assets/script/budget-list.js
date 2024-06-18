const renderBudgetList = (()=>{
  
  const repository = new Repository();
  const budgetList = repository.getAllBudgets();
  let htmlRetorno = "";

  budgetList.forEach(budget => {
    htmlRetorno +=`
    <tr>
      <th scope="row">${budget.id}</th>
      <td>${budget.nomeCliente} </td>
      <td>${budget.data} </td>
      <td>${budget.hora}</td>
      <td>${budget.nomeVendedor}</td>
      <td>${budget.telefone}</td>
      <td>${budget.descricao}</td>
      <td>${budget.precoOrcamento}</td>
      <td> 
          <div class="btn btn-primary" onclick="requisitar('budget-info.html', ${budget.id})">Info</div>
          <div class="btn btn-warning mx-md-1" onclick="requisitar('budget-update.html', ${budget.id})">Atualizar</div>
          <div class="btn btn-danger" onclick="requisitar('func-budget-delete', ${budget.id})">Excluir</div>
      </td>
    </tr>`
  });
  
  const tableBody = document.getElementById("budget-list");
  if(tableBody != null)
    tableBody.innerHTML = htmlRetorno;
});

const newBudget = (() => {
  requisitar("budget-register.html");
})
