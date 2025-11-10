// src/pages/PaymentSuccess.js
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1>Thank You!</h1>
            <p>Your payment was successful.</p>
            <p>A confirmation email has been sent to you.</p>
            <Link to="/services"><button>Back to Services</button></Link>
        </div>
    );
};

export default PaymentSuccess;