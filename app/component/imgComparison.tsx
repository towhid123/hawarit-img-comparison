// "use client"
// import React, { useState } from 'react';
// import { ImgComparisonSlider } from '@img-comparison-slider/react';
// import Image from "next/image";

// // Import images
// import BeforeImage1 from "../data/input_images/14.png";
// import AfterImage1 from "../data/output_images/14.png";
// import BeforeImage2 from "../data/input_images/16.png";
// import AfterImage2 from "../data/output_images/16.png";

// const ImgComparison = () => {
//     // State to manage current images
//     const [beforeImage, setBeforeImage] = useState(BeforeImage1);
//     const [afterImage, setAfterImage] = useState(AfterImage1);

//     return (
//         <div style={{ width: 700, height:100, margin: 'auto' }}>
//             <ImgComparisonSlider>
//                 <Image 
//                     slot="first" 
//                     src={beforeImage} 
//                     alt="Before Image" 
//                     // layout="responsive" 
//                     // width={1920} 
//                     // height={1440}
//                 />
//                 <Image 
//                     slot="second" 
//                     src={afterImage}
//                     alt="After Image" 
//                     // layout="responsive" 
//                     // width={1440} 
//                     // height={1440}
//                 />
//             </ImgComparisonSlider>

//             {/* Thumbnails as buttons to change images */}
//             <div style={{ marginTop: '20px', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
//                 <div 
//                     onClick={() => {
//                         setBeforeImage(BeforeImage1);
//                         setAfterImage(AfterImage1);
//                     }} 
//                     style={{ cursor: 'pointer', marginRight: '10px' }}
//                 >
//                     <Image 
//                         src={BeforeImage1} 
//                         alt="Compare Set 1" 
//                         width={40} 
//                         height={25} // Thumbnail size
//                         layout="fixed"
//                     />
//                 </div>

//                 <div 
//                     onClick={() => {
//                         setBeforeImage(BeforeImage2);
//                         setAfterImage(AfterImage2);
//                     }} 
//                     style={{ cursor: 'pointer' }}
//                 >
//                     <Image 
//                         src={BeforeImage2} 
//                         alt="Compare Set 2" 
//                         width={40} 
//                         height={25} // Thumbnail size
//                         layout="fixed"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ImgComparison;

// "use client"
// import React, { useState } from 'react';
// import { ImgComparisonSlider } from '@img-comparison-slider/react';
// import Image from "next/image";

// // Import images
// import BeforeImage1 from "../data/input_images/14.png";
// import AfterImage1 from "../data/output_images/14.png";
// import BeforeImage2 from "../data/input_images/16.png";
// import AfterImage2 from "../data/output_images/16.png";
// import BeforeImage3 from "../data/input_images/5.png";
// import AfterImage3 from "../data/output_images/5.png";
// import BeforeImage4 from "../data/input_images/4.png";
// import AfterImage4 from "../data/output_images/4.png";
// import BeforeImage5 from "../data/input_images/3.png";
// import AfterImage5 from "../data/output_images/3.png";
// import BeforeImage6 from "../data/input_images/2.png";
// import AfterImage6 from "../data/output_images/2.png";

// const ImgComparison = () => {
//     // State to manage current images
//     const [beforeImage, setBeforeImage] = useState(BeforeImage1);
//     const [afterImage, setAfterImage] = useState(AfterImage1);

//     return (
//         <div style={{ width: '700px', margin: 'auto' }}>
//             {/* Gorgeous Heading */}
//             <h1 style={{ textAlign: 'center', fontSize: '36px', color: '#4A90E2', fontWeight: 'bold', marginBottom: '20px' }}>
//                 Cloud Shadow Removal: Input & Output Comparison
//             </h1>

//             {/* Image Comparison Headings */}
//             <div style={{ position: 'relative' }}>
//                 <ImgComparisonSlider>
//                     <Image 
//                         slot="first" 
//                         src={beforeImage} 
//                         alt="Before Image"
//                         width={700} // Set desired width
//                         height={100} // Set desired height
//                         style={{ objectFit: 'cover' }} // Adjust how the image fits
//                         // layout="responsive"
//                     />
//                     <Image 
//                         slot="second" 
//                         src={afterImage}
//                         alt="After Image"
//                         width={700} // Set desired width
//                         height={100} // Set desired height
//                         style={{ objectFit: 'cover' }} // Adjust how the image fits
//                         // layout="responsive"
//                     />
//                 </ImgComparisonSlider>

