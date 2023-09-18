import React from 'react';

const DressCode = ({section3Ref}) => {
    return (
        <div ref={section3Ref} className="relative">
            <div className="bg-love  fixed z-0 top-0 left-0 w-full h-screen"></div>
            <div className="my-16 py-12 relative z-20 bg-mask bg-[#6D726C]">
                <p className="text-[#B5B8B4] container font-pacif font-medium text-xl sm:text-2xl text-center mb-2">Аруу сезим, бирге болуп оюбуз,</p>
                <p className="text-[#B5B8B4] container font-pacif font-medium text-xl sm:text-2xl text-center mb-2">Ак ниетте өтсүн дейбиз тоюбуз.</p>
                <p className="text-[#B5B8B4] container font-pacif font-medium text-xl sm:text-2xl text-center mb-2">Ата салтын уланталы түбөлүк,</p>
                <p className="text-[#B5B8B4] container font-pacif font-medium text-xl sm:text-2xl text-center mb-2">Ак жол тилеп, бата берип коюңуз.</p>
                <h2 className="text-4xl tracking-[3px] text-white container font-pacif font-semibold leading-loose text-center">Урматтуу коноктор!</h2>
                <h2 className="text-4xl tracking-[3px] text-white container font-pacif leading-loose text-center">
                    Сиздерди 2023-жылдын 11-октябрь күнү саат 17:00дө боло турган үйлөнүү тоюбузга арналган салтанатка келип, кадырлуу коногубуз болуп кетүүгө чакырабыз!
                </h2>
            </div>
        </div>
    );
};

export default DressCode;