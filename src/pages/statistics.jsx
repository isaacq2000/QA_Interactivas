import DailyUseTime from "../components/dailyUseTime.jsx";
import PercentageCard from "../components/percetageCard.jsx";
import InputDate from "../components/input/inputDate/inputDate.jsx";
import { Link } from 'react-router-dom';

export default function Statistics({ onClickCustom }) {
    return (
        <div className="flex flex-col justify-center items-center w-full 2xl:p-20  lg:gap-10 xl:m-10 2xl:m-0">

            <div className="flex justify-between w-full items-center flex-col md:flex-row lg:px-10 xl:p-0">

                <div className="flex   items-center justify-center gap-4 flex-row w-full lg:justify-between lg:px-10 xl:p-0">
                    <a href="/home" className="my-2 font-bold xl:hidden bg-gray-300 p-3 rounded-full  ">Go back</a>
                    <h1 className="text-3xl md:text-6xl font-bold 2xl:w-full">Statistics Board</h1>
                </div>
                <div >
                    <InputDate />
                </div>
            </div>

            <div className="flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-4 items-center justify-center place-items-center  xl:w-full  gap-x-24 xl:gap-12">
                <PercentageCard title={"Fully completed tasks this week"} />
                <PercentageCard title={"Tasks completed this week"} />
                <PercentageCard title={"Working in tasks"} />
                <PercentageCard title={"Missed tasks"} />
            </div>

            <div className="flex flex-col justify-between  lg:w-[80%] xl:w-full  lg:gap-12 xl:flex-row">
                <DailyUseTime title={"Task completed this week"} subtitle={"Average completed per day: 3"} />
                <DailyUseTime title={"Water drinked this week"} subtitle={"Average per day: 1 liter"} />
            </div>
        </div>
    );
}
