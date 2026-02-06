import { supabase } from "@/services/supabaseClient";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileDropdown = ({session}) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();   
    const toggleDropdown = () => {
        setOpen(!open);
    }
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
        <div>
            <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 rounded-full bg-gray-200 p-2 hover:bg-gray-300 focus:outline-none"
            >
                <img
                    src="https://via.placeholder.com/32"
                    alt="Profile"
                    className="h-9 w-9 rounded-full border"
                />
            </button>
        {open && 
            <div className="relative">
                    <div className="absolute right-0 mt-2 w-52 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
                    
                    {/* User info (optional) */}
                    <div className="px-4 py-3">
                        <p className="text-sm font-semibold text-gray-900">sample</p>
                        <p className="text-xs text-gray-500">{session?.user.email || "None"}</p>
                    </div>

                    <div className="h-px bg-gray-200" />

                {/* Menu Items */}
                    <div className="py-2">
                        <a
                        href={`/post/user/${session?.user.id}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                        Profile
                        </a>

                        {/* <a
                        href="/settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                        Settings
                        </a> */}

                        <div className="h-px bg-gray-200 my-2" />

                        <button
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                        onClick={signOutUser}
                        >
                        Sign out
                        </button>
                    </div>
                </div>
            </div>}
        </div>
    );
};
export default ProfileDropdown;