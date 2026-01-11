import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);

    return (
        <div>
            <form className="max-w-md m-auto pt-24">
                <h2 className="font-bold pb-2">Sign Up Page</h2>
                <p>Already have an account? <Link to="/signin">Sign In</Link></p>
                <div className="flex flex-col gap-4 pt-4">
                    <input placeholder="email" className="p-3 mt-4" type="email" />
                    <input placeholder="password" className="p-3 mt-4" type="password" />
                    <button type="submit" disabled={loading}>Sign Up</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;