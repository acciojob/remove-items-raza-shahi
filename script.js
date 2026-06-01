//your JS code here. If required.
let selectElement = document.getElementById('colorSelect');
let deleteBtn = document.querySelector('input[type="button"]');

deleteBtn.addEventListener('click',()=>{
	let selectedIndex = selectElement.selectedIndex;
	if(selectedIndex>=0){
		selectElement.remove(selectedIndex);
	}
})