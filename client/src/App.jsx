import {BrowserRouter as Router, Routes, Route, Link} from  'react-router-dom';
import './App.css'
import { Dashboard } from './pages/dashboard';
import { SignedIn, SignIn, UserButton } from '@clerk/clerk-react';
import { Auth } from './pages/auth';
import { FinancialRecordsProvider } from './contexts/financial-record-context';
import { Navigate } from 'react-router-dom';

function App() {

  return <Router> 
    <div className="app-container">
      <div className='navbar'>
        <Link to="/">Dashboard</Link>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedIn>
          <Navigate to></Navigate>

        </SignedIn>
      </div>
      <Routes>
        <Route path="/" element={
          <FinancialRecordsProvider>
            <Dashboard />
          </FinancialRecordsProvider>}/>
        <Route path="/auth" element={<Auth />}/>
      </Routes>
    </div> </Router>;
}

export default App;
