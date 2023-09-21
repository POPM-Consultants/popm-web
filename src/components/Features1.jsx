import { motion } from "framer-motion";

import feature1 from "../assets/images/feature1.jpg";
import feature2 from "../assets/images/feature2.jpg";
import feature3 from "../assets/images/feature3.jpg";
import feature4 from "../assets/images/feature4.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import ServiceCard from "./services-card.jsx";
import logo from "../assets/logos/logo.png";

export const Features1 = () => {
  return (
    <section
      className="w-full bg-customDarkBg2 mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-0  xl:m pt-[2rem]  md:pt-[12vw] lg:pt-0"
      id="Services" 
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        
      >
<div className="flex flex-wrap justify-center items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
  <div className="w-full lg:w-3/2 mb-12 lg:mb-0 ">
    <div className="mx-auto lg:mx-auto w-full sm:w-4/5 md:w-3/4 lg:w-unset text-center ">
      {/* Added w-full class to stretch the content horizontally */}
      <span className="custom-block-subtitle">Our Services</span>
      <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
        Where creativity meets strategy
      </h2>
      <p className="mb-10 text-customGrayText leading-loose">
        Our range of services is designed to amplify your brand's
        presence and impact in the digital world. From captivating web
        designs to dynamic ad campaigns, we offer a comprehensive suite
        of solutions tailored to your needs.<br/>
        Explore our services below and discover the possibilities!!
      </p>
    </div>
  </div>
</div>


        <div className="services-section">
          <ServiceCard
            logo={logo}
            title="Web Design"
            description="We'll help you create a website that will make your brand stand out."
          ></ServiceCard>
          <ServiceCard
            logo={logo}
            title="Product Shoot"
            description="Capture the essence of your product with our picture-perfect shoots."
          ></ServiceCard>
          <ServiceCard
            logo={logo}
            title="Ad Campaign"
            description="We'll help you create a campaign that will make your brand stand out."
          ></ServiceCard>
        </div>
      </motion.div>
    </section>
  );
};
