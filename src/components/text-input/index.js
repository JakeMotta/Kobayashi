import React, { useState, useEffect } from "react";
import { get, isEqual } from "lodash";
import "./index.scss";

const TextInput = ({inputText, setInputText, setIsAnimating}) => {

    return (
        <div className="text-input-wrapper">
            <input className="text-input" value={inputText} onChange={(e) => setInputText(e.target.value)} />
            <button className="myButton" onClick={() => setIsAnimating(true)}> Kobayashi-San! </button>
        </div>
    )
}

export default TextInput