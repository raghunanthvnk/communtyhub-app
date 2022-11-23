

import logo from './logo.svg';
import './App.css';
import HubCategoryPage from "./pages/HubCategoryPage";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes
} from 'react-router-dom';
import HubMasterPage from './pages/HubMasterPage';
import MainNavigation from './shared/componenets/Navigation/MainNavigation';
import UploadAppointmentsPage from './pages/UploadAppointmentsPage';
import UsersPage from './pages/UsersPage';

function App() {
  const queryClient = new QueryClient();

  let routes;
    routes = (
      <Routes>
        <Route exact path='/' element={< HubCategoryPage />}></Route>  
        <Route exact path='/hubmaster' element={< HubMasterPage />}></Route>
        <Route exact path='/hubcategory' element={< HubCategoryPage />}></Route>
        <Route exact path='/uploadappointments' element={< UploadAppointmentsPage />}></Route>
        <Route exact path='/users' element={< UsersPage />}></Route>
      </Routes>
    );

  return (
    <div className="App">
      <div  style={{ padding: '15px 15px 15px 15px'}}>
      <QueryClientProvider client={queryClient}>
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
      </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
