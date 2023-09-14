import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './share/Form';
import MainPage from './layout/MainPage';

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;