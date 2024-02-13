import "./cards.css"
export const Second = ({setText, setColors,setColors2, setText2, colors2, text2, setColors5, setText5, setColors3,setText3, setColors4,setText4, setColors6,setText6}) => {
        const changingColorHandler = () => {
            console.log("hello");
            setColors5(false);
            setText5(false);
            setColors2(true);
            setText2(true);
            setText(false);
            setColors(false)
            setColors3(false)
            setText3(false)
            setColors4(false)
            setText4(false)
            setColors6(false)
            setText6(false)
        }
    return(
        <div onMouseEnter={changingColorHandler} className="firstDiv" style={{backgroundColor: colors2 ? "red": "#f6f6f6", color: colors2 ? "white": "black"}}>
            <p>{ text2 ? "Components":"What are the building blocks of React apps?"}</p>
        </div>
    )
}