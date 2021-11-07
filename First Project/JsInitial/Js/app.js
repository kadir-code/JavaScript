const todoText=document.querySelector("#todoText");
const todoList=document.querySelector("#todoList");
const addBtn=document.querySelector("#addBtn");
const dellBtn=document.querySelector("#dellBtn");

events();

function events() {
 dellBtn.addEventListener("click",deleteAll);
 addBtn.addEventListener("click",add);
 todoList.addEventListener("click",deleteOneByOne);

}

function add(params) {
 const listItem=document.createElement("li");
listItem.textContent=todoText.value;
todoList.append(listItem);

const link=document.createElement("a");
link.href="#";
link.innerHTML='<i class="float-end">X</i>';
listItem.appendChild(link);
listOfItemsWillBeCreated.appendChild(listItem);
todoText.value="";
}

function deleteOneByOne(e) {
 if (e.target.className === "float-end") {
        e.target.parentElement.parentElement.remove();
    }
}

function deleteAll() {
 $('li').hide();
 alert("Remove Ewerything..!");
 while (listOfItemsWillBeCreated.firstChild != null) {
  listOfItemsWillBeCreated.removeChild(listOfItemsWillBeCreated.firstElementChild);
 }
}
