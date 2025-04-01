import React from "react";

function JournalEntryBox({ value, onChange, onSubmit, loading }) {
  return (
    <div className="w-full max-w-3xl mb-6">
      <textarea
      
      className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white bg-gray-800"
      rows="6"
        placeholder="Write about your day..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={loading}
      />
      <button
        className="mt-3 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 disabled:opacity-50"
        onClick={onSubmit}
        disabled={loading}
      >
        {loading ? "Generating Response..." : "Submit"}
      </button>
    </div>
  );
}

export default JournalEntryBox;
