import "./cards.css"
export const Fifth = ({colors, setColors, text, setText, setColors5, colors5, text5, setText5, setText2, setColors2, setColors3, setText3 ,setColors4,setText4,setColors6,setText6}) => {
    
    const changingColorHandler = () => {
        console.log("hello");
        setColors(false);
        setText(false);
        setColors5(true);
        setText5(true);
        setColors2(false);
        setText2(false);
        setColors3(false)
        setText3(false);
        setColors4(false)
setText4(false)
setColors6(false)
setText6(false)

    }
    return(
        <div onMouseEnter={changingColorHandler} className="firstDiv" style={{backgroundColor: colors5 ? "red": "#f6f6f6", color: colors5 ? "white": "black"}}>
            <p>{text5 ? "useState hook":"How to give components memory?"}</p>
        </div>
    )
}