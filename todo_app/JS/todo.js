function get_todos(){
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
function add(){
    var task = document.getElementById('task').value;
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();
    return false;
}
function show() {
    var todos = get_todos();
    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;

}

document.getElementById('add').addEventListener('click',add);
show();

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id,1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
}

var buttons = document.getElementsByClassName('remove');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', remove);
};


var myGoal ='{ "name":"THIO", "age":"31", "city":"New York", "price0":"$500,000", "price1":"$5,000,000",  "price2":"50,000,000", "price3":"500,000,000" }'
//JSON.Parse Method Assignment
var myJSON = JSON.parse(myGoal);
//Local Storage Method Assignment
localStorage.setItem("Age2","36");
document.getElementById("MyGoal").innerHTML = "I will have " + myJSON.price0 + " by age " + myJSON.age + " and " + myJSON.price1 + " a half-decade after that, at age " + localStorage.getItem("Age2") + ".";


