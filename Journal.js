import React, { useState } from "react";
import JournalEntryBox from "../components/JournalEntryBox";
import GPTResponseBox from "../components/GPTResponseBox";

const Journal = () => {
  const [entry, setEntry] = useState("");
  const [response, setResponse] = useState("");
  const [emotion, setEmotion] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!entry.trim()) return;
    setLoading(true);
    setResponse("");
    setEmotion("");

    try {
      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: entry }),
      });

      const data = await res.json();
      setResponse(data.response);
      setEmotion(data.emotion);
    } catch (error) {
      setResponse("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <JournalEntryBox
        value={entry}
        onChange={setEntry}
        onSubmit={handleSubmit}
        loading={loading}
      />
      {response && <GPTResponseBox message={response} emotion={emotion} />}
    </div>
  );
};

export default Journal;