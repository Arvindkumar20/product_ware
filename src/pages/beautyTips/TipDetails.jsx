import React from "react";
import { useParams } from "react-router-dom";
import { tips } from "./tips";

export default function TipDetails() {
  const { title } = useParams();

  // Find matching tip data based on title from URL
  const tip = tips.find((tip) => tip.title === decodeURIComponent(title));

  if (!tip) {
    return <div className="text-center py-10 text-red-500">Tip not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 mt-20 ">
      <h1 className="text-3xl font-bold text-pink-700 mb-6">{tip.title}</h1>
      <div className="flex items-center justify-center w-1/2 h-96 mx-auto">
      <img
        src={tip.image}
        alt={tip.title}
        className="w-full h-full object-cover rounded-xl mb-6 shadow-md"
      />
      </div>
      <p className="text-lg leading-relaxed">{tip.description}</p>
      {/* <p className="text-lg leading-relaxed">{tip.content}</p> */}

      <ul className="space-y-8">
        {tip?.content &&tip.content.map((cnt, index) => (
          <li
            key={index}
            className="bg-pink-50 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-pink-700 mb-2">
              {cnt.heading}
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              {cnt.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
