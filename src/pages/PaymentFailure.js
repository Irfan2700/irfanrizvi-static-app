// src/pages/PaymentFailure.js
import { Link } from 'react-router-dom';

const PaymentFailure = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1>Payment Failed</h1>
            <p>Unfortunately, the transaction could not be completed.</p>
            <p>Please try again or contact support.</p>
            <Link to="/services"><button>Back to Services</button></Link>
        </div>
    );
};

export default PaymentFailure;