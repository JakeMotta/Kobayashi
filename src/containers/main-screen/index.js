import React, { useState, useEffect } from "react";
import { get, isEqual } from "lodash";
import BottomSlider from "../../components/bottom-slider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import Dot from "../../components/dot";
import "./index.scss";

let dotOffsetInterval = 1000;

const MainScreen = () => {
    const [sliderVisible, setSliderVisible] = useState(false);
    const [inputText, setInputText] = useState("");
    const [isAnimating, setIsAnimating] = useState(false);
    const [animationArray, setAnimationArray] = useState([]);

    // Listen for input changes from user
    useEffect(() => {
        if(isAnimating) setIsAnimating(false); // Reset 'isAnimating' to false
    }, [inputText]);

    // Listen for 'isAnimating' state changes
    useEffect(() => {
        if(isAnimating) createStringArray();
    }, [isAnimating]);

    const createStringArray = () => {
        let arr = [];
        for(let i = 0; i < inputText.length; i++) 
            arr.push(inputText[i]);
        setAnimationArray(arr);
    }

    return (
        <div className="main-screen">
            <div className="kobayashi-display">
                { animationArray.map((elem, i) => (
                    <Dot value={elem} offset={i * dotOffsetInterval} />
                ))}
            </div>

            <div className="expand-wrapper">
                <div className={"expand-button ".concat(sliderVisible ? "expand-rotation" : "")} onClick={() => setSliderVisible(!sliderVisible)}>
                    <FontAwesomeIcon icon={solid('angle-up')}/>
                </div>
            </div>
            <BottomSlider visible={sliderVisible} inputText={inputText} setInputText={setInputText} setIsAnimating={setIsAnimating} />
        </div>
    )
}

export default MainScreen