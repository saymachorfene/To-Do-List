
document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("please enter a task");
    }
    else {
        document.querySelector('#tasks').innerHTML +=
            `
                <div class="task">
                    <span id="taskname">
                        ${document.querySelector('#newtask input').value}
                    </span> 
                    <button class="delete">
                    <i class="far fa-trash-alt"></i>
                    </button>
                </div>
                
            `;
    
        //supprimer une tache 
        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
        //marquer une tache comme completée
        var tasks = document.querySelectorAll(".task");
        for (var i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function () {
                this.classList.toggle('completed');
            }
        }
        //clearing the input filed after each entry
        document.querySelector("#newtask input").value = "";
    }
}  

