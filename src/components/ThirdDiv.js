import "./cards.css"
export const Third = ({setColors3, colors3, text3, setText3, setText, setText2, setText5, setColors2, setColors, setColors5,setColors4,setText4, setColors6, setText6}) => {
    const changingColorHandler = () => {
      setColors3(true)
      setText3(true)
      setText(false)
      setText2(false)
      setText5(false)
      setColors2(false)
      setColors(false)
      setColors5(false)
      setColors4(false)
      setText4(false)
      setColors6(false)
setText6(false)
    }

    return(
        <div onMouseEnter={changingColorHandler} className="firstDiv" style={{backgroundColor: colors3 ? "red": "#f6f6f6", color: colors3 ? "white": "black"}}>
            <p>{text3? "JSX": "What's the name of the syntax we use to describe a UI in React?"}</p>
        </div>
    )
}