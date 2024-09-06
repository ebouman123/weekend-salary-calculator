// Currency converter
const currencyConverter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'})

// console.log(currencyConverter.format(5000))


// Adds the data from the form to each respective point in the table. 
// Also adds the salary information to the monthly total. Clears inputs after the form is submitted.
function submitButton(event){
    event.preventDefault()
    // Adds firstName and resets after submission
    let firstNameInput = document.getElementById('firstNameInput')
    let firstNameData = document.getElementById('firstNameData')
    firstNameData.textContent = firstNameInput.value
    document.getElementById('firstNameForm').reset()
    // Adds lastName and resets after submission
    let lastNameInput = document.getElementById('lastNameInput')
    let lastNameData = document.getElementById('lastNameData')
    lastNameData.textContent = lastNameInput.value
    document.getElementById('lastNameForm').reset()
    // Adds ID and resets after submission
    let idInput = document.getElementById('idInput')
    let idData = document.getElementById('idData')
    idData.textContent = idInput.value
    document.getElementById('idForm').reset()
    // Adds title and resets after submission
    let titleInput = document.getElementById('titleInput')
    let titleData = document.getElementById('titleData')
    titleData.textContent = titleInput.value
    document.getElementById('titleForm').reset()
    // Adds annualSalary and resets after submission
    let annualSalaryInput = document.getElementById('annualSalaryInput')
    let annualSalaryData = document.getElementById('annualSalaryData')
    annualSalaryData.textContent = annualSalaryInput.value
    // annualSalaryData.textContent = currencyConverter.format(annualSalaryInput.value)
    document.getElementById('annualSalaryForm').reset()
    // Add annualSalary to monthlyTotal
    let monthlyTotal = document.getElementById('monthlyTotal')
    monthlyTotal.textContent += annualSalaryInput.value
    // Add annualSalary to monthlyTotal
    // let monthlyTotal = document.getElementById('monthlyTotal')
    // let newMonthlyTotal = monthlyTotal.textContent + annualSalaryData.textContent
    // console.log(newMonthlyTotal)
    // Clears the inputs after the form is submitted

}


// Add functionality to update the monthly total



// Add functionality to clear the inputs from the form after submitted




