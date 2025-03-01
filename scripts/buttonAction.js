let taskButtons = document.querySelectorAll(".task-btn-action");
if (taskButtons.length < 10) {
  document.getElementById("total-task").innerText = "0" + taskButtons.length;
} else if (taskButtons.length >= 10) {
  document.getElementById("total-task").innerText = taskButtons.length;
}

for (let taskBtn of taskButtons) {
  taskBtn.addEventListener("click", function (event) {
    alert("Board added succesfully");
    let btnAction = event.target;
    btnAction.classList.add("btn-disabled");
    let totalTaskNum = Number(document.getElementById("total-task").innerText);
    totalTaskNum = totalTaskNum - 1;
    document.getElementById("total-task").innerText = "0" + totalTaskNum;
    let allTaskNum = Number(document.getElementById("all-task").innerText);
    allTaskNum = allTaskNum + 1;
    document.getElementById("all-task").innerText = allTaskNum;
    if(totalTaskNum == 0) {
        alert('Congrats!')
    }
    let timeNow = new Date();
    let format = "AM";
    let hour = timeNow.getHours();
    let minute = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
    if (hour == 0) {
      hour = 12;
    } else if (hour > 12) {
      format = "PM";
      hour = hour - 12;
    }
    hour = hour < 10 ? "0" + hour : hour;
    let finalTime = `${hour}:${minute}:${seconds} ${format}`;
    console.log(finalTime);
    const parentElement = taskBtn.parentElement.parentElement.parentElement;
    // let variable = parentElement.getElementsByClassName("heading-select");
    let variable = taskBtn.closest("heading-select, text-lg")
    console.log(variable);
    
  });
}
