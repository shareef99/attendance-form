import {
    OptionDetailsType,
    useQuestions,
} from "../../../context/questionsContext";
// helpers
import { isSelected } from "../../../helpers/question-utils";
// Material-UI imports
import Dropdown from "./components/Dropdown";
import Input from "./components/Input";
import DeleteButton from "./components/DeleteButton";
import CheckboxInput from "./components/Checkbox";
import MultiChoice from "./components/MultiChoice";
import AddButton from "./components/AddButton";

interface Props {
    id: number;
    preview: boolean;
    option: string;
    optionDetails: Array<OptionDetailsType>;
    answer: string | Array<string>;
}

const MCD = ({ id, preview, optionDetails, option, answer }: Props) => {
    const { selectedQuestion } = useQuestions();

    return (
        <ul className={`${option === "Dropdown" ? "space-y-4" : "space-y-0"}`}>
            {option === "Dropdown" && preview ? (
                <Dropdown
                    id={id}
                    answer={answer}
                    optionDetails={optionDetails}
                />
            ) : (
                optionDetails?.map((optionDetail, index) => {
                    return (
                        <li
                            key={optionDetail.id}
                            className="rowCenter justify-between"
                        >
                            <div>
                                <CheckboxInput
                                    id={id}
                                    preview={preview}
                                    optionText={optionDetail.text}
                                    answer={answer}
                                    option={option}
                                />
                                <MultiChoice
                                    id={id}
                                    preview={preview}
                                    optionText={optionDetail.text}
                                    answer={answer}
                                    option={option}
                                />
                                {option === "Dropdown" && !preview && (
                                    <span>{index + 1}. </span>
                                )}
                                <Input
                                    id={id}
                                    preview={preview}
                                    optionDetail={optionDetail}
                                    other={optionDetail.text === "others"}
                                />
                            </div>
                            <DeleteButton
                                id={id}
                                optionCount={optionDetails.length}
                                optionId={optionDetail.id}
                            />
                        </li>
                    );
                })
            )}
            {/* Add Option and Add others button */}
            {!optionDetails?.find((x) => x.text === "others") &&
                !preview &&
                isSelected(selectedQuestion.id, id) && (
                    <AddButton id={id} optionDetails={optionDetails} />
                )}
        </ul>
    );
};

export default MCD;
