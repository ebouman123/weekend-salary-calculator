function submitButton(event){
// Prevent default form behavior
event.preventDefault()

// Requires all fields to have a value before button will submit
if (firstNameInput.value.length > 0 && lastNameInput.value.length > 0 && idInput.value.length > 0 && titleInput.value.length > 0 && annualSalaryInput.value.length > 0){

// Reference the current table
let table = document.getElementById("dataTable");

// Create a new row and append it to the table when submitted
let newRow = table.insertRow(-1);

// Create 6 data cells to add to the new row
let cell0 = newRow.insertCell(0);
let cell1 = newRow.insertCell(1);
let cell2 = newRow.insertCell(2);
let cell3 = newRow.insertCell(3);
let cell4 = newRow.insertCell(4);
let cell5 = newRow.insertCell(5);

// Give cell4 a special class to call on later for monthlyTotal
cell4.setAttribute('class', 'salary')

// Create a delete button to be added to the last cell, also calls the deleteBtn() function
let deleteBtn = document.createElement('button')
deleteBtn.type = 'submit'
deleteBtn.setAttribute('id', 'deleteBtn')
deleteBtn.setAttribute('onClick', 'deleteBtn(event)')
deleteBtn.innerHTML = 'Delete'
cell5.appendChild(deleteBtn)

// Puts firstNameInput into the new cell[0] and resets the form
let firstNameInput = document.getElementById('firstNameInput')
cell0.innerHTML = firstNameInput.value
document.getElementById('firstNameForm').reset()

// Puts lastNameInput into the new cell[1] and resets the form
let lastNameInput = document.getElementById('lastNameInput')
cell1.innerHTML = lastNameInput.value
document.getElementById('lastNameForm').reset()

// Puts idInput into the new cell[2] and resets the form
let idInput = document.getElementById('idInput')
cell2.innerHTML = idInput.value
document.getElementById('idForm').reset()

// Puts titleInput into the new cell[3] and resets the form
let titleInput = document.getElementById('titleInput')
cell3.innerHTML = titleInput.value
document.getElementById('titleForm').reset()

// TODO: Figure out how to add commas and $
// Puts annualSalaryInput into the new cell[4] and resets the form
let annualSalaryInput = document.getElementById('annualSalaryInput')
cell4.innerHTML = annualSalaryInput.value
document.getElementById('annualSalaryForm').reset()

monthlyTotal()

overBudget()

}
else{
    window.alert('Please fill out all fields :)')
}
}

// Allows the delete button to remove that specific row
function deleteBtn(event){
    let targetButton = event.target
    let parentRow = targetButton.parentElement.parentElement
    parentRow.remove()

    // Minuses the annualSalary from the selected row from the monthlyTotal

}

// Loops through the tds to sum up the monthly total
function monthlyTotal(){
    let monthlyTotal = document.getElementById('monthlyTotal')
    // Resetting the monthlyTotal in preparation for the loop
    monthlyTotal.innerHTML = 0
    let salaries = document.getElementsByClassName('salary')
    // Loop through each element with tag 'salary' (annualSalary tds), sum the values and assign to monthlyTotal

    // TODO: Figure out how to add commas and $
    for (let i=0; i<document.getElementsByTagName('tr').length - 1; i++){
        salaries[i].innerHTML = salaries[i].innerHTML.replace('$', '');
        monthlyTotal.innerHTML = (parseInt(monthlyTotal.innerHTML, 10) + (parseInt(salaries[i].innerHTML, 10)/12)).toFixed(2)

    }
}

// Adds a class and styling to footer when the monthlyTotal > 20,000
function overBudget(){
    let footer = document.getElementById('budget')
    let monthlyTotal = document.getElementById('monthlyTotal')
    // let annualSalaryData = document.getElementsByClassName('salary')

    // Checks if budget is over 20,000, adds class if it is
    if (monthlyTotal.innerHTML > 20000){
        footer.setAttribute('class', 'over-budget')
    }
    else{
        footer.removeAttribute('over-budget')
    }

    // Formatting for $ and commas after everything is calculated
    const formatter = new Intl.NumberFormat('en-US')
    monthlyTotal.innerHTML = `$` + formatter.format(monthlyTotal.innerHTML)
    // annualSalaryData.innerHTML = `$` + formatter.format(annualSalaryData.innerHTML)

}

// function testButton(){
//     const table = document.querySelector('table')
//     const tableButtons = table.querySelectorAll('button')
//     const secondRowsButton = tableButtons[1]
//     console.log(tableButtons[1])
// }
