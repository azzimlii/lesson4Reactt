import { Component } from "react";
import UserLogin from "./components/UserLogin";

class App extends Component{
    render(){
        return(
            <>
            {/* <Wine title="A wine" description="Russian" rating="5"/>
            <Wine title="B wine" description="American" rating="11"/>
            <Wine title="C wine" description="Italian" rating="23"/> */
            <UserLogin/>}
            </>
        )
    }
}
export default App;