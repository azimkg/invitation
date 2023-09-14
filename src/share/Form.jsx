import React, { useState } from 'react';
import ModalSucces from './ModalSucces';

const Form = ({ closeModal, section1Ref }) => {
    const [modal, setModal]= useState(false)

    const openSucces = () => {
        setModal(true)
    }

    const closeSucces = () => {
        setModal(false)
        closeModal(false)
    }
    return (
        <div ref={section1Ref} className="relative z-20 bg-[#FCFBFD] flex items-center flex-col justify-center p-10">
            <h2 className="text-xl sm:text-2xl text-[#656C64] font-bold font-pacif text-center sm:tracking-[1px] mb-2 sm:mb-0">Приглашаем вас на нашу свадьбу</h2>
            <p className="pb-10 text-[#656C64]">Укажите ваши данные</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
                <div className="flex flex-col">
                    <label htmlFor="name" className="font-lato text-[#656C64]">Имя <span className="text-red-500">*</span></label>
                    <input type="text" id="name" className="w-80 border h-12 px-3 rounded-lg bg-white" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="name" className="font-lato text-[#656C64]">Фамилия <span className="text-red-500">*</span></label>
                    <input type="text" id="name" className="w-80 border h-12 px-3 rounded-lg bg-white" />
                </div>
            </div>
            <div className="w-80 md:w-[660px]">
                <label htmlFor="morePerson" className="font-lato text-[#656C64]">Кто еще придет с вами?</label>
                <input type="text" id="morePerson" className="w-full border h-12 px-3 rounded-lg bg-white" />
            </div>
            <button onClick={openSucces} className="btn-invite py-3 px-14 rounded-md text-white text-lg hover:bg-[#A7B3A3] mt-4">Я приду</button>
            {
                modal ? <ModalSucces closeSucces={closeSucces} />:null
            }
        </div>
    );
};

export default Form;