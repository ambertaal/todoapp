function updateCounters() {
    // declare a variable that contains the "Total" counter element
    const totalCount = document.getElementById("total-count");

    // declare a variable that contains the number of todos, by counting how many elements have a specific classname / attribute
    const totalCount = document.getElementsByClassName("todo").length;

    // update the HTML inside the counter element with the number of todos
    totalCount.innerHTML = totalTodos;
}

updateCounters();

//comment