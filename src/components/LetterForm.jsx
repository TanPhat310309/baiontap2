import { useState } from "react";

function LetterForm({ onAdd }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === "") return;
        onAdd(text);
        setText("");
    };

    return(
        <form onSubmit={handleSubmit}
        style={{
        backgroundColor: "#f0f8ff",
        padding: "15px",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}>
        
            <input 
                type="text"
                placeholder="Viết letter..." 
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
        }}
            />
            <button style={{
          marginTop: "10px",
          padding: "8px 12px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}>Gửi</button>
        </form>
    );
}

export default LetterForm;