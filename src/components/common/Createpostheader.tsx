import { Link } from "react-router-dom";
type ChildProps = {
    onPost: () => void;
    disabled: boolean;
}

const CreatePostHeader = ({onPost, onSave, disabled}: ChildProps & {onSave: () => void}) => {
    return (
        <header className="shadow-md flex flex-row justify-between py-4 mb-8">
            <div className=" flex flex-row items-center">
                
                <p className="mx-2 my-auto text-xl">
                    <Link to={'/'} className="temp-logo"> Hermod</Link>
                </p>
            </div>
            <div className="flex flex-row items-center">
            <nav className="flex flex-row mx-2">
                <button className="ml-2 bg-blue-500 px-4 py-2 rounded-md flex flex-row border-none focus:border-none h" onClick={onSave} disabled={disabled}>
                    Save
                </button>
                <button className="ml-2 bg-blue-500 px-4 py-2 rounded-md flex flex-row border-none focus:border-none h" onClick={onPost} disabled={disabled}>
                    Post
                </button>
            </nav>
        </div>
        </header>
    )
};

export default CreatePostHeader;