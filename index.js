
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if(inputBox.value === '') {
        alert('write something first');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
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
    listContainer.innerHTML = localStorage.getItem('store');
}
showTask();
