import Button from "./button/button.jsx";
import InputText from "./input/inputText/inputText.jsx";
import InputDate from "./input/inputDate/inputDate.jsx";
import Select from "./select/select.jsx";

export default function NewTaskPopUp({ onClickCustom, title, desc  }) {
    return (
        <>
            <div className="flex flex-col justify-between xl:w-full overflow-auto px-6 py-10 lg:px-40 lg:py-10 ">
                <h1 className="text-3xl lg:text-5xl font-extrabold">
                    {title}
                </h1>
                <div className="flex flex-col h-full justify-between gap-8 mt-6">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                        <div className="w-full">
                            <div className="py-4 lg:py-6">
                                <h2 className="text-xl lg:text-2xl font-bold">Task name</h2>
                                <InputText variant="md" value={title}></InputText>
                            </div>
                            <div className="py-4 lg:py-6">
                                <h2 className="text-xl lg:text-2xl font-bold">Description</h2>
                                <InputText variant="lg" value={desc}></InputText>
                            </div>
                        </div>
                        <div className="flex flex-col w-full py-6 lg:py-14 text-left">
                            <h2 className="text-xl lg:text-2xl font-bold">Due date</h2>
                            <InputDate variant=""></InputDate>
                            <h2 className="text-xl lg:text-2xl font-bold mt-4">Priority</h2>
                            <Select>
                                <option value="high">High</option>
                                <option value="yellow">Yellow</option>
                                <option value="green">Green</option>
                            </Select>
                            <h2 className="text-xl lg:text-2xl font-bold mt-4">Category</h2>
                            <Select>
                                <option value="personal">Personal</option>
                                <option value="university">University</option>
                                <option value="work">Work</option>
                            </Select>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row sm:gap-16 my-8 p-6">
                        <Button variant="solid-red">Delete Task</Button>
                        <Button variant="border" onClickCustom={onClickCustom}>Close</Button>
                        <Button variant="solid-blue">Save Changes</Button>
                    </div>
                </div>
            </div>
        </>
    );
}
