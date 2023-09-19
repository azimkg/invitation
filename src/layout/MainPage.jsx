import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Details from '../components/Details';
import Timer from '../components/Timer';
import DressCode from '../components/DressCode';
import FormsForInvite from '../components/FormsForInvite';
import Footer from '../components/Footer';
import Music from '../share/Music';

const MainPage = () => {
    const targetDate = new Date("2023-10-11T17:00:00").getTime();
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);


    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="overflow-hidden">
            <Header section4Ref={section4Ref} scrollToSection={scrollToSection} section3Ref={section3Ref} section2Ref={section2Ref}/>
            <Details section2Ref={section2Ref} />
            <Timer targetDate={targetDate} />
            <DressCode section3Ref={section3Ref} />
            <FormsForInvite section1Ref={section1Ref} section4Ref={section4Ref} scrollToSection={scrollToSection} />
            <Footer />
            <Music/>
        </div>
    );
};

export default MainPage;