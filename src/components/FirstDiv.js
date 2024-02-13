
import "./cards.css"
export const First = ({colors, setColors,setText5, text, setText,  setColors5, colors5, setColors2, setText2, setColors3,setText3, setColors4,setText4, setColors6,setText6}) => {
    const changingColorHandler = () => {
        console.log("hello");
        const paraText = "JSX"
        setColors(true);
        setText(true);
        setColors5(false)
        setText5(false)
        setColors2(false)
        setText2(false)
        setColors3(false)
        setText3(false)
        setColors4(false)
        setText4(false)
        setColors6(false)
setText6(false)
    }
    return(
        <div onMouseEnter={changingColorHandler} className="firstDiv" style={{backgroundColor: colors ? "red": "#f6f6f6", color: colors ? "white": "black"}}>
            <p>{text ? "Javascript" : "What language is React based on?"}</p>
        </div>
    )
}