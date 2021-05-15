import Link from "next/link";
import { Fragment } from "react";
import { HiPencil, HiLink, HiCheck, HiChevronDown } from "react-icons/hi";
import FileName from "./FileName";
// import { Menu, Transition } from "@headlessui/react";

interface Props {}

const NewFormHeader = ({}: Props) => {
    return (
        <Fragment>
            <header className="flexCenter flex-col sm:flex-row justify-between container h-16 my-4">
                <div className="rowCenter">
                    Logo <FileName />{" "}
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
                            <div className="rowCenter cursor-pointer">
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
        </Fragment>
    );
};

export default NewFormHeader;
