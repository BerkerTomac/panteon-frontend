import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthForm from './components/AuthForm/AuthForm';
import ConfigurationPage from './pages/ConfigurationPage';
import NotFound from './components/NotFound/NotFound'; 

function App() {
  return (
    <Router basename='/panteon-frontend'>
      <div className="App">
        <Routes>
          <Route path="/" element={<AuthForm />} />
          <Route path="/login" element={<AuthForm />} />
          <Route path="/register" element={<AuthForm />} />
          <Route path="/configuration" element={<ConfigurationPage />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
