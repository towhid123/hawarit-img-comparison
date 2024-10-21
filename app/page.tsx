import Image from "next/image";
import Footer from "./component/footer";
import BeforeImg from "../data/_MG_2371.jpg"
import AfterImg from "../data/_MG_2371_free.jpg"
import ImageSlider from "./component/compareSlider";
import ImgComparison from "./component/imgComparison";
export default function Home() {
  return (
    <div className="">

  {/* 
          <ImageSlider/> */}
         
         <ImgComparison/>

      {/* <Footer/> */}
    </div>
  );
}
