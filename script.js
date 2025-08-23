const balanceAmtSec = document.getElementById("balance-amt");
const incomeAmtSec = document.getElementById("income-amount");
const expenseAmtSec = document.getElementById("expense-amount");
const transactionList = document.getElementById("transaction-list");
const transactionForm = document.getElementById("transaction-form");
const description = document.getElementById("description");
const type = document.getElementById("type");
const amount = document.getElementById("amount");

transactionForm.addEventListener("submit",addTransaction);
let transactions=[];
function addTransaction(e){
  e.preventDefault();
  const descriptionVal = description.value.trim();
  const amountValue =parseInt(amount.value);
  const typeValue= type.value.trim();

  const transaction={
    id:Date.now(),
    description:descriptionVal,
    amount:amountValue,
    type:typeValue
  };

  transactions.push(transaction);
  description.value="";
  amount.value="";
  type.value="";

  updateTransactionList();
  updateSummary();
}

function createTransactionEl(transaction){
  const li = document.createElement("li");
  const p=document.createElement("p");
  li.classList.add("transaction");
  li.classList.add(transaction.amount > 0 ? "income" : "expense");
  li.innerHTML = `
     <span>${transaction.description}</span>
     <span>₹${transaction.amount} <button class="delete-btn" onclick="deleteTransaction(${transaction.id})">x</button>
     </span><span class="type-style">${transaction.type}</span>
  `;
  return li;
}

function updateTransactionList()
{
  transactionList.innerHTML="";
  transactions.forEach((transaction)=>{
    const El= createTransactionEl(transaction);
    transactionList.appendChild(El);
  })
}

function updateSummary(){
    const income=transactions.filter((m)=> m.amount>0).reduce((sum,m)=>sum+m.amount,0);

    const expense=transactions.filter((m)=>m.amount<0).reduce((sum,m)=>sum+m.amount,0);

    const balance=income+expense;

    balanceAmtSec.textContent="₹"+balance;
    expenseAmtSec.textContent="₹"+expense;
    incomeAmtSec.textContent="₹"+income;
}

function deleteTransaction(id){
  transactions = transactions.filter((t)=> t.id !== id);
  updateTransactionList();
  updateSummary();
}