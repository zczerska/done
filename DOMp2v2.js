// JavaScript Document
let id = 0; //
function onReady() {
	const toDos = [];
	const addToDoForm = document.getElementById('addToDoForm');
	
	function createNewToDo() {
		const newToDoText = document.getElementById('newToDoText');
		if (!newToDoText.value) { return; }
		
		toDos.push({
		  title: newToDoText.value,
		  complete: false,
			id:id
			id++
    });
		newToDoText.value = '';
		
		renderTheUI();
  }
		
	function renderTheUI() {
		const toDoList = document.getElementById('toDoList');
		
		toDoList.textContent = '';
		
		toDos.forEach(function(toDo) {
			const newLi = document.createElement('li');
			  const checkbox = document.createElement('input');
			  checkbox.type = "checkbox";
			
			let deleteBtn = document.createElement('button');
			deleteBtn.textContent = "Delete";
			
			deleteBtn.addEventListener('click', function(event){
			
				toDoList.filter(toDoList =>this.parentElement>0);//
				renderTheUI();//
		})
			
			newLi.textContent = toDo.title;
			
			toDoList.appendChild(newLi);
      		newLi.appendChild(checkbox);
			newLi.appendChild(deleteBtn);//

    });
  }

	
	addToDoForm.addEventListener('submit', event => {
		event.preventDefault();
		createNewToDo();
	  });

		renderTheUI();
}

	function renderTheUI() {

  }

window.onload = function() {
  onReady();
};