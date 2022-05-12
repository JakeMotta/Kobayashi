import React, { useState, useEffect, useRef } from "react";
import { get, isEqual } from "lodash";
import TextInput from "../text-input";
import "./index.scss";

const BottomSlider = ({visible, inputText, setInputText, setIsAnimating}) => {
    const sliderRef = useRef(null);

    // Sets the initial height / offset
    useEffect(() => {
        let sliderHeight = sliderRef.current.getBoundingClientRect().height;
        sliderRef.current.style.height = sliderHeight + "px";
        sliderRef.current.style.bottom = -1 * sliderHeight + "px";
    })

    // Triggers our animation when 'visible' is toggled
    useEffect(() => {
        if(visible) {
            sliderRef.current.classList.add("slideIn");
            console.log("slider: ", sliderRef);
            // sliderRef.focus();
            // sliderRef.select();
        }
        else sliderRef.current.classList.remove("slideIn")
    }, [visible])

    return (
        <div className={"bottom-slider "} ref={sliderRef}>
            <TextInput inputText={inputText} setInputText={setInputText} setIsAnimating={setIsAnimating } />
        </div>
    )
}

export default BottomSlider