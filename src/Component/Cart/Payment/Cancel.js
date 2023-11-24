// PaymentCancel.js

import React from 'react';
// import './PaymentCancel.css';

const Cancel = () => {
  return (
    <div className="payment-cancel-container">
      <header>
        <h1>Payment Canceled</h1>
      </header>

      <main>
        <section id="cancel-details">
          <h2>Order Cancellation</h2>
          <p>Your payment has been canceled. If you have any questions, please contact customer support.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Payment Cancel Page</p>
      </footer>
    </div>
  );
};

export default Cancel;
