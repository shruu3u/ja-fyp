import React from "react";


function GPTResponseBox({ message, emotion }) {
  return (
    <div className="w-full max-w-3xl bg-white border border-gray-300 rounded-lg shadow-md p-4 mt-4">
      <h3 className="text-lg font-semibold text-blue-600 mb-2">AI Response:</h3>
      {emotion && (
        <p className="text-sm text-gray-500 mb-2">
          <strong>Detected Emotion:</strong> {emotion}
        </p>
      )}
      <p className="text-gray-700 whitespace-pre-wrap">{message}</p>
    </div>
  );
}

export default GPTResponseBox;