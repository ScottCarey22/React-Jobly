import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import UserContext from "../auth/UserContext";

// Jobly's homepage.
// displays a simple welcome message or login/register buttons. 
// Route at /

const Homepage = () => {
    const { currentUser } = useContext(UserContext);
    console.debug("Hompage", "currentUser=", currentUser);

    return (
        <div className="Homepage">
            <div className='container text-center'>
                <h1 className='mb-4 font-weight-bold'>Jobly</h1>
                <p className='lead'>It's time to find that perfect job!</p>
                {currentUser
                    ? <h2>
                        Welcome Back, {currentUser.firstName || currentUser.username}!</h2> : (
                        <p >
                            <Link className='btn btn primary font-weight-bold mr-3' to='/login'>Log In </Link>
                            <Link className='btn btn primary font-weight-bold mr-3' to='/signup'>Sign up </Link>

                        </p>
                    )
                }
            </div>
        </div>
    )
}

export default Homepage();