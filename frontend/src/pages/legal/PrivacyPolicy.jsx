import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-2">Last Updated: [Insert Date]</p>
      <p className="mb-4">At Kashish Products, your privacy is important to us...</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Information We Collect:</strong> Personal and device information.</li>
        <li><strong>How We Use:</strong> Order processing, communication, improvement.</li>
        <li><strong>Sharing:</strong> With payment and delivery services only.</li>
        <li><strong>Your Rights:</strong> You can access, modify, or delete your data.</li>
        <li><strong>Security:</strong> We use encryption and secure practices.</li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
