import React from "react";
import "./Hero.css";
import appstore from "../../Assets/App Store.png";
import playstore from "../../Assets/Play Store.png";
// import iphone from "../../Assets/Iphonemockup.png";
import firstiphone1 from "../../Assets/firstiphone.svg";
import firstiphone2 from "../../Assets/firstiphone2.svg";
import firstiphone3 from "../../Assets/firstiphone3.svg";
import firstiphone4 from "../../Assets/firstiphone4.svg";
import firstiphone5 from "../../Assets/firstiphone5.svg";
import { motion } from "framer-motion";
import eclipseone from "../../Assets/eclipse/Ellipse-1.png";
import eclipsetwo from "../../Assets/eclipse/Ellipse-2.png";

const Hero = () => {
  const animationVariants = {
    up: { y: -20 },
    down: { y: 20 },
  };

  const animationOptions = {
    duration: 1,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse",
  };

  return (
    <>
      <div className="eclipse absolute w-full overflow-hidden">
        <motion.img
          className="eone"
          src={eclipseone}
          alt=""
          variants={animationVariants}
          animate="up"
          transition={animationOptions}
        />
        <motion.img
          className="etwo"
          src={eclipsetwo}
          alt=""
          variants={animationVariants}
          animate="down"
          transition={animationOptions}
        />
        <motion.img
          className="ethree"
          src={eclipsetwo}
          alt=""
          variants={animationVariants}
          animate="up"
          transition={animationOptions}
        />
      </div>
      <div className="heroseccontainer">
        <div className="herotop">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="herotitle"
          >
            Stunning HDR Photos <br /> using cutting-edge AI Technology, <br />
            delivered Instantly
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="herodescription "
          >
            High-end digital experiences. Created at the heart of <br />{" "}
            Manhattan, we are a human-sized team.
          </motion.div>
          <div className="downloadbutton flex overflow-x-hidden">
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="appstore "
              src={appstore}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="playstore "
              src={playstore}
              alt=""
            />
          </div>
        </div>
        <div className="herobottom overflow-x-hidden">
          <div className="mainherimgiphone flex">
            <motion.img
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 40 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="iphoneimgsize1"
              src={firstiphone1}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 25 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="iphoneimgsize2"
              src={firstiphone2}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="iphoneimgsize3"
              src={firstiphone3}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: -25 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="iphoneimgsize4"
              src={firstiphone4}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: -40 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="iphoneimgsize5"
              src={firstiphone5}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
