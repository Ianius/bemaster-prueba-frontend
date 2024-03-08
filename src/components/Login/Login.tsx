import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { db } from '../../data/db';
import { useUser } from '../../hooks/user';
import { User } from '../../types/db.types';
import { Button } from '../Button/Button';
import { InputField } from '../InputField/InputField';
import './Login.css';

const validateEmail = (email: string, user?: User) => {
    const emailIsValid = email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g) !== null;

    let error = "";
    if (email.length === 0) {
        error = "The email can't be empty.";
    } else if (emailIsValid) {
        if (!user) {
            error = "Couldn't find an account with that email.";
        }
    } else {
        error = "This email isn't properly formatted, try again.";
    }

    return error;
};

const validatePassword = (password: string, user?: User) => {
    if (!user) {
        return (password.length > 0 ? "" : "The password can't be empty.");
    }

    return password === user.password ? "" : "Password is incorrect.";
};

export const Login = () => {
    const [email, setEmail]       = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors]     = useState({ email: "", password: "" });
    const [user, setUser]         = useUser();
    const navigate                = useNavigate();

    if (user) return <Navigate to="/home" />

    const submit = () => {
        const user          = db.users.find(it => it.email === email);
        const emailError    = validateEmail(email, user);
        const passwordError = validatePassword(password, user);
        if (user && emailError === "" && passwordError === "") {
            setUser(user);
            navigate("/home");
        } else {
            setErrors({
                email: emailError,
                password: passwordError
            });
        }
    };

    return (
        <div className='login'>
            <form className="login__form" autoComplete='off'>
                <h1 >Log In</h1>

                <InputField 
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    error={errors.email}
                    onChange={text => setEmail(text)}
                    onSubmit={submit}
                />

                <InputField 
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    error={errors.password}
                    onChange={text => setPassword(text)}
                    onSubmit={submit}
                />

                <Button
                    text="Continue"
                    onClick={submit}
                />
            </form>
        </div>
    );
};
