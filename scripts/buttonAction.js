let taskButtons = document.querySelectorAll(".task-btn-action");
if (taskButtons.length < 10 ) {
    document.getElementById('total-task').innerText = "0"+taskButtons.length;
} else if (taskButtons.length >=10) {
    document.getElementById('total-task').innerText = taskButtons.length;
}

for (let taskBtn of taskButtons) {
    taskBtn.addEventListener('click', function(event) {
        alert('Board added succesfully')
        let btnAction = event.target;
        console.log(btnAction);
        btnAction.classList.add("btn-disbaled");
        
        
    })
    
}
