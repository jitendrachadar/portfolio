import React from "react";

const DetailCard = ({ title, subtitle, duration, points }) => (
  <div className="border border-gray-700 p-4 rounded-lg bg-gray-800">
    <h4 className="text-xl font-semibold text-gray-100">{title}</h4>
    {subtitle && <p className="text-gray-400 mt-2">{subtitle}</p>}
    <p className="text-gray-400 mt-2">{duration}</p>
    <ul className="list-disc list-inside text-gray-300 mt-2">
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

export default DetailCard;
