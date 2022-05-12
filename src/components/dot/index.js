import React, {useEffect, useRef, useState} from "react";
import { get, isEqual } from "lodash";
import "./index.scss";

const Dot = ({value, offset, animate}) => {
    const dotRef = useRef(null);
    const [transformA, setTransformA] = useState(false);
    const [transformB, setTransformB] = useState(false);

    useEffect(() => {
        if(animate) {
            let countDown = setTimeout(() => {
                clearTimeout(countDown);
                setTransformA(true);
            }, offset);
        }
    }, [animate])

    useEffect(() => {
        if(transformA) {
            dotRef.current.classList.add("transition");
            dotRef.current.classList.add("dotCollapse");

            let timer = setTimeout(() => {
                clearTimeout(timer);
                dotRef.current.classList.remove("transition");
                dotRef.current.style.backgroundColor = "transparent";
                setTransformB(true);
            }, 1000)
        }
    }, [transformA])

    useEffect(() => {
        if(transformB) {
            dotRef.current.children[0].style.color = "#2a2a2a";
            dotRef.current.classList.add("textExpand");
            dotRef.current.classList.add("transition");
        }
    }, [transformB])

    return (
        <div ref={dotRef} className={"dot"}>
            <span className={"character"}>{value}</span>
        </div>
    )
}

export default Dot