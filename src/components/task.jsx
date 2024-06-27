import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Task({ title, date, checked, onCustomClick }) {

    return (
        <>
            <div onClick={onCustomClick} className='flex gap-8 shadow-lg transition-transform overflow-visible transform transition-colors duration-300 hover:bg-gray-200 w-full'>
                <div className='flex justify-between items-center w-full  py-2 ml-6  '>
                    <div className='flex flex-col gap-1 w-[15rem] lg:w-[30rem]   2xl:w-[32rem] 3xl:w-[35rem]'>
                        <h2 className='text-xl xl:text-lg lg:text-2xl   truncate overflow-hidden text-ellipsis whitespace-nowrap '>{title}</h2>
                        <div className='flex items-center justify-start gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M4.5 1a.5.5 0 0 1 .5.5V2h5v-.5a.5.5 0 0 1 1 0V2h1.5A1.5 1.5 0 0 1 14 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 12.5v-9A1.5 1.5 0 0 1 2.5 2H4v-.5a.5.5 0 0 1 .5-.5M10 3v.5a.5.5 0 0 0 1 0V3h1.5a.5.5 0 0 1 .5.5V5H2V3.5a.5.5 0 0 1 .5-.5H4v.5a.5.5 0 0 0 1 0V3zM2 6v6.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V6zm5 1.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0M9.5 7a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m1.5.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m.5 1.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M9 9.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0M7.5 9a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M5 9.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0M3.5 9a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M3 11.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m2.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m1.5.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m2.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1" clip-rule="evenodd" /></svg>
                            <div className='font-bold'>{date}</div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <input type="checkbox" className="w-7 h-7 hover:scale-105 duration-300   accent-gray-300 hover:accent-gray-400 border-none rounded cursor-pointer" checked={checked} />
                    </div>
                </div>

                <div className='bg-[#DB4437]  w-4 h-auto'>

                </div>

            </div>
        </>
    )
}



Task.propTypes = {
    title: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    checked: PropTypes.bool,
}


