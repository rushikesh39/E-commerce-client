// PaymentSuccess.js

import React from 'react';
import './PaymentSuccess.css';

const Success = () => {
  return (
    <div className="payment-success-container">
      <header>
        <h1>Payment Successful!</h1>
      </header>

      <main>
        <section id="payment-details">
          {/* <h2>Order Details</h2> */}
          <h2>Thank you for your purchase. Your payment was successful.</h2>
          {/* <ul>
            <li><strong>Order ID:</strong> 123456</li>
            <li><strong>Total Amount:</strong> $50.00</li>
            
          </ul> */}
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Payment Success Page</p>
      </footer>
    </div>
  );
};

export default Success;
