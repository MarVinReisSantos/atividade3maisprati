const requisitar = ((url, id = '')=>{
    document.getElementById('content').innerHTML = ''

    if(url == "func-budget-delete"){
        budgetDelete(id);
        url = "budget-list.html";
    }

    if(!document.getElementById('loading')) {
        const imgLoading = document.createElement('img')
        imgLoading.id = 'loading'
        imgLoading.src = './assets/gif/loading.gif'
        imgLoading.className = 'rounded mx-auto d-block'
        document.getElementById('content').appendChild(imgLoading)
    }

    let ajax = new XMLHttpRequest()
    
    ajax.open('GET', './page/'+url)

    ajax.onreadystatechange = () => {
        if(ajax.readyState == 4 && ajax.status == 200) {
            document.getElementById('content').innerHTML = ajax.responseText
            render(url, id);
        }

        if(ajax.readyState == 4 && ajax.status == 404) {
            document.getElementById('content').innerHTML = 'Requisição finalizada, porém o recurso não foi encontrado. Erro 404.'
        }
    }

    setTimeout(() => {
        ajax.send()
    }, 1000)
})

const render = ((url, id)=>{
    switch (url) {
        case "budget-list.html":
            renderBudgetList();
            break;
        case "budget-info.html":
            renderBudgetInfo(id);
            break;
        case "budget-update.html":
            renderUpdate(id);
            break;
        default:
            break;
    }
})
window.onload = ()=>{
    requisitar("budget-list.html");
};   