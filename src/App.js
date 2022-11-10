

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
import NewHubMaster from './components/NewHubMaster';
import MainNavigation from './shared/componenets/Navigation/MainNavigation';

function App() {
  const queryClient = new QueryClient();

  let routes;
    routes = (
      <Routes>
        <Route exact path='/' element={< HubCategoryPage />}></Route>  
        <Route exact path='/hubmaster' element={< NewHubMaster />}></Route>
        <Route exact path='/hubcategory' element={< HubCategoryPage />}></Route>
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
