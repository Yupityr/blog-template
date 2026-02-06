import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/services/supabaseClient";
import { useSession } from "@/context/AuthContext";
import Blogcard from "../components/common/Blogcard";


const Homepage = () => {
  const { session} = useSession();
  const navigate = useNavigate();
  
  const signOutUser = async (e:any) => {
    e.preventDefault();

    try{
      await supabase.auth.signOut();
      navigate("/")
    } catch (error){
      return error
    }
  }

  return (
    <main className="flex flex-col items-center justify-center  py-2">
      <section className="main-container">
        <h1 className="header-text my-2 text-center">Welcome to Hermod</h1>
      </section>
      <Blogcard />
    </main>
  );
};

export default Homepage;
