class Repository{
  addNewBudget(budget){
    try {
      let budgetList = this.getLocalStorage();
      let listLocalStorage = []; 
      
      if(budgetList){
        listLocalStorage = [...budgetList];
      }

      listLocalStorage = [...listLocalStorage, budget];

      this.setLocalStorage(listLocalStorage)

      return true;
    } catch (error) {
      return false;
    }
  }

  getLocalStorage(){
    return JSON.parse(localStorage.getItem('budgetList'));
  }

  setLocalStorage(listLocalStorage){
    localStorage.setItem('budgetList', JSON.stringify(listLocalStorage));
  }

  getAllBudgets(){
    return this.getLocalStorage();
  }

  getBudget(id){
    const budgetList = this.getLocalStorage();
    let budgetFilted = budgetList.filter((budget) => budget.id == id)
    return budgetFilted[0];
  }

  removeBudgetById(id){
    const budgetsList = this.getLocalStorage() 
    const budgetsFilted = budgetsList.filter((budget) => budget.id != id)
    this.setLocalStorage(budgetsFilted);
  }

  updateBudget(budget, id){
    this.removeBudgetById(id);
    this.addNewBudget(budget);
  }
}