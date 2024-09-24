import React from 'react';
import Lottie from 'react-lottie-player';
import animationData from '@/public/Animation.json';
import '@/app/globals.css';

const LottieAnimation = () => {


    return (
        <div className='w-1/3 mx-auto flex flex-col'>
                <Lottie loop
                    animationData={animationData}
                    play />
        </div>
    );
};

export default LottieAnimation;