// import React from "react";
// import "./HIT.css";
// import hitmockup from "../../Assets/mokupHowItWork.png";
// import find from "../../Assets/findphotographer.png";
// import book from "../../Assets/bookphotographer.png";
// import hdr from "../../Assets/receivehdrphoto.png";
// import arrow from "../../Assets/arrow.png";
// import { motion } from "framer-motion";

// const HITSteps = [
//   {
//     title: "Find Photographers",
//     description:
//       "Search Our Nation Wide Marketplace Of Qualified Real Estate Photographers using Our Ai Powered Capture And Editing Solution.",
//     ctaText: "Get Started",
//     image: find,
//     arrow: arrow,
//   },
//   {
//     title: "Book Photographers",
//     description:
//       "Instantly Bok An Appoinment With Your Desired Photographer      ",
//     ctaText: "Get Started",
//     image: book,
//     arrow: arrow,
//   },
//   {
//     title: "Received HDR Photos    ",
//     description:
//       "With Our Fast, Efficient, Service, Photo Are Delivered On Site, Saving Time And Money While Showcasing The Property In The Best Possible Light      ",
//     ctaText: "Get Started",
//     image: hdr,
//     arrow: arrow,
//   },
// ];
// const HIT = () => {
//   return (
//     <>
//       <div className="hitcontainer" id="ourworks">
//         <div className="overflow-x-hidden">
//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="hittop"
//           >
//             How It Works
//           </motion.div>
//         </div>
//         <div className="hitbottomcontainer flex">
//           <div className="layoutsetting">
//             <div className="left position-relative ">
//               {/*1st image */}
//               <img src={hitmockup} alt="" />
//             </div>
//             <div className="right mt-80">
//               <div className="content">
//                 {HITSteps.map((step, index) => (
//                   <div key={index} className="findphototgraphercontainer mb-72">
//                     <div className="bg-blue-200 w-fit p-4 rounded-md max-h-20 max-w-20">
//                       <img
//                         className="max-w-[80%]"
//                         src={step.image}
//                         alt={step.title}
//                       />
//                     </div>
//                     <div className="hittitle">{step.title}</div>
//                     <div className="hitdesc">{step.description}</div>
//                     <div className="hitcta flex items-center mt-8">
//                       <div className="ctatext">{step.ctaText}</div>
//                       <img
//                         className="ml-4 object-contain"
//                         src={step.arrow}
//                         alt=""
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HIT;
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./HIT.css";
import hitmockup1 from "../../Assets/kfmiddlemobile.png";
import hitmockup2 from "../../Assets/kfleftmobile.png";
import hitmockup3 from "../../Assets/kfrightmobile.png";
import find from "../../Assets/findphotographer.png";
import book from "../../Assets/bookphotographer.png";
import hdr from "../../Assets/receivehdrphoto.png";
import arrow from "../../Assets/arrow.png";

const HITSteps = [
  {
    title: "Find Photographers",
    description:
      "Search Our Nationwide Marketplace Of Qualified Real Estate Photographers using Our AI Powered Capture And Editing Solution.",
    ctaText: "Get Started",
    image: hitmockup1,
    arrow: arrow,
    icon: find,
  },
  {
    title: "Book Photographers",
    description: "Instantly Book An Appointment With Your Desired Photographer",
    ctaText: "Get Started",
    image: hitmockup2,
    arrow: arrow,
    icon: book,
  },
  {
    title: "Received HDR Photos",
    description:
      "With Our Fast, Efficient Service, Photos Are Delivered On Site, Saving Time And Money While Showcasing The Property In The Best Possible Light",
    ctaText: "Get Started",
    image: hitmockup3,
    arrow: arrow,
    icon: hdr,
  },
];

const HIT = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [hoveredStep, setHoveredStep] = useState(null);

  const activeStep =
    HITSteps.find((step) => step.title.includes("Find")) ||
    HITSteps[HITSteps.length - 1];

  return (
    <>
      <div className="hitcontainer" id="ourworks">
        <div className="overflow-x-hidden">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 1, ease: "easeOut" }}
            ref={ref}
            className="hittop"
          >
            How It Works
          </motion.div>
        </div>
        <div className="hitbottomcontainer flex">
          <div className="layoutsetting">
            <div className="left position-relative ">
              <AnimatePresence>
                {inView && (
                  <motion.img
                    key={hoveredStep ? hoveredStep.image : activeStep.image}
                    src={hoveredStep ? hoveredStep.image : activeStep.image}
                    alt={hoveredStep ? hoveredStep.title : activeStep.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                  />
                )}
              </AnimatePresence>
            </div>
            <div className="right mt-56">
              <div className="content">
                {HITSteps.map((step, index) => (
                  <div
                    key={index}
                    className="findphototgraphercontainer mb-80"
                    onMouseEnter={() => setHoveredStep(step)}
                  >
                    <div className="bg-blue-200 w-fit p-4 rounded-md max-h-20 max-w-20">
                      <img
                        className="max-w-[80%]"
                        src={step.icon}
                        alt={step.title}
                      />
                    </div>
                    <div className="hittitle">{step.title}</div>
                    <div className="hitdesc">{step.description}</div>
                    <div className="hitcta flex items-center mt-8">
                      <div className="ctatext">{step.ctaText}</div>
                      <img
                        className="ml-4 object-contain"
                        src={step.arrow}
                        alt=""
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HIT;
