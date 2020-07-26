function add_todo() {
    var input_todo = document.getElementById("text-field");
    var li = document.createElement("li");
    var li_text = document.createTextNode(input_todo.value);

    li.appendChild(li_text);


    var delete_btn = document.createElement("button");
    var delete_text = document.createTextNode("DELETE");
    delete_btn.setAttribute("class", "delete-btn");
    delete_btn.setAttribute("onclick", "delete_item(this)");
    delete_btn.appendChild(delete_text);

    li.appendChild(delete_btn);


    var edit_btn = document.createElement("button");
    var edit_text = document.createTextNode("EDIT");
    edit_btn.setAttribute("class", "edit-btn");
    edit_btn.setAttribute("onclick", "edit_item(this)")
    edit_btn.appendChild(edit_text);

    li.appendChild(edit_btn)

    list.appendChild(li);

    input_todo.value = ""
}

var list = document.getElementById("list");

function delete_item(i) {
    i.parentNode.remove();
}

function edit_item(i) {
    var value = i.parentNode.firstChild.nodeValue;
    var edit_value = prompt("Enter your edited value", value);
    i.parentNode.firstChild.nodeValue = edit_value;
}

function delete_all() {
    list.innerHTML = "";
}