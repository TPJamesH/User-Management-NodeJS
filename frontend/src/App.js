import logo from './logo.svg';
import './App.css';
import UserTable from './component/user_table/UserTable'
import UserTableWithRow from './component/user_table_with_row/UserTable';
function App() {
  return (
    <div className="App">

    {/* <UserTable />       */}
    <UserTableWithRow/>
    
  </div>
  );
}

export default App;
