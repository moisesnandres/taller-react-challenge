import React, { useState } from 'react';

interface Transaction {
  id: number;
  amount: number;
}

const PaymentDashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, amount: 50 },
    { id: 2, amount: 150 },
    { id: 3, amount: 200 },
  ]);
  const [target, setTarget] = useState<number | null>(null);
  const [newTransaction, setNewTransaction] = useState<number | null>(null);
  const [result, setResult] = useState<string>('');

  const handleCheckTransactions = () => {
    if (target === null || target < 1) return;

    // transactions 
    // first transaction
    // result = target - transaction
    // if transaction include result
    // setResult(`Transactions ${transactions[i].id} and ${transactions[j].id} add up to ${target}`);
    // exit the loop
    // else
    transactions.forEach((transaction, index) => {
      const otherTrasaction = target - transaction.amount;
      const result = transactions.slice(index + 1).find((t) => t.amount === otherTrasaction);
      console.log(result);
      if (result) {
        setResult(`Transactions ${transactions[index].id} and ${result.id} add up to ${target}`);
        return;
      }
    });
    setResult('No matching transactions found.');
  };

  const handleAddTransaction = () => {
    if (
      newTransaction === null ||
      newTransaction < 1
    ) return;
    const id = transactions.length + 1;
    setTransactions([...transactions, { id, amount: newTransaction }]);
  };

  return (
    <div>
      <h1>Payment Transaction Dashboard</h1>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
          ID: {transaction.id}, Amount: ${transaction.amount}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="number"
          placeholder="Enter transaction amount"
          onChange={(e) => setNewTransaction(Number(e.target.value))}
        />
        <button onClick={handleAddTransaction}>Add Transaction</button>
      </div>
      <div>
        <input
          type="number"
          placeholder="Enter target amount"
          onChange={(e) => setTarget(Number(e.target.value))}
        />
        <button onClick={handleCheckTransactions}>Check Transactions</button>
      </div>
      <p>{result}</p>
    </div>
  );
};

export default PaymentDashboard;
