import React from 'react';

const CancellationRefund = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Cancellation & Refund Policy</h1>
      <p className="mb-2">Last Updated: [Insert Date]</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Cancellation:</strong> Cancel within 12 hours. Not possible once shipped.</li>
        <li><strong>Refunds:</strong> For damaged, defective, or wrong items only.</li>
        <li><strong>Proof:</strong> Must provide photos/videos within 2 days.</li>
        <li><strong>Exchange:</strong> Only if item is defective or incorrect.</li>
      </ul>
    </div>
  );
};

export default CancellationRefund;
