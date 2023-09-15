import React from 'react';

const ModalSuccess = ({closeSuccess}) => {
    return (
        <div className="fixed top-0 left-0 bg-black/30 w-full h-full flex items-center justify-center ">
            <div className="bg-[#FCFBFD] p-10 flex flex-col items-center rounded-xl">
                <p className="text-[] text-lg font-pacif font-medium">До скорой встречи на свадьбе!):</p>
                <button onClick={closeSuccess} className="btn-invite py-3 px-14 rounded-md text-white text-lg hover:bg-[#A7B3A3] mt-4">До скорой</button>
            </div>
        </div>
    );
};

export default ModalSuccess;