import React, { useState, useEffect } from "react";
import { get, isEqual } from "lodash";
import "./index.scss";

const InvisibleTextInput = ({inputText, setInputText}) => (
    <input id="kobayashi-input" value={inputText} onChange={(e) => setInputText(e.target.value)} autoFocus spellcheck="false" />
)

export default InvisibleTextInput