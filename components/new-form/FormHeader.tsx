import Link from "next/link";
import Image from "next/image";
import { HiPencil, HiLink, HiCheck, HiChevronDown } from "react-icons/hi";
import FileName from "./FileName";
import { useQuestions } from "../../context/questionsContext";

interface Props {
    preview?: boolean;
}

const FormHeader = ({ preview }: Props) => {
    const { handleSetSelectedQuestion } = useQuestions();

    return (
        <header
            className="colCenter sm:flex-row sm:justify-between md:justify-around space-y-4 sm:space-y-0 
                py-16 px-8 h-16 mx-auto bg-white border-b-2 shadow"
        >
            <div className="rowCenter">
                <Image
                    width="48"
                    height="48"
                    src="/images/forms.png"
                    alt="Form Logo by Freepik from flaticon"
                />
                <FileName preview={preview} />{" "}
            </div>
            <div className="rowCenter space-x-8 ">
                <Link href="/form/new">
                    <a>
                        <div className="rowCenter cursor-pointer">
                            <HiPencil className="-ml-1 mr-1 h-5 w-5 text-gray-500" />{" "}
                            Edit
                        </div>
                    </a>
                </Link>
                <Link href="/form/preview">
                    <a>
                        <div
                            className="rowCenter cursor-pointer"
                            onClick={() => handleSetSelectedQuestion(0, true)}
                        >
                            <HiLink className="-ml-1 mr-1 h-5 w-5 text-gray-500" />{" "}
                            Preview
                        </div>
                    </a>
                </Link>
                <div className="rowCenter cursor-pointer">
                    <HiCheck className="-ml-1 mr-1 h-5 w-5 text-gray-500" />{" "}
                    Publish
                </div>
            </div>
        </header>
    );
};

export default FormHeader;
