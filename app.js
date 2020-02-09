function onReady() {
   const ADD_TODO_FORM = document.getElementById('addToDoForm');
   const NEW_TODO_TEXT = document.getElementById('newToDoText');
   const TODO_LIST = document.getElementById('toDoList');
	
	
	ADD_TODO_FORM.addEventListener('submit',(event) =>{
		event.preventDefault();
		
		let title = NEW_TODO_TEXT.value;
		
		
		
		let newLi = document.createElement('li'); //creates empty li
		
		let checkbox = document.createElement('input');
		checkbox.type = "checkbox";
		
		//checkbox.className = 'mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect';
        //componentHandler.upgradeElement(checkbox);
		
		let deleteBtn = document.createElement('button');
		deleteBtn.textContent = "Delete";
		
		
		deleteBtn.className = 'mdl-button mdl-js-button mdl-js-ripple-effect';
        componentHandler.upgradeElement(deleteBtn);
		deleteBtn.style.backgroundColor = "indigo";
		deleteBtn.style.color = "white";
		
		deleteBtn.addEventListener('click', function(event){
			TODO_LIST.removeChild(this.parentElement);
		})
		
		newLi.textContent = title;
		newLi.appendChild(checkbox);
		newLi.appendChild(deleteBtn);
		TODO_LIST.appendChild(newLi);
		NEW_TODO_TEXT.value = "";
		
		
	});
	
	
 }; 



window.onload = function() {
  onReady();
 };