import { useState } from "react";
import './Register.css'
import { useNavigate } from "react-router-dom";

function Register() {
    const [userData, setUserData] = useState({ name: "", email: "", password: "" });
    // console.log(userData, "userData check here");
    const router = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(userData, "after submit");
        var usersFromDB = JSON.parse(localStorage.getItem("userData")) || [];
        usersFromDB.push(userData);
        localStorage.setItem("userData", JSON.stringify(usersFromDB));
        console.log(usersFromDB);
        setUserData({ name: "", email: "", password: "" });
        alert("Registration Done...");
        router ('/Login');
        
    }

    function updatingData(e) {
        var name = e.target.name;
        var value = e.target.value;
        // console.log(e.target.name, e.target.value, "updatingData");
        setUserData({ ...userData, [name]: value })
    }

    return (
        <div id="body">
            <div id="register">
                <div id="top">
                    <div>
                        <div>Signup</div>
                        <div>
                            <a>login</a>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label>Name</label><br />
                    <input onChange={updatingData} name='name' value={userData.name} type="text" placeholder="Type your Name" /><br />
                    <label>Email</label><br />
                    <input onChange={updatingData} name='email' value={userData.email} type="email" placeholder="Type your Email" /><br />
                    <label>Password</label><br />
                    <input onChange={updatingData} name='password' value={userData.password} type="password" placeholder="Type your Passwrd" /><br />
                    <button>Have a referral code?</button><br />
                    <input type="submit" value="Register" />
                    <div>By creating an account, I accept the Terms & Conditions & Privacy Policy</div>

                </form>
            </div>
        </div>
    )
}
export default Register;