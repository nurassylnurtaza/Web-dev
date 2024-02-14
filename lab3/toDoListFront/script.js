const input = document.getElementById("input")
const items = document.getElementById("items")
function addTask(){
    if(input.value === ''){
        alert("You have to write name of the task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        items.appendChild(li);
        let span = document.createElement("span");
        let img = document.createElement("img");
        img.src = "content/delete.svg";
        img.addEventListener("click", function() {
            li.remove();
        });
        span.appendChild(img);
        li.appendChild(span);
    }
    input.value = '';
}
items.addEventListener("click", function (e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }

}, false);