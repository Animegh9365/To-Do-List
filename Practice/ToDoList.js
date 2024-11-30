let input = document.querySelector('#input-field')
let item_list = document.querySelector('#item-list')
let completed_tasks = document.querySelector('#completed-tasks')
const list = []


document.querySelector('#add-btn').addEventListener('click', (event) => {
    // creating new elements list type
    let newItem = document.createElement('li')
    // taking the value given in input field
    let task = input.value
    // creating a checkbox to append to the new list
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    // item text added to the newly created item
    if (task != '') {
        newItem.textContent = task;
        // checkbox added to the newly created item
        newItem.appendChild(checkbox)
        // appending the new item to the list
        item_list.appendChild(newItem)

        checkbox.addEventListener('change', ()=> {
            if (checkbox.checked) {
                item_list.removeChild(newItem);
                completed_tasks.appendChild(newItem)

                checkbox.disabled = true

            }
        })
    } else {
        alert("Enter a task")
    }
    
    list.push(newItem)
    input.value =''

})