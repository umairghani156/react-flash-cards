import "./cards.css"
export const Fourth = ({colors4, setColors4, text4, setText4, setColors3, setText3, setText, setText2, setText5, setColors2, setColors, setColors5, setColors6,setText6}) => {
    const changingColorHandler = () => {
        setColors4(true)
        setText4(true)
        setColors3(false)
      setText3(false)
      setText(false)
      setText2(false)
      setText5(false)
      setColors2(false)
      setColors(false)
      setColors5(false)
      setColors6(false)
setText6(false)
    }
    return(
        <div onMouseEnter={changingColorHandler} className="firstDiv" style={{backgroundColor: colors4 ? "red": "#f6f6f6", color: colors4 ? "white": "black"}}>
            <p>{ text4 ? "Props":"How to pass data from parent to child components?"}</p>
        </div>
    )
}