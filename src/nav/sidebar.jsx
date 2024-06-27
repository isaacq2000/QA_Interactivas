import Calendar from "../components/calendar.jsx"
import StatisticsIcon from '../components/percentage.jsx'
import Statistics from '../pages/statistics.jsx'
import { useState } from 'react';
import Popup from '../components/layoutPopUp.jsx'
import { Link } from 'react-router-dom';



export default function Sidebar() {

    const [isStatisticsOpen, setStatisticsOpen] = useState(false);
    const openStatistics = () => setStatisticsOpen(true);
    const closeStatistics = () => setStatisticsOpen(false);

    return (

        <div className="w-full flex flex-col items-start justify-start    h-[80%]">
            <div className="m-auto scale-90 md:scale-150">
                <Calendar></Calendar>

            </div>
            <Link to={"/statistics"} className="w-full flex items-centers justify-center scale-125">
                <StatisticsIcon /></Link>

        </div>
    )
}