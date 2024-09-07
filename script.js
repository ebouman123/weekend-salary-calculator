function submitButton(event){
// Prevent default form behavior
event.preventDefault()

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
let deleteBtn = document.createElement('input')
deleteBtn.type = 'button'
deleteBtn.setAttribute('id', 'deleteBtn')
deleteBtn.setAttribute('onClick', 'deleteBtn(event)')
deleteBtn.value = 'Delete'
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

}

// Allows the delete button to remove that specific row
function deleteBtn(event){
    let targetButton = event.target
    let parentRow = targetButton.parentElement.parentElement
    parentRow.remove()
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
        monthlyTotal.innerHTML = (parseInt(monthlyTotal.innerHTML, 10) + (parseInt(salaries[i].innerHTML, 10)/12)).toFixed(2)
        // console.log(salaries[i].innerHTML)
    }
}

// TODO: Complete overBudget() function
function overBudget(){

}



































// // Currency converter
// // const currencyConverter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'})

// // console.log(currencyConverter.format(5000))


// // Adds the data from the form to each respective point in the table. 
// // Also adds the salary information to the monthly total. Clears inputs after the form is submitted.
// function submitButton(event){
//     event.preventDefault()
//     // Adds firstName and resets after submission
//     let firstNameInput = document.getElementById('firstNameInput')
//     let firstNameData = document.getElementById('firstNameData')
//     // firstNameData.textContent = firstNameInput.value
//     firstNameData.innerHTML = `${firstNameInput.value}`
//     // console.log(firstNameData.innerHTML)
//     document.getElementById('firstNameForm').reset()
//     // Adds lastName and resets after submission
//     let lastNameInput = document.getElementById('lastNameInput')
//     let lastNameData = document.getElementById('lastNameData')
//     // lastNameData.textContent = lastNameInput.value
//     lastNameData.innerHTML = `${lastNameInput.value}`
//     document.getElementById('lastNameForm').reset()
//     // Adds ID and resets after submission
//     let idInput = document.getElementById('idInput')
//     let idData = document.getElementById('idData')
//     // idData.textContent = idInput.value
//     idData.innerHTML = `${idInput.value}`
//     document.getElementById('idForm').reset()
//     // Adds title and resets after submission
//     let titleInput = document.getElementById('titleInput')
//     let titleData = document.getElementById('titleData')
//     // titleData.textContent = titleInput.value
//     titleData.innerHTML = `${titleInput.value}`
//     document.getElementById('titleForm').reset()
//     // Adds annualSalary and resets after submission
//     let annualSalaryInput = document.getElementById('annualSalaryInput')
//     let annualSalaryData = document.getElementById('annualSalaryData')
//     let numConversion = parseInt(annualSalaryInput.value, 10)
//     // annualSalaryData.textContent = '$' + numConversion.toLocaleString();
//     annualSalaryData.innerHTML = '$' + `${numConversion.toLocaleString()}`;
//     updateTotal();

//     document.getElementById('annualSalaryForm').reset()
    

//     // console.log('annualSalaryInput:', annualSalaryInput.innerHTML)
//     // console.log('annualSalaryData:', annualSalaryData)
//     // console.log('annualSalaryInput:', numConversion)
//     // console.log('monthlyTotal:', monthlyTotal)
//     // console.log('monthlyTotal.innerHTML:', monthlyTotal.innerHTML)
//     // console.log('monthlyTotalValue:', monthlyTotalValue)
//     // console.log('monthlyTotal.innerHTML + monthlyTotalValue:', monthlyTotal.innerHTML)

//     // TODO: Figure out how to add a $ to the monthlyTotal

// addNewRow()

// }


// function updateTotal(){
// // Adds annualSalary to monthlyTotal and sums
// let monthlyTotal = document.getElementById('monthlyTotal')
// let monthlyTotalValue = parseFloat(monthlyTotal.innerHTML)
// let numConversion = parseInt(annualSalaryInput.value, 10)
// monthlyTotal.innerHTML = (numConversion + monthlyTotalValue).toLocaleString()
// }

// // Create function to add rows/data
// function addNewRow(){
//     let rowParent = document.getElementsByClassName('dataRow')
//     console.log('rowparent:', rowParent.parentElement.parentElement)
//     // console.log(table.innerHTML[0])
// }


// // addNewRow()

// // Gives the delete buttons functionality to delete the specific row
// // function clearRow(){
// //     let table = document.getElementById('dataTable')
// //     let columnLength = document.getElementById('dataRow').children.length
// //     for (let i=0; i < columnLength; i++){
// //         let td = document.createElement('td').id = 
// //         document.set
// //     }
// //     console.log(columnLength)
// //     console.log(table)
// // }

