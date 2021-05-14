// Material-Ui import(s)
import TextField from "@material-ui/core/TextField";

// React-Icon imports
import { RiImageAddFill } from "react-icons/ri";

// React Components imports
import Options from "./Options";

interface Props {}

const AddQuestion = ({}: Props) => {
    return (
        <li className="container">
            <div className="p-8">
                <form action="" className="rowCenter space-x-4">
                    <TextField
                        id="question"
                        variant="filled"
                        placeholder="Question"
                    />
                    <RiImageAddFill width="30px" height="50px" />
                    <Options />
                </form>
            </div>
        </li>
    );
};

export default AddQuestion;
