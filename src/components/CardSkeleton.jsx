import React, { useContext } from 'react'
import { WeatherContext } from '../context';
import '../assets/style.css'

const CardSkeleton = () => {
    const { data } = useContext(WeatherContext);

    return (
        <section>
            {/* Weather overview */}
            <div className='flex flex-col items-center py-12'>
                <h1 className='text-4xl mb-2'>{data.location.name}</h1>
                <p className='text-sm mb-12'>{new Date(data.location.localtime).toLocaleDateString('en-Us',
                    {
                        weekday: 'short',
                        day: '2-digit',
                        month: 'long',
                    })} &nbsp;
                    {new Date(data.location.localtime).toLocaleTimeString('en-Us',
                        {
                            hour: '2-digit',
                            minute: '2-digit'
                        })}


                </p>

                <p className='text-8xl mb-8'>
                    {Math.round(data.current.temp_c)}&#8451;
                </p>
                <div className='text-center'>
                    <p>
                        Feels like {Math.round(data.current.feelslike_c)}&#8451;
                    </p>
                    <p className='capitalize'>
                        {data.current.condition.text}
                    </p>
                    <img className='w-[85px] h-auto my-8' src={data.current.condition.icon} />
                </div>

            </div>
            <hr className='border-white border-opacity-10 border w-full' />
            {/* Hourly forecast */}
            <div className=' max-w-screen-md w-full  mx-72 py-12'>
                <div className='mx-6'>
                    <h2 className='mb-4'>Hourly Forecast</h2>
                    <div className='flex gap-10 overflow-x-scroll no-scrollbar'>{data.forecast
                        .forecastday[0].hour.map((mappedData, id) => {

                            return (
                                <div key={id} className='flex flex-col gap-5 items-center'>
                                    <p className='whitespace-nowrap text-md '>
                                        {new Date(mappedData.time).toLocaleTimeString('en-Us',
                                            {
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}</p>
                                    <img className='w-auto h-[50px] object-cover' src={mappedData.condition.icon} alt='image' />
                                    <p className='text-xl' >{Math.round(mappedData.temp_c)}&#8451;</p>
                                </div>
                            )
                        })}</div>
                </div>
            </div>
            <hr className='border-white border-opacity-10 border w-full' />
            {/* 3 Days Forecast */}
            <div className='max-w-screen-md w-full mx-72 py-12'>
                <div className='mx-8'>
                    <h2 className='mb-4'>3 Day Forecast</h2>
                    <div className='flex flex-col'>
                        {data.forecast.forecastday.map((dayData, id) => {
                            return (
                                <div key={id} className='flex flex-row items-center' >
                                    <p className=' basis-full'>{new Date(dayData.date).toLocaleDateString('en-us',
                                        {
                                            weekday: 'long',
                                        })}</p>
                                        <div className=' basis-full'>
                                    <img className='w-[50px] h-[50px]  object-center object-cover' src={dayData.day.condition.icon} alt='image' />
                                    </div>
                                    <div className='flex gap-9 basis-3/5'>
                                        <p>H: {Math.round(dayData.day.maxtemp_c)}&#8451;</p>
                                        <p>L: {Math.round(dayData.day.mintemp_c)}&#8451;</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </section >
    )

}

export default CardSkeleton