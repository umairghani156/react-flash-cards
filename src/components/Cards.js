import { useState } from "react"
import "./cards.css"
import { First } from "./FirstDiv"
import { Fifth } from "./FifthDiv"
import { Fourth } from "./FourthDiv"
import { Second } from "./SecondDiv"
import { Six } from "./SixDiv"
import { Third } from "./ThirdDiv"

export const Cards = () => {
    const [colors, setColors] = useState(false)
    const [text, setText] = useState(false)
    const [colors2, setColors2] = useState(false)
    const [text2, setText2] = useState(false)
    const [colors3, setColors3] = useState(false)
    const [text3, setText3] = useState(false)
    const [colors4, setColors4] = useState(false)
    const [text4, setText4] = useState(false)
    const [colors5, setColors5] = useState(false)
    const [text5, setText5] = useState(false)
    const [colors6, setColors6] = useState(false)
    const [text6, setText6] = useState(false)
    return (
        <div className="cardsPar">
        <First text={text} setText={setText} setColors2={setColors2} setText2={setText2} setText5={setText5} colors={colors} setColors={setColors} colors5={colors5} setColors5={setColors5} setColors3={setColors3} setText3={setText3} setColors4={setColors4} setText4={setText4} setText6={setText6} setColors6={setColors6}/>
        <Second setText={setText}  text2={text2} setText2={setText2} setColors2={setColors2} colors2={colors2} setColors={setColors}  setText5={setText5}  setColors5={setColors5} setColors3={setColors3} setText3={setText3} setColors4={setColors4}setText4={setText4} setText6={setText6} setColors6={setColors6}/>
        <Third colors3={colors3} setColors3={setColors3} text3={text3} setText3={setText3} setText={setText} setText2={setText2} setText5={setText5} setColors2={setColors2}setColors={setColors}setColors5={setColors5} setColors4={setColors4} setText4={setText4} setText6={setText6} setColors6={setColors6}/>
        <Fourth colors4={colors4} setColors4={setColors4} text4={text4} setText4={setText4} setText={setText} setText2={setText2} setText5={setText5} setText3={setText3} setColors2={setColors2} setColors={setColors} setColors5={setColors5} setColors3={setColors3} setText6={setText6} setColors6={setColors6}/>
        <Fifth text5={text5} setText5={setText5} text={text} setText={setText} colors={colors} setColors={setColors} colors5={colors5} setColors5={setColors5} setText2={setText2} setColors2={setColors2} setColors3={setColors3} setText3={setText3} setColors4={setColors4} setText4={setText4} setText6={setText6} setColors6={setColors6}/>
        <Six colors6={colors6} setColors6={setColors6} text6={text6} setText6={setText6} setText={setText} setText2={setText2} setText5={setText5} setText3={setText3} setText4={setText4} setColors2={setColors2} setColors={setColors} setColors5={setColors5} setColors3={setColors3} setColors4={setColors4}/>
        </div>
    )
}