import React, { useState, useEffect, useRef } from "react";
import Dot from "../../components/dot";
import InvisibleTextInput from "../../components/invisible-text-input";
import "./index.scss";

const MainScreen = () => {
    const [inputText, setInputText] = useState("");
    const [isAnimating, setIsAnimating] = useState(false);
    const [animationArray, setAnimationArray] = useState([]);

    let dotOffsetInterval = inputText.length > 20 ? 500 - (2 * inputText.length) : 500;

    // Listens for user keyboard events
    const useEventListener = (eventName, handler, element = window) => {
        const savedHandler = useRef();

        useEffect(() => {
            savedHandler.current = handler;
        }, [handler]);

        useEffect(() => {
            const eventListener = (event) => savedHandler.current(event);
            element.addEventListener(eventName, eventListener);
            return () => {
                element.removeEventListener(eventName, eventListener);
            };
        }, [eventName, element]);
    }

    // Acceptable triggers to play our animation
    const ACCEPTANCE_KEYS = ["enter"];

    const handler = ({key}) => {
        if(ACCEPTANCE_KEYS.includes(key.toLowerCase())) setIsAnimating(true);
    }

    useEventListener("keydown", handler);

    // Listen for input changes from user
    useEffect(() => {
        if(isAnimating) {
            setIsAnimating(false); // Reset 'isAnimating' to false
            setAnimationArray([]);
            setInputText(inputText.charAt(inputText.length - 1))
        } else {
            let arr = [];
            for(let i = 0; i < inputText.length; i++) 
                arr.push(inputText[i]);
            setAnimationArray(arr);
        }
    }, [inputText]);

    // Listen for input changes from user
    useEffect(() => {
        console.log("array: ", {animationArray, inputText});
    }, [animationArray]);

    return (
        <div className="main-screen">
            <InvisibleTextInput inputText={inputText} setInputText={setInputText} setIsAnimating={setIsAnimating} />
            <div className="kobayashi-display">
                { animationArray.map((elem, i) => (
                    <Dot value={elem} offset={i * dotOffsetInterval} animate={isAnimating} />
                ))}
            </div>
        </div>
    )
}

export default MainScreen