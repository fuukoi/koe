let listNames = JSON.parse(localStorage.getItem('list')) || [];
for(let i in listNames){
    let serie = JSON.parse(localStorage.getItem(listNames[i]));
    document.querySelector('#testes').innerHTML += '<li><img src='+serie.capa+'></li>';
}