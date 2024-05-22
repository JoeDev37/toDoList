
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if(inputBox.value === '') {
        alert('write something first');
    } else {
        let li = document.createElement('li');
        let p = document.createElement('p');
        const textNode = document.createTextNode(`${inputBox.value}`);
        p.appendChild(textNode);
        li.appendChild(p);
        // li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        span.className = 'custom-span';
        li.appendChild(span); 
    }

    inputBox.value = '';
    storeDate();
}

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        storeDate();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        storeDate();
    }
}, false);

function storeDate() {
    localStorage.setItem('store', listContainer.innerHTML);
}

function showTask() {
    // const list = listContainer.innerHTML = localStorage.getItem('store');
    // if (list.lenght > 0) {
        
    // }

    const ls = localStorage.getItem('store');
    if (ls.length > 0) {
        listContainer.innerHTML = ls;
    }
}
showTask();
