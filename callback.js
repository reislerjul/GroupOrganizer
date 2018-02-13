function joinGroup() {
    var target = event.target || event.srcElement;
    var id = target.id;
    console.log(id);

    var parent;
    var popup;
    if (id === "group1_button") {
    	parent = "group1_list"
    	popup = "group1_meeting";
    }
    else {
    	parent = "group2_list"
    	popup = "group2_meeting";
    }

    var parentItem = document.getElementById(parent);
    var newItem = document.createElement("li");
    var text = document.createTextNode("Julia Reisler");
    newItem.classList.add("list-group-item");
    newItem.appendChild(text);
    parentItem.insertBefore(newItem, parentItem.childNodes[0]);

    document.getElementById(popup).className = "popup-bubble-selected";


}

document.getElementById("group1_button").addEventListener('click', joinGroup, false);
document.getElementById("group2_button").addEventListener('click', joinGroup, false);