//                 {/* Input Image Label */}
//                 <span style={{
//                     position: 'absolute', 
//                     left: '20px', 
//                     top: '50%', 
//                     transform: 'translateY(-50%)', 
//                     fontSize: '24px', 
//                     color: '#FFFFFF', 
//                     backgroundColor: '#00000080', 
//                     padding: '5px 10px', 
//                     borderRadius: '5px'
//                 }}>
//                     Input Image
//                 </span>

//                 {/* Output Image Label */}
//                 <span style={{
//                     position: 'absolute', 
//                     right: '20px', 
//                     top: '50%', 
//                     transform: 'translateY(-50%)', 
//                     fontSize: '24px', 
//                     color: '#FFFFFF', 
//                     backgroundColor: '#00000080', 
//                     padding: '5px 10px', 
//                     borderRadius: '5px'
//                 }}>
//                     Output Image
//                 </span>
//             </div>

//             {/* Thumbnails as buttons to change images */}
//             <div style={{ marginTop: '20px', textAlign: 'center', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
//                 {[ 
//                     { before: BeforeImage1, after: AfterImage1 },
//                     { before: BeforeImage2, after: AfterImage2 },
//                     { before: BeforeImage3, after: AfterImage3 },
//                     { before: BeforeImage4, after: AfterImage4 },
//                     { before: BeforeImage5, after: AfterImage5 },
//                     { before: BeforeImage6, after: AfterImage6 },
//                 ].map((set, index) => (
//                     <div 
//                         key={index} 
//                         onClick={() => {
//                             setBeforeImage(set.before);
//                             setAfterImage(set.after);
//                         }} 
//                         style={{ cursor: 'pointer', margin: '10px' }}
//                     >
//                         <Image 
//                             src={set.before} 
//                             alt={`Compare Set ${index + 1}`} 
//                             width={40} 
//                             height={10} // Thumbnail size
//                             layout="fixed"
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default ImgComparison;



"use client"
import React, { useState } from 'react';
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import Image from "next/image";
import "../assests/sliderDesign.css";
import "../assests/img_name.css";


// Import images

import BeforeImage20 from "../data/input_images/original_1st_resized.jpg";
import AfterImage20 from "../data/output_images/enhanced_original_1st_(4096, 5492).jpg";
import BeforeImage21 from "../data/input_images/original_2nd_resized.jpg";
import AfterImage21 from "../data/output_images/enhanced_original_2nd_(4096, 5492).jpg";
import BeforeImage22 from "../data/input_images/original_3rd_resized.jpg";
import AfterImage22 from "../data/output_images/enhanced_original_3rd_(4096, 5492).jpg";
import BeforeImage23 from "../data/input_images/original_4th_resized.jpg";
import AfterImage23 from "../data/output_images/enhanced_original_4th_(5492,4096).jpg";
import BeforeImage24 from "../data/input_images/original_1st_resized.jpg";
import AfterImage24 from "../data/output_images/k_output_1st_resized.jpg";
import BeforeImage25 from "../data/input_images/original_2nd_resized.jpg";
import AfterImage25 from "../data/output_images/k_output_2nd_resized.jpg";
import BeforeImage26 from "../data/input_images/original_3rd_resized.jpg";
import AfterImage26 from "../data/output_images/k_output_3rd_resized.jpg";
import BeforeImage27 from "../data/input_images/original_4th_resized.jpg";
import AfterImage27 from "../data/output_images/k_output_4th_resized.jpg";






// const ImgComparison = () => {




//     // State to manage current images
//     const [beforeImage, setBeforeImage] = useState(BeforeImage20);
//     const [afterImage, setAfterImage] = useState(AfterImage20);
//     // const [beforeImage, setBeforeImage] = useState("https://via.placeholder.com/1440x1440");
//     // const [afterImage, setAfterImage] = useState("https://via.placeholder.com/1440x1440");

//     return (
//         <div className="flex flex-col items-center p-4">
//             {/* Header Section */}



//             {/* Image Comparison Slider */}
//             <div className="relative w-full max-w-7xl mx-auto mb-1 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] 2xl:h-[750px]">
//                 <ImgComparisonSlider className="absolute inset-0">
//                     {/* First Image */}
//                     <figure slot="first" className="before w-full h-full">
//                         <Image
//                             slot="first"
//                             src={beforeImage}
//                             alt="Before Image"
//                             layout="responsive"
//                             width={1440}
//                             height={1440}
//                             className="w-full h-full object-contain rounded-lg img1 relative" // Keep aspect ratio, no cropping
//                         />
//                         <figcaption className="text-center Beforeshadow">Shadow Image</figcaption>
//                     </figure>

