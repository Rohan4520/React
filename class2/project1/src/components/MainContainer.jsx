import CardContainer from "./CardContainer"
import Navbar from "./Navbar"


function MainContainer({colorTheme, colorChangeTheme , companyname , sendata}) {
    // console.log(colorTheme,colorSetTheme,colorChangeTheme)
    return (
        <div className="main-conatiner">
            {/* <Navbar colorTheme={colorTheme} colorChangeTheme={colorChangeTheme} /> */}
            <CardContainer  companyname={companyname}/>
            <Navbar/>
        </div>
    )
}

export default MainContainer