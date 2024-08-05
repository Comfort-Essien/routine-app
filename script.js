const inputTask = document.getElementById("input-task")
const listContainer = document.getElementById("list-container")

function addRoutine() {
    if (inputTask.value === "") {
        alert('write your routine');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputTask.value
        
        let trashSpan = document.createElement("span")
        trashSpan.innerHTML = '<img src="./trash.png" class="deleteBtn">';
        li.appendChild(trashSpan)

        let editSpan = document.createElement("span")
       editSpan.innerHTML = '<img src="./pen.png" class="editBtn">';
        li.appendChild(editSpan)


        listContainer.appendChild(li);
    }
    inputTask.value = "";
    saveData();
}

listContainer.addEventListener('click', function (e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData();
    }
    
    else if (e.target.classList.contains('deleteBtn')) {
        e.target.parentElement.parentElement.remove();
        saveData();
    }

    else if (e.target.classList.contains('editBtn')) {
        inputTask.value = e.target.parentElement.parentElement.textContent;
        e.target.parentElement.parentElement.remove();
        saveData();
    }
} );

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();