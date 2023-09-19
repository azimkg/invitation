import React, { useState } from 'react';
import Form from '../share/Form';

const FormsForInvite = ({section1Ref, scrollToSection, section4Ref}) => {
    const [isForm, setIsForm] = useState(false)

    function timeScroll() {
        setTimeout(()=>{scrollToSection(section1Ref)},0)
    }

    const openForm = () => {
        setIsForm(true);
        timeScroll()
    };
    
    const closeModal = () => {
        setIsForm(false);
    };
    return (
        <>
        <div ref={section4Ref} className="bg-detail py-14 relative z-20 flex items-center justify-center">
            <div className="bg-grad flex flex-col items-center gap-4 p-10 sm:p-20 rounded-2xl shadow-2xl">
                <p className="text-[#656C64] text-2xl">
                    Вы придете?
                </p>
                <h2 className="text-[#656C64] text-4xl font-bold font-pacif texter">Чынгыз и Мээрим</h2>
                <p className="text-[#656C64] text-lg">Просьба ответить до 1 октября.</p>
                <p className="text-[#656C64] text-lg">11.10.2023 | 17:00</p>
                <button onClick={openForm} className="btn-invite py-3 px-14 rounded-md text-white text-lg hover:bg-[#A7B3A3]">Ответить</button>
            </div>
        </div>
            {isForm ? <Form closeModal={closeModal} section1Ref={section1Ref} />:null}
        </>
    );
};

export default FormsForInvite;