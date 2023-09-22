
//butonlar
const addButton = document.getElementById("addBtn");
const clearButton = document.getElementById("clearBtn");
//containerlar
const textInputArea = document.getElementById("textInput");
const todosContainer = document.getElementById("todos");
const body = document.body;


//functions
/*Todo Ekleme fonksiyonu*/
addButton.addEventListener("click", (e) => {
    if (textInputArea.value !== "") {
        let paragraf = document.createElement("p");
        let TodoItem = document.createElement("div");
        let singleClearButton = document.createElement("button");
        let paragrafDiv = document.createElement("div");
        paragrafDiv.className = "paragrafDiv";
        singleClearButton.innerHTML = "Clear";
        singleClearButton.id = "singleClearBtn";
        singleClearButton.className = "btn";
        paragraf.innerHTML = textInputArea.value;
        TodoItem.className = "toDoItem";
        textInputArea.value = "";
        paragrafDiv.appendChild(paragraf);
        TodoItem.appendChild(paragrafDiv);
        TodoItem.appendChild(singleClearButton);
        todosContainer.appendChild(TodoItem);
        textInputArea.placeholder ="Planladığınız İşi Yazınız";
        textInputArea.style.border ="";
    }
    else {
        textInputArea.placeholder ="Lütfen geçerli bir değer giriniz";
        textInputArea.style.border = "4px solid red";
    }
})
/*Todoların hepsini silme fonksiyonu*/
clearButton.addEventListener("click", (e) => {
    while (todosContainer.firstChild) {
        todosContainer.removeChild(todosContainer.lastChild);
        console.log("clear çalıştı.");
    }
})
/*Todolardaki clear butonuna tıklayınca tıklandığı todoyu silme fonksiyonu*/
todosContainer.addEventListener("click", (e)=> {
 if(e.target.id ==="singleClearBtn") {
    
    e.target.parentElement.remove();
 }
 e.preventDefault();
})




