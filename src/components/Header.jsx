import React, { useState } from 'react';

const Header = ({section3Ref, section2Ref, section4Ref, scrollToSection}) => {
    const [isBurger, setIsBurger] = useState(false)

    const openModal = () => {
    setIsBurger(true);
    document.body.style.overflow = 'hidden'; 
    };

    function timeScroll1() {
        setTimeout(()=>{scrollToSection(section4Ref)},0)
    }

    function timeScroll2() {
        setTimeout(()=>{scrollToSection(section2Ref)},0)
    }

    function timeScroll3() {
        setTimeout(()=>{scrollToSection(section3Ref)},0)
    }
    const link1 = () => {
        timeScroll1()
        setIsBurger(false);
        document.body.style.overflow = 'auto'; 
    };
    
    const link2 = () => {
        timeScroll2()
        setIsBurger(false);
        document.body.style.overflow = 'auto'; 
    };

    const link3 = () => {
        timeScroll3()
        setIsBurger(false);
        document.body.style.overflow = 'auto'; 
    };
    const closeModal = () => {
    setIsBurger(false);
    document.body.style.overflow = 'auto'; 
    };
    
    return (
        <div className="backImg w-full h-full relative z-20">
            {
                isBurger ?
                    <div className="fixed top-0 left-0 bg-white w-full h-full z-50">
                        <svg className="w-7 h-7 absolute right-4 top-6" onClick={closeModal} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" fill="white"/>
                            <path d="M7 17L16.8995 7.10051" stroke="#6D746C" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7 7.00001L16.8995 16.8995" stroke="#6D746C" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <ul className="py-16 px-4 flex flex-col gap-3">
                            <li onClick={link1} className="text-[#6D746C] text-lg">Ваш ответ</li>
                            <li onClick={link2} className="text-[#6D746C] text-lg">Узнать детали</li>
                            <li onClick={link3} className="text-[#6D746C] text-lg">Дресс код</li>
                        </ul>
                    </div>
                    :
                    null
            }
            <div className="absolute left-0 top-0 bg-white opacity-80 w-full h-full z-10"></div>
            <div className="relative z-20 py-6 pr-4 flex justify-end md:hidden">
                <svg onClick={openModal} className="w-6 h-6 text-[#6D746C]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <ul className="relative z-20 container  hidden md:flex justify-end gap-4 py-6">
                <li><p onClick={link1} className="font-lato text-[#6D746C] text-lg hover:opacity-80 cursor-pointer">Ваш ответ</p></li>
                <li><p onClick={link2} className="font-lato text-[#6D746C] text-lg hover:opacity-80 cursor-pointer">Узнать детали</p></li>
                <li><p onClick={link3} className="font-lato text-[#6D746C] text-lg hover:opacity-80 cursor-pointer">Дресс код</p></li>
            </ul>
            <div className="relative z-20 flex items-start sm:items-center lg:items-start container flex-col lg:flex-row justify-center gap-10 py-12 md:py-28 w-full h-full">
                <div className="relative firstBlock">
                    <img className="object-cover rounded-2xl w-full h-full" src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="Image" />
                    <img className="absolute blockImg2 top-16 -left-14 firstTwo object-cover rounded-2xl" src="https://images.unsplash.com/photo-1527628173875-3c7bfd28ad78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="image" />
                    <img className="absolute blockImg3 -bottom-14 right-10 firstTwo object-cover rounded-2xl" src="https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" alt="image" />
                    <svg width="80" height="80" className="absolute text-[#6D746C] rot-line -bottom-10 -left-20 svgIcon" viewBox="0 0 109 104" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M108.069 8.19489C107.736 8.63492 107.108 8.72108 106.668 8.38732C99.1908 2.71584 89.2798 0.381478 79.6987 3.32933C75.1804 4.71948 70.6981 7.29667 66.5577 11.3002C67.584 12.4895 68.5682 13.7897 69.5044 15.204C76.5789 25.8914 78.2336 34.8353 76.789 41.6267C75.344 48.4205 70.8192 52.9249 65.8469 54.6969C60.8976 56.4607 55.3679 55.5339 52.1863 51.2533C49.0269 47.0026 48.4661 39.8148 52.5332 29.6446C55.6409 21.8732 59.499 15.8072 63.8013 11.246C57.5928 4.82745 50.0197 2.48493 42.3588 3.29494C32.8817 4.29697 23.1421 10.1429 15.6385 19.3965C0.973899 37.4815 -4.98611 68.4127 16.5367 100.393L17.6379 93.9417C17.7308 93.3973 18.2474 93.0313 18.7918 93.1242C19.3363 93.2171 19.7023 93.7338 19.6093 94.2782L18.095 103.15C18.0021 103.694 17.4855 104.06 16.941 103.967L8.06935 102.453C7.52495 102.36 7.15895 101.843 7.25187 101.299C7.34479 100.755 7.86145 100.389 8.40587 100.482L14.9357 101.596C-7.14435 68.8595 -1.14932 36.9245 14.0851 18.1368C21.8369 8.57702 32.0239 2.37652 42.1485 1.30602C50.4329 0.430097 58.5901 3.00164 65.2073 9.82357C69.5397 5.64436 74.2718 2.90653 79.1105 1.41777C89.3704 -1.73891 99.9419 0.775331 107.877 6.79383C108.317 7.12758 108.403 7.75486 108.069 8.19489ZM65.1503 12.7308C61.0819 17.0748 57.3923 22.8799 54.3902 30.3872C50.4287 40.2936 51.2435 46.6321 53.7915 50.0602C56.3173 53.4584 60.8266 54.3628 65.1755 52.813C69.5014 51.2713 73.5339 47.3173 74.8328 41.2106C76.1322 35.1014 74.7174 26.7026 67.8366 16.3079C66.9796 15.0132 66.0826 13.822 65.1503 12.7308Z"></path>
                    </svg>
                </div>
                <div className="flex flex-col items-center justify-center mt-16 w-full sm:w-auto">
                    <p  className="font-lato text-[#6D7561] text-2xl text-center">Приглашаем на нашу свадьбу</p>
                    <h1 className="text-3xl md:text-5xl font-pacif font-bold text-[#6D7561] mt-10 text-center">Чынгыз и Мээрим</h1>
                    <div className="hover:opacity-80 flex items-center mt-10">
                        <p onClick={link1} className="font-lato text-[#6D7561] text-lg cursor-pointer">Просьба ответьте</p>
                        <svg className="w-5 h-5 text-[#6D7561] mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 7L15 12L10 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div className="relative secondBlock">
                    <img className="w-full h-full object-cover rounded-2xl" src="https://images.unsplash.com/photo-1543899161-d044e847c40f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="Image" />
                    <img className="absolute top-28 blockImg1 -right-20 w-40 sm:w-52 h-40 sm:h-52 object-cover rounded-2xl" src="https://plus.unsplash.com/premium_photo-1675549150555-8bfc95275a2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="image" />
                    <p className="font-lato text-[#6D7561] text-2xl absolute -bottom-10 text_second opacity-90">И так приключение начинается</p>
                </div>
            </div>
        </div>
    );
};

export default Header;