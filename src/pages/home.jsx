import { getCurrentDate } from '../utils.js'
import NewTaskButton from '../components/newTaskButton.jsx'
import Task from '../components/task.jsx'
import BasicDateCalendar from '../components/calendar.jsx'
import SearchBar from '../components/searchBar.jsx'
import ProfileButton from '../components/profileButton.jsx'
import Courses from '../components/courses.jsx'
import Activity from '../components/activity.jsx'
import StatisticsIcon from '../components/percentage.jsx'
import Layout from '../layout/Layout.jsx'
import { Link } from 'react-router-dom';
import Popup from '../components/layoutPopUp.jsx'
import { useState } from 'react';
import NewTaskPopUp from '../components/newTaskPopUp.jsx'
import Statistics from '../pages/statistics.jsx'
import Profile from '../pages/profile.jsx'
import { useFetchDuties } from '../components/hooks/useFetchDuties'

export default function Home() {
    const [isTaskOpen, setTaskOpen] = useState(false);
    const [isStatisticsOpen, setStatisticsOpen] = useState(false);
    const [isProfileOpen, setProfileOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const [taskName, setTaskName] = useState('');
    const [taskDesc, setTaskDesc] = useState('');

    const { duties } = useFetchDuties();

    const openTask = (name, description) => {
        setTaskName(name);
        setTaskDesc(description);
        setTaskOpen(true);
    };

    const closeTask = () => setTaskOpen(false);
    const openStatistics = () => setStatisticsOpen(true);
    const closeStatistics = () => setStatisticsOpen(false);
    const openProfile = () => setProfileOpen(true);
    const closeProfile = () => setProfileOpen(false);

    const filteredDuties = duties.filter(duty =>
        duty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        duty.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Layout>
            <Popup isOpen={isTaskOpen} onClose={closeTask}>
                <NewTaskPopUp onClickCustom={closeTask} title={taskName} desc={taskDesc}></NewTaskPopUp>
            </Popup>
            <Popup isOpen={isProfileOpen} onClose={closeProfile}>
                <Profile onClickCustom={closeProfile}></Profile>
            </Popup>
            <Popup isOpen={isStatisticsOpen} onClose={closeStatistics}>
                <Statistics onClickCustom={closeStatistics}></Statistics>
            </Popup>
            <div className='flex flex-col  gap-8 xl:grid mx-4 xl:gap-0 xl:grid-cols-4 justify-center items-start xl:h-[100vh] 2xl:py-2'>
                <div className='hidden xl:flex justify-between px-12 col-span-4 items-center h-full'>
                    <img src="../public/Logo_white.png" alt="" className='h-16' />
                    <div className='flex items-center justify-center w-full gap-8 h-full '>
                        <div className='flex  items-center justify-end w-full h-full '>
                            <Link to={"/"}>
                                <svg className='hover:scale-125 duration-300' xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 4h3c1.1046 0 2 .8954 2 2v12c0 1.1046-.8954 2-2 2h-3M8 8l-4 4m0 0 4 4m-4-4h12" /></svg>
                            </Link>
                        </div>
                        <ProfileButton onClickCustom={openProfile} />
                    </div>
                </div>

                <div className='col-span-4 grid grid-cols-4 2xl:gap-20  h-full  w-full'>
                    <div className='hidden xl:flex flex-col justify-center items-center    xl:scale-75 2xl:scale-90 3xl:scale-100  '>
                        <div className='flex flex-col justify-between gap-20 w-[70%] '>
                            <Courses />
                            <Activity />
                        </div>
                    </div>

                    <div className='col-span-4 xl:col-span-2 flex flex-col  gap-8  m-auto w-full lg:w-[80%] xl:w-full  xl:h-full xl:scale-90 2xl:scale-100'>
                        <div className='flex justify-between items-center md:p-8 xl:p-0'>
                            <Link to={"/"}>
                                <svg className='hover:scale-125 duration-300 xl:hidden' xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 4h3c1.1046 0 2 .8954 2 2v12c0 1.1046-.8954 2-2 2h-3M8 8l-4 4m0 0 4 4m-4-4h12" /></svg>
                            </Link>
                            <h1 className='text-6xl xl:text-5xl 2xl:text-7xl font-bold'>Today </h1>
                            <div className='xl:hidden'>
                                <NewTaskButton onClickCustom={openTask} />
                            </div>
                        </div>

                        <SearchBar title={"Search..."} onSearch={setSearchQuery} />

                        <div className='flex flex-col items-center gap-2 overflow-y-scroll  h-[60vh] lg:h-[65vh] xl:h-[31.5rem] 2xl:h-[31.5rem]   3xl:h-[36.5rem] w-full  m-auto '>
                            {filteredDuties.map((duty) => (
                                <Task
                                    key={duty.id}
                                    title={duty.name}
                                    date={duty.date}
                                    onCustomClick={() => openTask(duty.name, duty.description)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className='flex justify-between flex-col 3xl:pt-20 h-full  xl:scale-90 2xl:scale-100'>
                        <div className='hidden xl:flex items-center justify-center w-full   xl:scale-75 3xl:scale-100'>
                            <BasicDateCalendar />
                        </div>

                        <div className='hidden xl:flex items-center justify-center w-full'>
                            <div className='cursor-pointer 2xl:hover:scale-110 duration-300 xl:scale-90 xl:hover:scale-100 2xl:scale-100'>
                                <StatisticsIcon onClickCustom={openStatistics} percentage={60} colour={"yellow"} />
                            </div>
                        </div>

                        <div className='hidden xl:block p-8'>
                            <NewTaskButton onClickCustom={openTask} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
