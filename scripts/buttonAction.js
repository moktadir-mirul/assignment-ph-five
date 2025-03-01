let taskButtons = document.querySelectorAll(".task-btn-action");
if (taskButtons.length < 10 ) {
    document.getElementById('total-task').innerText = "0"+taskButtons.length;
} else if (taskButtons.length >=10) {
    document.getElementById('total-task').innerText = taskButtons.length;
}

for (let taskBtn of taskButtons) {
    taskBtn.addEventListener('mouseup', function(event) {
        alert('Board added succesfully')
        let btnAction = event.target;
        btnAction.classList.add("btn-disabled");
        let totalTaskNum = Number(document.getElementById("total-task").innerText);
        totalTaskNum = totalTaskNum - 1;
        document.getElementById("total-task").innerText = "0"+totalTaskNum;
        let allTaskNum = Number(document.getElementById('all-task').innerText);
        allTaskNum = allTaskNum + 1;
        document.getElementById("all-task").innerText = allTaskNum;
    })
    
}
