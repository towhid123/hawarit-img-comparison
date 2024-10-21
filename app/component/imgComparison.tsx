"use client"
import React from 'react';
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import BeforeImage from "../data/_MG_2371.jpg"
import AfterImage from "../data/_MG_2371_free.jpg"
import Image from "next/image";
const ImgComparison = () => {
    return (
        <div style={{ width: '80%', margin: 'auto' }}>
            <ImgComparisonSlider>
                <Image 
                slot="first" 
                src={BeforeImage} 
                alt="Before Image" 
                layout="responsive" 
                width={600} 
                height={400}
                />
                <Image 
                slot="second" 
                src={AfterImage}
                alt="After Image" 
                layout="responsive" 
                width={600} 
                height={400}
                />
            </ImgComparisonSlider>
        </div>
    );
}

export default ImgComparison;
