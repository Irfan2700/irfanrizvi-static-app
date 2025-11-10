// src/pages/MockPaymentPage.js (Updated for react-router-dom v6)
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MockPaymentPage = () => {
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    useEffect(() => {
        const timer = setTimeout(() => {
            const isSuccess = Math.random() > 0.2;

            if (isSuccess) {
                navigate('/payment-success'); // Use navigate
            } else {
                navigate('/payment-failure'); // Use navigate
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigate]); // Add navigate to the dependency array

    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1>Redirecting to Payment Gateway...</h1>
            <p>Please do not close this window.</p>
        </div>
    );
};

export default MockPaymentPage;