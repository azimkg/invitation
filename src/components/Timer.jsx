import React, { useEffect, useState } from 'react';

const Timer = ({targetDate}) => {
    const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const padZero = (value) => {
        return value < 10 ? `0${value}` : value;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const interval = setInterval(() => {
        const newTimeLeft = calculateTimeLeft();
        setTimeLeft(newTimeLeft);

        if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
            clearInterval(interval);
        }
    }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

  return (
    <div className="bg-detail relative z-20">
        <div className="flex items-center justify-center py-14 gap-2 sm:gap-4">
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-28 sm:h-24 flex items-center justify-center shadow-2xl bg-white rounded-lg">
                    <span className="text-4xl font-pacif font-bold text-[#6D7561]">{padZero(timeLeft.days)}</span>
                </div>
                <p className="font-lato text-[#6D7561] text-base sm:text-lg mt-4">Дни</p>
            </div>
            <span className="text-4xl font-pacif font-bold text-[#6D7561] mb-12 sm:mb-8">:</span>
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-28 sm:h-24 flex items-center justify-center shadow-2xl bg-white rounded-lg">
                    <span className="text-4xl font-pacif font-bold text-[#6D7561]">{padZero(timeLeft.hours)}</span> 
                </div>
                <p className="font-lato text-[#6D7561] text-base sm:text-lg mt-4">Часы</p>
            </div>
            <span className="text-4xl font-pacif font-bold text-[#6D7561] mb-12 sm:mb-8">:</span>
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-28 sm:h-24 flex items-center justify-center shadow-2xl bg-white rounded-lg">
                    <span className="text-4xl font-pacif font-bold text-[#6D7561]">{padZero(timeLeft.minutes)}</span>
                </div>
                <p className="font-lato text-[#6D7561] text-base sm:text-lg mt-4">Минуты</p>
            </div>
            <span className="text-4xl font-pacif font-bold text-[#6D7561] mb-12 sm:mb-8">:</span>
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-28 sm:h-24 flex items-center justify-center shadow-2xl bg-white rounded-lg">
                    <span className="text-4xl font-pacif font-bold text-[#6D7561]">{padZero(timeLeft.seconds)}</span>
                </div>
                <p className="font-lato text-[#6D7561] text-base sm:text-lg mt-4">Секунды</p>
            </div>
        </div>
    </div>
  );
}

export default Timer;