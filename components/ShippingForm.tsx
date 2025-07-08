"use client";

import React, { useState } from "react";

const ShippingForm = () => {
  const [destination, setDestination] = useState("");
  const [carrier, setCarrier] = useState("");
  const [shippingDate, setShippingDate] = useState("");

  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-bold mb-2">Shipping Entry</h2>
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="mb-2 p-2 border w-full"
      />
      <input
        type="text"
        placeholder="Carrier"
        value={carrier}
        onChange={(e) => setCarrier(e.target.value)}
        className="mb-2 p-2 border w-full"
      />
      <input
        type="date"
        placeholder="Shipping Date"
        value={shippingDate}
        onChange={(e) => setShippingDate(e.target.value)}
        className="mb-2 p-2 border w-full"
      />
    </div>
  );
};

export default ShippingForm;
