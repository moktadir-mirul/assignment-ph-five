document.getElementById("btn-bg-change").addEventListener("click", function(){
    let num1 = Math.floor(Math.random() * 256);
    let num2 = Math.floor(Math.random() * 256);
    let num3 = Math.floor(Math.random() * 256);
    let colorName = `rgb(${num1}, ${num2}, ${num3})`;
    document.getElementById("body-bg").style.backgroundColor = colorName;
})