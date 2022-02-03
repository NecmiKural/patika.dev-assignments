$(document).ready(function () {
    if (localStorage.getItem("ullist")) {
        document.getElementById("list").innerHTML = localStorage.getItem("ullist");
    } else {
        document.getElementById("list").innerHTML = '';
    }

    document.getElementById('task').focus();

    var el = document.getElementById("task");
    el.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            newElement();
        }
    });
})

function newElement() {
    let value = document.getElementById("task").value.trim()
    if (!value || value == '') {
        $('.error').toast("show")
    } else [
        document.getElementById("list").innerHTML += '<li onclick="markIt(this)">' + value + '<span onclick="deleteElement(this.parentNode)" class="close">x</span></li>',
        document.getElementById("task").value = '',
        $('.success').toast("show"),
        localStorage.setItem("ullist", document.getElementById("list").innerHTML)
    ]
}

function markIt(id) {
    id.classList.toggle('checked');
    localStorage.setItem("ullist", document.getElementById("list").innerHTML);
    $('.done').toast("show");
}

function clearStorage() {
    localStorage.clear();
    window.location.reload();
}

function deleteElement(id) {
    document.getElementById("list").removeChild(id);
    document.getElementById("task").value = '';
    $('.deleted').toast("show");
    localStorage.setItem("ullist", document.getElementById("list").innerHTML);
}