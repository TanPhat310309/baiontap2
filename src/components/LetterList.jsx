import LetterItem from "./LetterItem";

function LetterList({ letters }) {
    return (
        <div style={{ marginTop: "20px"}}>
            {letters.length === 0 && <p>Chưa có bài viết nào...</p>}
            {letters.map((letter) => (
                <LetterItem key={letter.id} letter={letter} />
            ))}
        </div>
    );
}

export default LetterList;