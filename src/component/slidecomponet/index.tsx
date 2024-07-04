import React, { useState } from 'react'

export default function SlideComponent() {

    const images = [
        '\Frame 8.png',
        '\Frame 9.png',
        '\Frame 10.png'
    ]


    const [currentIndex, setCurrentIndex] = useState(0);
    const goPrevious = () => {
        const firstSlid = currentIndex === 0;
        const newIndex = firstSlid ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const goNext = () => {
        const lastSlide = currentIndex === images.length - 1;
        const newIndex = lastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    return (
        <div className='carousal'>
            <div className='left-arrow' onClick={goPrevious} >&#9654;

            </div>
            <div className='right-arrow' onClick={goNext} >&#9654;

            </div>
            <div className='crl-images'
                style={{ transform: `translateX(${-currentIndex * (100 / 3)}%)` }}
            >
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Slide ${index}`} className='crl-image' />
                ))}
            </div>
        </div>
    )
}
