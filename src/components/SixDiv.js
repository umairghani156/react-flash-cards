import "./cards.css"
export const Six = ({colors6, setColors6, text6, setText6, setColors, setText, setColors2, setText2, setColors3, setText3, setColors4, setText4, setColors5, setText5}) => {
    const changingColorHandler = () => {
          setColors6(true);
          setText6(true)
          setColors(false);
        setText(false);
        setColors5(false);
        setText5(false);
        setColors2(false);
        setText2(false);
        setColors3(false)
        setText3(false);
        setColors4(false)
setText4(false)
    }
    return(
        <div onMouseEnter={changingColorHandler} className="firstDiv" style={{backgroundColor: colors6 ? "red": "#f6f6f6", color: colors6 ? "white": "black"}}>
            <p>{text6 ? "Controlled component" : "What do we call an input element that is completely synchronised with state?"}</p>
        </div>
    )
}