import { Component } from "react";
export default class UserLogin extends Component {
    state = {
        forEmail: "Yalnız .ru domenlərinə icazə verilir!",
        forPassword: "Ən azı 8 simvol",
        message: "",
    };

    gettingValueofFirstInput = (event) => {
        const firstInput = event.target.value;
        this.setState({ email: firstInput });
        if (typeof firstInput === "string" && firstInput.endsWith(".ru")) {
            this.setState({ message: "" });
        } else {
            this.setState({ message: this.state.forEmail });
            console.log(this.state.forEmail);

        }
    }
    gettingValueofSecondInput = (event) => {
        const secondInput = event.target.value;
        this.setState({ email: secondInput });
        if (secondInput.length > 8) {
            this.setState({ message: "" });
        } else {
            this.setState({ message: this.state.forPassword });
            console.log(this.state.forPassword);
        }
    }
    render() {
        return (
            <>
                <div className="login">
                    <h1>Register</h1>
                    <label >Email:</label>
                    <input type="text" name="email" value={this.state.firstInput}
                        onChange={this.gettingValueofFirstInput} ></input>
                    <h2 className="message">{this.state.message}</h2>
                    <label >Password:</label>
                    <input name="password" value={this.state.secondInput}
                        onChange={this.gettingValueofSecondInput}></input>
                    <button type="button">Login</button>
                </div>
            </>
        )
    }
}
