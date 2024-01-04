// Selecting elements from the HTML
const addExpenseBtn = document.querySelector(".add-expense-btn");
const expenseList = document.querySelector(".expense-list");
const totalExpenses = document.querySelector(".total-expenses h3");

// Initializing variables to store expenses and total
let expenses = [];
let total = 0;

// Two variables, expenses and total, are initialized.
// expenses is an array that will store individual expense objects.
// total will store the total amount of expenses.

// Function to render expenses to the HTML
function renderExpenses() {
  // Initializing an empty string to build HTML content
  let html = "";

  // Looping through each expense in the 'expenses' array
  expenses.forEach((expense) => {
    // Building HTML for each expense item
    html += `
            <div class="expense-item">
                <div class="expense-item-description">${expense.description}</div>
                <div class="expense-item-amount">$${expense.amount}</div>
                <button class="delete-expense-btn">&times;</button>
            </div>
        `;
  });

  // Setting the inner HTML of the expense list and updating total expenses
  expenseList.innerHTML = html;
  totalExpenses.innerText = `Total Expenses: $${total}`;

  // This function generates HTML content for each expense item based on the contents of the expenses array.
  // It uses a forEach loop to iterate through each expense and dynamically builds HTML.
  // The generated HTML is then assigned to the html variable.
  // Finally, it updates the HTML content of expenseList and the innerText of totalExpenses to reflect the total amount
}

// Function to add a new expense
function addExpense() {
  // Prompting the user for expense details
  const description = prompt("Enter Expense Description:");
  const amount = parseFloat(prompt("Enter Expense Amount"));

  // Checking if the user provided both description and amount
  if (description && amount) {
    // Creating a new expense object
    const expense = {
      description: description,
      amount: amount,
    };

    // Adding the expense to the 'expenses' array and updating the total
    expenses.push(expense);
    total += amount;

    // Rendering the updated expenses to the HTML
    renderExpenses();
  }

  // This function prompts the user to enter details for a new expense.
  // It checks if both a description and an amount were provided.
  // If so, it creates a new expense object, adds it to the expenses array, updates the total, and then calls renderExpenses to update the HTML
}

// Adding a click event listener to the "Add Expense" button
addExpenseBtn.addEventListener("click", addExpense);

// Listens for a click event on the "Add Expense" button.
// When clicked, it triggers the addExpense function.

// Function to delete an expense
function deleteExpense(index) {
  // Subtracting the deleted expense amount from the total
  total -= expenses[index].amount;

  // Removing the expense from the 'expenses' array
  expenses.splice(index, 1);

  // Rendering the updated expenses to the HTML
  renderExpenses();
}

// This function deletes an expense at a given index.
// It subtracts the deleted expense amount from the total, removes the expense from the array, and then calls renderExpenses to update the HTML.

// Adding a click event listener to the expense list (event delegation)
expenseList.addEventListener("click", function (event) {
  // Checking if the clicked element is the delete button
  if (event.target.classList.contains("delete-expense-btn")) {
    // Finding the index of the clicked expense item and deleting it
    const index = Array.from(
      event.target.parentNode.parentNode.children
    ).indexOf(event.target.parentNode);

    //---------  event.target:

    // event: refers to the click event.
    // target: is the HTML element that triggered the event.

    //-------- event.target.parentNode:

    // Gets the parent node of the clicked element.
    // In this context, it gets the parent node of the delete button, which is the <div class="expense-item"> containing the expense details.

    //-------- event.target.parentNode.parentNode:

    // Gets the parent node of the parent node obtained in the previous step.
    // In this context, it gets the parent node of the expense item, which is the <div class="expense-list"> containing all the expense items.

    //----------  children:

    // tis a html properties that return elements that inside the current element as a array with names of these elements   
    // Returns a live HTMLCollection of child elements of the specified parent element.
    // this mean we convert all expense-list (div in html contains all expense item) as an array contains element named same expense list element (expense-item)

    //----------  Array.from(...):

    // Converts the HTMLCollection of child elements into an array.
    // This makes it easier to use array methods on the list of children.

    //---------  .indexOf(event.target.parentNode):

    // Finds the index of the clicked expense item within the array of child elements.
    // event.target.parentNode is the expense item that was clicked.
    // indexOf returns the index of the first occurrence of the specified element within the array.

    //----------  const index = ...:

    // Assigns the found index to the variable index.


// ------------------  operation process for get index of element that we want to delete 

    // Get the parent element of the child expense item (which is the expense list):

    // event.target.parentNode.parentNode gives us the container (div with class "expense-list") that holds all the expense items.
    // Access the children of the container:

    // children returns an HTMLCollection of child elements, each representing an expense item.
    // Convert the HTMLCollection to an array:

    // Array.from(...) is used to convert the HTMLCollection into a standard JavaScript array.
    // Find the index of the clicked expense item within the array:

    // indexOf(event.target.parentNode) gives us the index of the clicked expense item within the array of all expense items.



    deleteExpense(index);
  }
});

// Listens for a click event on the expense list, utilizing event delegation.
// Checks if the clicked element is a delete button.
// If so, it finds the index of the clicked expense item and calls deleteExpense to delete it.
