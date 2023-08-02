
    // Replace 'YOUR_MAILCHIMP_API_KEY' and 'YOUR_MAILCHIMP_AUDIENCE_ID' with your MailChimp API key and audience ID.
/*     const apiKey = '95e090ac7b0c615e6d8c93cc1de9d132-us21';8b9faca91a5a7c5d1a14aae38dde16fe-us21
    const audienceId = ' 6de0eabab5'; */

  

import React, { useState } from 'react';
import axios from 'axios';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState(null); // State variable to track subscription status

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiKey = '95e090ac7b0c615e6d8c93cc1de9d132-us21';
    const audienceId = '6de0eabab5.';

    const data = {
      email_address: email,
      status: 'subscribed',
    };

    axios.post(`https://YOUR_MAILCHIMP_DC.api.mailchimp.com/3.0/lists/${audienceId}/members`, data, {
      auth: {
        username: 'apikey',
        password: apiKey,
      },
    })
    .then((response) => {
      console.log('Subscribed successfully!');
      setSubscriptionStatus('success'); // Set subscription status to success
    })
    .catch((error) => {
      console.error('Subscription failed:', error.response?.data?.title || 'Unknown error');
      setSubscriptionStatus('error'); // Set subscription status to error
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleInputChange}
      />
      <button type="submit">Subscribe</button>
      {subscriptionStatus === 'success' && <p>Subscribed successfully!</p>}
      {subscriptionStatus === 'error' && <p>Subscription failed. Please try again later.</p>}
    </form>
  );
};

export default SubscribeForm;

    
