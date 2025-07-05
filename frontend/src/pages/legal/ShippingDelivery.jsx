import React from 'react';

const ShippingDelivery = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Shipping & Delivery</h1>
      <p className="mb-2">Last Updated: 5/5/2025</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Shipping Time:</strong> Processed in 1–2 days. Delivery in 4–7 days.</li>
        <li><strong>Charges:</strong> Shown at checkout. Free shipping offers may apply.</li>
        <li><strong>Courier:</strong> We use reliable services (Delhivery, Blue Dart, etc.).</li>
        <li><strong>Tracking:</strong> Provided via SMS or email once shipped.</li>
      </ul>
    </div>
  );
};

export default ShippingDelivery;
