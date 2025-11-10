import { Link } from 'react-router-dom';

// This is your product/service data
const services = [
    { id: 1, name: 'UI/UX Design Review', description: 'Get a detailed review of your UI', price: 4999 },
    { id: 2, name: 'Figma Dashboard Kit', description: 'A premium dashboard template', price: 1999 },
];

const ServicesPage = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>My Services & Products</h1>
            {services.map(service => (
                <div key={service.id} style={{ border: '1px solid #ccc', padding: '20px', margin: '20px' }}>
                    <h2>{service.name}</h2>
                    <p>{service.description}</p>
                    <h3>₹{service.price}</h3>
                    {/* Link to the checkout page, passing the service data in the state */}
                    <Link to={{
                        pathname: '/checkout',
                        state: { service }
                    }}>
                        <button>Buy Now</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ServicesPage;