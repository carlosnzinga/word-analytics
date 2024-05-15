import { useState } from "react";
import Warning from "./Warning";

export default function Textarea() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    let newText = event.target.value;

    if (newText.includes("<script>")) {
      alert("No script tag allowed!");
      newText = newText.replace("<script>", "");
    }

    setText(newText);
  };
  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        className="textarea"
        placeholder="Enter your Text"
        spellCheck="false"
      />
      <Warning />
    </div>
  );
}
