import React, { useState } from 'react';
import AddAccountForm from './AddAccountForm';

function App() {
  const [accounts, setAccounts] = useState([]);

  const addAccount = (account) => {
    setAccounts([...accounts, account]);
  };

  return (
    <div className="App">
      <h1>Account Management</h1>
      <AddAccountForm onAddAccount={addAccount} />
      <ul>
        {accounts.map((account, index) => (
          <li key={index}>
            {account.name} - {account.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
