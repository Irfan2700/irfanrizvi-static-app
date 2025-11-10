// src/App.js (Updated for react-router-dom v6)
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CheckoutPage from './pages/CheckoutPage';
import MockPaymentPage from './pages/MockPaymentPage';
import PaymentFailure from './pages/PaymentFailure';
import PaymentSuccess from './pages/PaymentSuccess';
import ServicesPage from './pages/ServicesPage';

// You can keep your existing Navbar/Homepage components here
const HomePage = () => <h1>Welcome to Irfan Rizvi's Portfolio</h1>;

function App() {
  return (
    <Router>
      <div>
        {/* Simple Navigation for demo */}
        <nav style={{ background: '#333', padding: '10px', color: 'white' }}>
          <Link to="/" style={{ color: 'white', marginRight: '15px' }}>Home</Link>
          <Link to="/services" style={{ color: 'white' }}>Services</Link>
        </nav>

        <main>
          {/* 
            In v6, <Switch> is replaced by <Routes>
            The `component` prop is replaced by the `element` prop, which takes JSX.
          */}
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/services" element={<ServicesPage />} />
            <Route exact path="/checkout" element={<CheckoutPage />} />
            <Route exact path="/mock-payment" element={<MockPaymentPage />} />
            <Route exact path="/payment-success" element={<PaymentSuccess />} />
            <Route exact path="/payment-failure" element={<PaymentFailure />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;