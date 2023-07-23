import './App.css';
import Sidebar from './components/MiniDrawer';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import AllForms from './components/AllForms'
import Form from './components/Form';
import AssignForms from './components/AssignForms'
import EditAssignForm from './components/EditAssignForm'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
<Route path='/' exact element={<Form/>}/>
<Route path='/AllForms' exact element={<AllForms/>}/>

<Route path='/AssignForms' exact element={<AssignForms/>}/>
<Route path='/EditAssignForm' exact element={<EditAssignForm/>}/>

      </Routes>
      </BrowserRouter>
  
    </div>
 

  );
}

export default App;
