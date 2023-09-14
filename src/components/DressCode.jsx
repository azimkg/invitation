import React from 'react';

const DressCode = ({section3Ref}) => {
    return (
        <div ref={section3Ref} className="relative">
            <div className="bg-love  fixed z-0 top-0 left-0 w-full h-screen"></div>
            <div className="my-16 py-12 relative z-20 bg-mask bg-[#6D726C]">
                <p className="text-[#B5B8B4] container font-pacif font-medium text-xl sm:text-2xl text-center mb-2">Дресс-код нашей свадебной вечеринки — черные и белые цвета.</p>
                <h2 className="text-4xl tracking-[3px] text-white container font-pacif font-semibold leading-loose text-center">Присоединяйтесь к нам в ваших наилучших нарядах, выразив себя через цвета, которые вас вдохновляют, и подарите этому особенному событию краски вашего стиля!</h2>
            </div>
        </div>
    );
};

export default DressCode;