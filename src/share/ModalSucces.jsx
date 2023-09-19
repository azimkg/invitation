import React from 'react';

const ModalSuccess = ({ setModal, closeModal, name, surname, partner}) => {
    
    const closeSuccess = () => {
        setModal(false)
        closeModal(false)
        saveData();
    }

    const saveData = async () => {
        const data = {
            name,
            surname,
            partner
        }

        fetch('https://script.google.com/macros/s/AKfycbw4TStx_mIrgjzXf0bQMF2QpreU4Cp9lVZNk-e-ymvjcVHwut_tsr_b34ljVP37ltbHSw/exec', {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(data),
        });
    }
    return (
        <div className="fixed top-0 left-0 bg-black/30 w-full h-full flex items-center justify-center ">
            <div className="bg-[#FCFBFD] p-10 flex flex-col items-center rounded-xl">
                <p className="text-[] text-lg font-pacif font-medium">До скорой встречи на свадьбе!):</p>
                <button onClick={closeSuccess} className="btn-invite py-3 px-14 rounded-md text-white text-lg hover:bg-[#A7B3A3] mt-4">
                    Обязательно
                </button>
            </div>
        </div>
    );
};

export default ModalSuccess;