//                     {/* Second Image */}
//                     <figure slot="second" className="after w-full h-full">
//                         <Image
//                             slot="second"
//                             src={afterImage}
//                             alt="After Image"
//                             layout="responsive"
//                             width={1440}
//                             height={1440}
//                             className="w-full h-full object-contain rounded-lg relative" // Keep aspect ratio, no cropping
//                         />
//                         <figcaption className="text-center aftershadow">Shadow Free Image</figcaption>
//                     </figure>
//                 </ImgComparisonSlider>
//             </div>
//             {/* Thumbnail Image Gallery */}
//             <div className="mt-8 flex justify-center flex-wrap gap-4">
//                 {[
//                     { before: BeforeImage20, after: AfterImage20 },
//                     { before: BeforeImage21, after: AfterImage21 },
//                     { before: BeforeImage22, after: AfterImage22 },
//                     { before: BeforeImage23, after: AfterImage23 },
//                     { before: BeforeImage24, after: AfterImage24 },
//                     { before: BeforeImage25, after: AfterImage25 },
//                     { before: BeforeImage26, after: AfterImage26 },
//                     { before: BeforeImage27, after: AfterImage27 },
//                 ].map((set, index) => (
//                     <div
//                         key={index}
//                         onClick={() => {
//                             setBeforeImage(set.before);
//                             setAfterImage(set.after);
//                         }}
//                         className="cursor-pointer p-1 border border-gray-300 hover:border-blue-500 rounded-md transition duration-200 ease-in-out"
//                     >
//                         <Image
//                             src={set.before}
//                             alt={`Compare Set ${index + 1}`}
//                             width={40}
//                             height={15}
//                             className="object-contain rounded-sm hover:opacity-80 transition-opacity"
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

const imageSets = [
    { name: "Image 1-HawarIT AI Enhanced Output", before: BeforeImage20, after: AfterImage20 },
    { name: "Image 2-HawarIT AI Enhanced Output", before: BeforeImage21, after: AfterImage21 },
    { name: "Image 3-HawarIT AI Enhanced Output", before: BeforeImage22, after: AfterImage22 },
    { name: "Image 4-HawarIT AI Enhanced Output", before: BeforeImage23, after: AfterImage23 },
    { name: "Image 1-Fast-video Shadow Removal Output", before: BeforeImage24, after: AfterImage24 },
    { name: "Image 2-Fast-video Shadow Removal Output", before: BeforeImage25, after: AfterImage25 },
    { name: "Image 3-Fast-video Shadow Removal Output", before: BeforeImage26, after: AfterImage26 },
    { name: "Image 4-Fast-video Shadow Removal Output", before: BeforeImage27, after: AfterImage27 },
];

const ImgComparison = () => {
    const [beforeImage, setBeforeImage] = useState(BeforeImage20);
    const [afterImage, setAfterImage] = useState(AfterImage20);
    const [selectedImageName, setSelectedImageName] = useState("Image 1-HawarIT AI Enhanced Output");

    return (
        <div className="flex flex-col items-center p-4">
            {/* Image name header */}
            <h2 className="text-lg font-semibold text-center mb-4">{selectedImageName}</h2>

            {/* Image Comparison Slider */}
            <div className="relative w-full max-w-7xl mx-auto mb-1 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] 2xl:h-[750px]">
                <ImgComparisonSlider className="absolute inset-0">
                    <figure slot="first" className="before w-full h-full">
                        <Image
                            slot="first"
                            src={beforeImage}
                            alt="Before Image"
                            layout="responsive"
                            width={1440}
                            height={1440}
                            className="w-full h-full object-contain rounded-lg img1 relative"
                        />
                        <figcaption className="text-center Beforeshadow">Shadow Image</figcaption>
                    </figure>
                    <figure slot="second" className="after w-full h-full">
                        <Image
                            slot="second"
                            src={afterImage}
                            alt="After Image"
                            layout="responsive"
                            width={1440}
                            height={1440}
                            className="w-full h-full object-contain rounded-lg relative"
                        />
                        <figcaption className="text-center aftershadow">Shadow Free Image</figcaption>
                    </figure>
                </ImgComparisonSlider>
            </div>

            {/* Thumbnail Gallery */}
            <div className="mt-8 flex justify-center flex-wrap gap-4">
                {imageSets.map((set, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            setBeforeImage(set.before);
                            setAfterImage(set.after);
                            setSelectedImageName(set.name);
                        }}
                        className="cursor-pointer p-1 border border-gray-300 hover:border-blue-500 rounded-md transition duration-200 ease-in-out"
                    >
                        <Image
                            src={set.before}
                            alt={`Compare Set ${index + 1}`}
                            width={40}
                            height={15}
                            className="object-contain rounded-sm hover:opacity-80 transition-opacity"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}


export default ImgComparison;
