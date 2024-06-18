const budgetDelete = (id) => {
  const repository = new Repository();
  repository.removeBudgetById(id);
}

