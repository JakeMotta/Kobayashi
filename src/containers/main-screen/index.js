import React, { useState, useEffect, useRef } from "react";
import { get, isEqual } from "lodash";
import BottomSlider from "../../components/bottom-slider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import Dot from "../../components/dot";
import InvisibleTextInput from "../../components/invisible-text-input";
import "./index.scss";

let dotOffsetInterval = 500;

const MainScreen = () => {
    const [inputText, setInputText] = useState("");
    const [isAnimating, setIsAnimating] = useState(false);
    const [animationArray, setAnimationArray] = useState([]);

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

    const ACCEPTANCE_KEYS = ["enter"];

    const handler = ({key}) => {
        if(ACCEPTANCE_KEYS.includes(key.toLowerCase())) setIsAnimating(true);
        // console.log("key: ", {key: key.toLowerCase(), v: ACCEPTANCE_KEYS.includes(key.toLowerCase()) , isAnimating, inputText, animationArray});
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