

const goToList = ()=>{
   requisitar("budget-list.html");
}

const addNewBudget = () =>{
    if(checkFields()){
        const nomeCliente = document.getElementById("nomeCliente").value;
        const nomeVendedor = document.getElementById("nomeVendedor").value;
        const telefone = document.getElementById("telefone").value;
        const descricao = document.getElementById("descricao").value;
        const precoOrcamento = document.getElementById("precoOrcamento").value;
    
        const newBudget = new Budget(nomeCliente, nomeVendedor, telefone, descricao, precoOrcamento);
        const repository = new Repository();
    
        if(repository.addNewBudget(newBudget)){
            alert(`Orçamento com id ${newBudget.id} cadastrado com sucesso!`)
            requisitar("budget-list.html");
        }
    }else{
        alert("Preencha todos os campos")
    }
}

const checkFields = () =>{
    return true;
}



