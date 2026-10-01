let transactions =
    JSON.parse(localStorage.getItem("transactions")) || [];

const form = document.querySelector("form");

const balanceElement =
    document.getElementById("balance");

const incomeElement =
    document.getElementById("income");

const expensesElement =
    document.getElementById("expenses");

const transactionList =
    document.getElementById("transaction-list");


// Display transactions
function renderTransactions() {

    transactionList.innerHTML = "";


    // Empty state
    if (transactions.length === 0) {

        const emptyMessage =
            document.createElement("li");

        emptyMessage.textContent =
            "No transactions yet.";

        transactionList.appendChild(emptyMessage);

        return;
    }


    // Newest transaction first
    transactions
        .sort(function(a, b) {
            return b.id - a.id;
        })
        .forEach(function(transaction) {

            const transactionElement =
                document.createElement("li");


            // Description
            const descriptionElement =
                document.createElement("strong");

            descriptionElement.textContent =
                transaction.description;


            // Amount
            const amountElement =
                document.createElement("span");

            amountElement.textContent =
                " ₹" + transaction.amount;


            // Category
            const categoryElement =
                document.createElement("span");

            categoryElement.textContent =
                " | Category: " +
                transaction.category;


            // Date
            const dateElement =
                document.createElement("small");

            dateElement.textContent =
                " | Date: " +
                (transaction.date || "Old transaction");


            // Add elements
            transactionElement.appendChild(
                descriptionElement
            );

            transactionElement.appendChild(
                amountElement
            );

            transactionElement.appendChild(
                categoryElement
            );

            transactionElement.appendChild(
                dateElement
            );


            // Income / Expense styling
            if (transaction.type === "income") {

                transactionElement.classList.add(
                    "income"
                );

            } else {

                transactionElement.classList.add(
                    "expense"
                );
            }


            // Delete button
            const deleteButton =
                document.createElement("button");

            deleteButton.textContent =
                "Delete";


            deleteButton.addEventListener(
                "click",
                function() {

                    transactions =
                        transactions.filter(
                            function(item) {

                                return item.id !==
                                    transaction.id;
                            }
                        );


                    // Save after deletion
                    localStorage.setItem(
                        "transactions",
                        JSON.stringify(transactions)
                    );


                    updateSummary();

                    renderTransactions();
                }
            );


            transactionElement.appendChild(
                deleteButton
            );

            transactionList.appendChild(
                transactionElement
            );

        });
}


// Update summary
function updateSummary() {

    const totalIncome =
        transactions.reduce(
            function(total, transaction) {

                if (transaction.type === "income") {

                    return total + transaction.amount;
                }

                return total;

            },
            0
        );


    const totalExpenses =
        transactions.reduce(
            function(total, transaction) {

                if (transaction.type === "expense") {

                    return total + transaction.amount;
                }

                return total;

            },
            0
        );


    const balance =
        totalIncome - totalExpenses;


    incomeElement.textContent =
        "₹" + totalIncome;

    expensesElement.textContent =
        "₹" + totalExpenses;

    balanceElement.textContent =
        "₹" + balance;
}


// Form submission
form.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        // Get form values
        const type =
            document.getElementById("type").value;

        const description =
            document
                .getElementById("description")
                .value
                .trim();

        const amount =
            Number(
                document.getElementById("amount").value
            );

        const category =
            document.getElementById("category").value;


        // Create transaction
        const transaction = {

            id: Date.now(),

            type: type,

            description: description,

            amount: amount,

            category: category,

            date: new Date().toLocaleDateString()
        };


        // Add transaction
        transactions.push(transaction);


        // Save transaction
        localStorage.setItem(
            "transactions",
            JSON.stringify(transactions)
        );


        // Update screen
        updateSummary();

        renderTransactions();


        // Clear form
        form.reset();

    }
);


// Load saved data
updateSummary();

renderTransactions();