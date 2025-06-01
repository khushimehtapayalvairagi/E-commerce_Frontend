import React from 'react';

const AddressCard = ({ address = {} }) => {
  const {
    firstName = '',
    lastName = '',
    state = '',
    streetAddress = '',
    zipcode = '',
    mobile = '',
    city = '',
  } = address;

  return (
    <div className="space-x-50 bg-white rounded-lg text-left p-4">
      <p className="text-lg font-semibold text-gray-800">
        {firstName} {lastName}
      </p>
      <p className="text-gray-600">
        {city}, {streetAddress}, {state} - {zipcode}
      </p>
      <div className="text-left">
        <p className="text-sm font-medium text-gray-700">Phone Number</p>
        <p className="text-gray-800">{mobile}</p>
      </div>
    </div>
  );
};

export default AddressCard;
