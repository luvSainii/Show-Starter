import './App.css';
import Playing from './components/Playing'
import Summary from './components/Summary';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <Router>
        <Routes>
            <Route path="/summary" Component={Summary}></Route>
            <Route path="/signin" Component={SignIn}></Route>
            <Route path="/signup" Component={SignUp}></Route>
            <Route path="/" Component={Playing}></Route>
        </Routes>
</Router>
  );
}

export default App;
