// "use client"
// import React, { useState } from 'react';
// import { ImgComparisonSlider } from '@img-comparison-slider/react';
// import Image from "next/image";
// import "../assests/sliderDesign.css";
// import "../assests/img_name.css";


// // Import images

// import BeforeImage20 from "../data/input_images/original_1st_resized.jpg";
// import AfterImage20 from "../data/output_images/enhanced_original_1st_(4096, 5492).jpg";
// import BeforeImage21 from "../data/input_images/original_2nd_resized.jpg";
// import AfterImage21 from "../data/output_images/enhanced_original_2nd_(4096, 5492).jpg";
// import BeforeImage22 from "../data/input_images/original_3rd_resized.jpg";
// import AfterImage22 from "../data/output_images/enhanced_original_3rd_(4096, 5492).jpg";
// import BeforeImage23 from "../data/input_images/original_4th_resized.jpg";
// import AfterImage23 from "../data/output_images/enhanced_original_4th_(5492,4096).jpg";
// import BeforeImage24 from "../data/input_images/original_1st_resized.jpg";
// import AfterImage24 from "../data/output_images/k_output_1st_resized.jpg";
// import BeforeImage25 from "../data/input_images/original_2nd_resized.jpg";
// import AfterImage25 from "../data/output_images/k_output_2nd_resized.jpg";
// import BeforeImage26 from "../data/input_images/original_3rd_resized.jpg";
// import AfterImage26 from "../data/output_images/k_output_3rd_resized.jpg";
// import BeforeImage27 from "../data/input_images/original_4th_resized.jpg";
// import AfterImage27 from "../data/output_images/k_output_4th_resized.jpg";






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

// export default ImgComparison;