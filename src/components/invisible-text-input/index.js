import React from "react";
import "./index.scss";

const InvisibleTextInput = ({inputText, setInputText}) => (
    <input id="kobayashi-input" value={inputText} onChange={(e) => setInputText(e.target.value)} autoFocus spellcheck="false" />
)

export default InvisibleTextInput