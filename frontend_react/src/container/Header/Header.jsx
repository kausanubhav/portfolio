import React from "react"
import { motion, useAnimationControls } from "framer-motion"

import { AppWrap } from "../../wrapper"
import { images } from "../../constants"
import "./header.scss"

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
}

function Header() {
  const animation = useAnimationControls()

  async function sequence() {
    await animation.start({ rotate: -90 })
    await animation.start({ scale: 1.5 })
    await animation.start({ rotate: 0 })
    animation.start({ scale: 1 })
  }
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Anubhav</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">I am a Full Stack React Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.sanity, images.react, images.sass].map((circle, index) => (
          <motion.div
            className="circle-cmp app__flex"
            key={`circle-${index}`}
            // onTap={sequence}
            // animate={animation}
            // transition={{ type: "spring", duration: 5, bounce: 0.6 }}
          >
            <motion.img src={circle} alt="profile_bg" whileInView={{ rotate: 180 }} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
export default AppWrap(Header, "home")
