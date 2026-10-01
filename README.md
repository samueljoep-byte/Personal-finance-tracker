# 💰 Personal Finance Tracker

A simple and responsive **Personal Finance Tracker** built using HTML5, CSS3, and Vanilla JavaScript.

The application allows users to record income and expenses, calculate their financial balance in real time, manage transaction history, and persist data using browser Local Storage.

## 🚀 Live Demo

Coming soon.

## 📌 GitHub Repository

https://github.com/samueljoep-byte/Personal-finance-tracker

## ✨ Features

* Add income and expense transactions
* Enter transaction description and amount
* Select transaction categories
* Automatically calculate:

  * Total Balance
  * Total Income
  * Total Expenses
* Display transaction history
* Delete transactions
* Display transaction date
* Display income and expense with different visual styles
* Show newest transactions first
* Save transactions using Local Storage
* Restore transactions after browser refresh
* Responsive design for desktop and mobile devices
* Display an empty-state message when there are no transactions

## 🛠️ Technologies Used

* **HTML5** — Semantic page structure and form elements
* **CSS3** — Styling, Flexbox, Grid, responsive design, and CSS variables
* **JavaScript (ES6+)** — Application logic and DOM manipulation
* **Local Storage API** — Persistent browser-side data storage
* **JSON** — Serialization and deserialization of transaction data

## 📂 Project Structure

```text
Personal-finance-tracker/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🔄 Application Flow

```text
User enters transaction
        ↓
Form submission
        ↓
Create transaction object
        ↓
Store transaction in array
        ↓
Save data to Local Storage
        ↓
Calculate income and expenses
        ↓
Calculate balance
        ↓
Display transaction
```

### Delete Flow

```text
User clicks Delete
        ↓
Find transaction by ID
        ↓
Remove transaction using filter()
        ↓
Update Local Storage
        ↓
Recalculate summary
        ↓
Refresh transaction list
```

## 🧠 JavaScript Concepts Demonstrated

This project demonstrates several important JavaScript concepts:

### Arrays

Transactions are stored in an array:

```javascript
let transactions = [];
```

### Objects

Each transaction is represented as an object:

```javascript
const transaction = {
    id: Date.now(),
    type: type,
    description: description,
    amount: amount,
    category: category,
    date: new Date().toLocaleDateString()
};
```

### forEach()

Used to display every transaction dynamically.

### filter()

Used to remove a transaction from the array.

### reduce()

Used to calculate total income and total expenses.

### sort()

Used to display the newest transactions first.

### DOM Manipulation

JavaScript dynamically creates and updates HTML elements using methods such as:

```javascript
document.createElement()
```

and:

```javascript
appendChild()
```

### Local Storage

Transactions are saved in the browser:

```javascript
localStorage.setItem(
    "transactions",
    JSON.stringify(transactions)
);
```

Saved transactions are loaded when the application starts:

```javascript
JSON.parse(
    localStorage.getItem("transactions")
) || [];
```

## 📱 Responsive Design

The application is designed to work on:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile devices

CSS media queries are used to adjust the layout for smaller screens.

## 🧪 Testing

The following functionality has been tested:

* [x] Add income
* [x] Add expense
* [x] Calculate balance
* [x] Calculate total income
* [x] Calculate total expenses
* [x] Delete transaction
* [x] Save transactions
* [x] Load transactions after refresh
* [x] Display category
* [x] Display date
* [x] Sort newest transactions first
* [x] Empty transaction state
* [x] Responsive mobile layout

## ▶️ How to Run

### 1. Clone the repository

```bash
git clone https://github.com/samueljoep-byte/Personal-finance-tracker.git
```

### 2. Open the project

Open the project folder in VS Code.

### 3. Run the application

Open `index.html` in your browser.

You can also use the **Live Server** extension in VS Code.

## 🔮 Future Enhancements

Possible future improvements include:

* Edit existing transactions
* Search transactions
* Filter by category
* Filter by income/expense
* Monthly financial reports
* Expense charts and graphs
* Dark mode
* Export transactions to CSV
* Backend API integration
* User authentication
* Database integration

## 👨‍💻 Author

**Samuel Joe**

Aspiring Java Full Stack Developer

### Skills Demonstrated

**Frontend:**
HTML5 • CSS3 • JavaScript

**Backend Learning:**
Java • Spring Boot • REST API • SQL

**Tools:**
Git • GitHub • VS Code

---

⭐ If you find this project useful, feel free to explore the repository.
