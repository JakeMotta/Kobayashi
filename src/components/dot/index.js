import React, {useEffect, useRef, useState} from "react";
import "./index.scss";

const Dot = ({value, offset, animate}) => {
    const dotRef = useRef(null);
    const [transformA, setTransformA] = useState(false);
    const [transformB, setTransformB] = useState(false);
    const [transformC, setTransformC] = useState(false);
    const [transformD, setTransformD] = useState(false);

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
            dotRef.current.classList.add("blur");
            dotRef.current.classList.add("dotTransition");
            let timer = setTimeout(() => {
                clearTimeout(timer);
                setTransformB(true);
            }, 250)
        }
    }, [transformA])

    useEffect(() => {
        if(transformB) {
            dotRef.current.classList.remove("transition");
            dotRef.current.classList.remove("blur");
            dotRef.current.style.backgroundColor = "transparent";
            setTransformC(true);
        }
    }, [transformB])

    useEffect(() => {
        if(transformC) {
            dotRef.current.children[0].style.color = "#2a2a2a";
            dotRef.current.classList.add("transition");
            dotRef.current.classList.add("textInit");
            dotRef.current.classList.add("blur");
            let timer = setTimeout(() => {
                clearTimeout(timer);
                setTransformD(true);
            }, 150)
        }
    }, [transformC])

    useEffect(() => {
        if(transformD) {
            dotRef.current.classList.remove("textInit");
            dotRef.current.classList.remove("blur");
            dotRef.current.classList.add("textExpand");
        }
    }, [transformD])


    return (
        <div ref={dotRef} className={"dot"}>
            <span className={"character"}>{value}</span>
        </div>
    )
}

export default Dot