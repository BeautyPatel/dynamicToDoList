let count = 0;
const values = [];

const number = document.getElementById("number");
const total = document.getElementById("total");

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const progressBar = document.getElementById("progressBar");
const progressLine = document.getElementById("progressLine")
function addTask() {

    if (inputBox.value === '') {
        alert("You must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "Remove";
        li.appendChild(span);
        for (let a = 0; a < 10; a++) {
            count += 1
        }
        total.textContent = count / 10
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");

        values.length = 0;

        const listItems = listContainer.getElementsByClassName('checked');
        for (const item of listItems) {
            values.push(item.textContent);
        }

        const count = listContainer.getElementsByTagName("LI").length;
        const checkedCount = listItems.length;

        if (count > 0) {
            let test = checkedCount / count;
            let sliderValue = test * 100;

            progressLine.style.width = sliderValue + '%';
            number.textContent = checkedCount
        }

        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        removeTask()
        saveData();
    }
}, false);

function removeTask() {
    const listItems = listContainer.getElementsByClassName('checked');
    const count = listContainer.getElementsByTagName("LI").length;
    const checkedCount = listItems.length;

    if (count > 0) {
        let test = checkedCount / count;
        let sliderValue = test * 100;

        progressLine.style.width = sliderValue + '%';
        number.textContent = checkedCount;
    } else {
        progressLine.style.width = '0%';
        number.textContent = '0';
    }
}


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showList() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();