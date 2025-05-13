import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mensKurta } from "../../../Data/MensKurta";






const HomePage =()=>{
    return(
        <div>
            <MainCarousel/>
            <div className="'space-y-10 py-20  flex flex-col px-10 lg:px-10">
                <HomeSectionCarousel data={mensKurta} sectionName={"Men's Kurta"}/>
                <HomeSectionCarousel data={mensKurta}   sectionName={"Men's shoes"}/>
                  <HomeSectionCarousel data={mensKurta}  sectionName={"Men'Shirt"}/>
                  <HomeSectionCarousel data={mensKurta} sectionName={"Women's saree"}/>
                <HomeSectionCarousel data={mensKurta} sectionName={"women's dress"}/>
                     

            </div>
        </div>
    )
}
export default HomePage;
