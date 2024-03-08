import { useContext } from "react";
import { useUser } from "../../hooks/user";
import { PrivateRouteContext } from "../../routes/PrivateRoute/PrivateRoute";
import { Button } from "../Button/Button";
import './Navbar.css';

export const Navbar = () => {
   const { user } = useContext(PrivateRouteContext);
   const setUser  = useUser()[1];

    return (
        <header>
            <nav className='navbar'>
                <div className="navbar__contents">
                    <Button
                        href="/home"
                        text="Home"
                        color="white"
                    />

                    <span
                        className="navbar__username"
                    >
                        Welcome, {user.name}!
                    </span>

                    <div style={{flex: "4"}}/>

                    <Button
                        text="Log Out"
                        color="white"
                        onClick={() => setUser(undefined)}
                    />
                </div>
            </nav>
        </header>
    );
};
