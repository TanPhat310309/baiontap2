import { useEffect } from "react";

function LetterItem({letter}) {
    useEffect(() => {
        console.log("Mounted:", letter.id);

        return () => console.log("Unmounted:", letter.id);
    }, []);

    return (
        <div
        style={{
            border: "1px solid #ddd",
            padding: "12px",
            marginBottom: "12px",
            borderRadius: "8px",
            backgroundColor: "#fff",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
        >
        {letter.content}   
        </div>
    );
}

export default LetterItem;