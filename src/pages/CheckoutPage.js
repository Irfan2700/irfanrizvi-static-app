// src/pages/CheckoutPage.js (Corrected Import)
import { useState } from 'react'; // useLocation was removed from here
import { Link, useLocation, useNavigate } from 'react-router-dom'; // useLocation is now here

const CheckoutPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { service } = location.state || {};

    const [userDetails, setUserDetails] = useState({ name: '', email: '' });

    if (!service) {
        return <div>Service not found. <Link to="/services">Go back</Link></div>;
    }

    const handlePayment = () => {
        console.log('Processing payment for:', service.name, 'for user:', userDetails);
        
        navigate('/mock-payment', { state: { service, userDetails } });
    };

    return (
        <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
            <h1>Checkout</h1>
            <div style={{ border: '1px solid #eee', padding: '10px', marginBottom: '20px' }}>
                <h3>{service.name}</h3>
                <p>Price: ₹{service.price}</p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }}>
                <input
                    type="text"
                    placeholder="Full Name"
                    value={userDetails.name}
                    onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                    required
                    style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    value={userDetails.email}
                    onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                    required
                    style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                />
                <button type="submit" style={{ width: '100%', padding: '10px', background: '#007bff', color: 'white', border: 'none' }}>
                    Pay Now
                </button>
            </form>
        </div>
    );
};

export default CheckoutPage;