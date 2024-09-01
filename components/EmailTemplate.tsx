import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  message: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  message,
  email,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
    <h1 className="text-xl font-semibold text-gray-800 mb-4">New Message from {firstName}</h1>
    <p className="text-gray-700 mb-2">
      <strong>Email:</strong> {email}
    </p>
    <p className="text-gray-700 mb-4">
      <strong>Message:</strong> {message}
    </p>
    <p className="text-gray-600">
      Be sure to respond to {firstName} as soon as possible.
    </p>
  </div>
);
