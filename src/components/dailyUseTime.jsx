import { BarChart } from '@mui/x-charts/BarChart';

export default function DailyUseTime({ title, subtitle }) {

    return (
        <div className='shadow-xl  md:p-8 flex flex-col  w-full'>

            <div className='w-full p-8 lg:p-0'>
                <h2 className='text-3xl'>{title}</h2>
                <p className='font-bold text-2xl'>{subtitle}</p>
            </div>
            <div className='w-full '>
                <BarChart
                    series={[
                        { data: [4, 4, 4, 3, 2, 1, 3] },

                    ]}
                    height={250}
                    borderRadius={10}
                    xAxis={[{ data: ['L', 'K', 'M', 'J', 'V', 'S', 'D'], scaleType: 'band' }]}
                />
            </div>
        </div>
    )
}