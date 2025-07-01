import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="mt-40 text-sm">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10">
        {/* Logo and About */}
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Keproduct Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            At Keproduct, we believe sustainability is more than a trend — it's a responsibility. Founded with a passion for nature and craftsmanship, we specialize in eco-conscious bags, side slings, and lifestyle products made from 100% pure hemp — one of the most durable and environmentally friendly materials on Earth.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/shipping-delivery">Shipping & Delivery</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
            <li><Link to="/cancellation-refund">Cancellation & Refund</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 1146056588</li>
            <li>service@keproduct.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} Keproduct - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
