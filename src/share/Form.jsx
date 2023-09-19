import React, { useState } from 'react';
import ModalSuccess from './ModalSucces';

const Form = ({ closeModal, section1Ref }) => {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [partner, setPartner] = useState('');
    const [whoAreYou, setWhoAreYou] = useState('');
    const [isNameEmpty, setIsNameEmpty] = useState(false);
    const [isSurnameEmpty, setIsSurnameEmpty] = useState(false);

    const openSuccess = () => {
        if (name && surname) {
            setModal(true);
        }

        setIsNameEmpty(!name);
        setIsSurnameEmpty(!surname);
    }

    return (
        <div
            ref={section1Ref}
            className="relative z-20 bg-[#FCFBFD] flex items-center flex-col justify-center p-10"
        >
            <h2 className="text-xl sm:text-2xl text-[#656C64] font-bold font-pacif text-center sm:tracking-[1px] mb-2 sm:mb-0">
                Приглашаем вас на нашу свадьбу
            </h2>
            <p className="pb-10 text-[#656C64]">
                Укажите ваши данные
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
                <div className="flex flex-col">
                    <label
                        htmlFor="name"
                        className="font-lato text-[#656C64]"
                    >
                        Имя
                        <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        className={`w-80 border h-12 px-3 rounded-lg bg-white ${isNameEmpty ? "border border-red-500" : ""}`}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label
                        htmlFor="surname"
                        className="font-lato text-[#656C64]"
                    >
                        Фамилия
                        <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="surname"
                        className={`w-80 border h-12 px-3 rounded-lg bg-white ${isSurnameEmpty ? "border border-red-500" : ""}`}
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                </div>
            </div>
            <div className="w-80 md:w-[660px] mb-4">
                <label
                    htmlFor="morePerson"
                    className="font-lato text-[#656C64]"
                >
                    Кто еще придет с вами?
                </label>
                <input
                    type="text"
                    id="morePerson"
                    className="w-full border h-12 px-3 rounded-lg bg-white"
                    value={partner}
                    onChange={(e) => setPartner(e.target.value)}
                />
            </div>
            <div className="w-80 md:w-[660px]">
                <label
                    htmlFor="whoAreYou"
                    className="font-lato text-[#656C64]"
                >
                    Кем вы приходитесь моложоденам?
                </label>
                <input
                    type="text"
                    id="whoAreYou"
                    className="w-full border h-12 px-3 rounded-lg bg-white"
                    value={whoAreYou}
                    onChange={(e) => setWhoAreYou(e.target.value)}
                />
            </div>
            <button
                onClick={openSuccess}
                className="btn-invite py-3 px-14 rounded-md text-white text-lg hover:bg-[#A7B3A3] mt-4"
            >
                Я приду
            </button>
            {
                modal
                    ? <ModalSuccess
                        closeModal={closeModal}
                        setModal={setModal}
                        name={name}
                        surname={surname}
                        partner={partner}
                        whoAreYou={whoAreYou}
                    />
                    : null
            }
        </div>
    );
};

export default Form;