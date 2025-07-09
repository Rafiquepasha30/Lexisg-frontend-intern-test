import React from "react";
import "./InputPanel.css";

const InputPanel = ({ query, setQuery, loading, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="input-panel">
      <textarea
        className="input-textarea"
        rows="4"
        placeholder="Enter your legal question..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className={`submit-button ${loading ? "loading" : ""}`}
        disabled={loading}
      >
        {loading ? "Loading..." : "Submit"}
      </button>
    </form>
  );
};

export default InputPanel;
