import ImgComparison from "./component/imgComparison";

import Header from './component/header'; 

export default function Home() {
  return (
    <div>
      <Header />

      {/* <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-8 text-center">
        Cloud Shadow Removal: Input & Output Comparison
      </h1> */}

      <ImgComparison />
    

      {/* <Footer /> */}
    </div>
  );
}
