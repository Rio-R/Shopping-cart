// Define Dom
let productList = document.querySelector('#cart_list');
let cartResult = document.querySelector('#cart_result');

// Define Event
productList.addEventListener('click', addtoCart);
cartResult.addEventListener('click', removeFromCart);
document.addEventListener('DOMContentLoaded', getListFunction);

// Define Function
// Add to Cart
function addtoCart(e){
    if(e.target.hasAttribute('href')){
        let ele = e.target.parentElement;
        let listele = ele.firstChild.textContent;
        let newlist = document.createElement('li');
        newlist.appendChild(document.createTextNode(listele + " "));
        let link = document.createElement('a');
        link.setAttribute('href', "#");
        link.innerHTML = "X";
        newlist.appendChild(link);
        cartResult.appendChild(newlist);
        storeinLocalStorage(listele);
    }
    e.preventDefault();
}

// Remove from cart
function removeFromCart(e){
    if(e.target.hasAttribute('href')){
        let ele = e.target.parentElement;
        ele.remove();
        removefunction(ele);
    }
    e.preventDefault();
}

// Add to local storage
function storeinLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(task);
}

// Get List Function
function getListFunction(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    console.log(tasks);
    tasks.forEach(task =>{
        let newlist = document.createElement('li');
        newlist.appendChild(document.createTextNode(task + " "));
        let link = document.createElement('a');
        link.setAttribute('href', "#");
        link.innerHTML = "X";
        newlist.appendChild(link);
        cartResult.appendChild(newlist);
    })
}
// Remove List Form Local Storage
function removefunction(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    let li = taskItem;
    li.removeChild(li.lastChild);

    tasks.forEach((task, index)=>{
        if(li.textContent.trim() === task){
            tasks.splice(index, 1);
        }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
}