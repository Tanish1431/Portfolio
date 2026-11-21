import React from "react";
import { motion } from "framer-motion";

export const Fade = ({
  children,
  bottom,
  top,
  left,
  right,
  duration = 1000,
  distance = "20px",
  delay = 0,
  className = "",
  style = {},
  ...props
}) => {
  const distNum =
    typeof distance === "string" ? parseInt(distance, 10) || 20 : distance || 20;

  let initialX = 0;
  let initialY = 0;

  if (bottom) initialY = distNum;
  else if (top) initialY = -distNum;
  else if (left) initialX = -distNum;
  else if (right) initialX = distNum;
  else initialY = distNum;

  const durationSec =
    typeof duration === "number" && duration > 10 ? duration / 1000 : duration || 0.8;
  const delaySec =
    typeof delay === "number" && delay > 10 ? delay / 1000 : delay || 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX, y: initialY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        duration: durationSec,
        delay: delaySec,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const Slide = Fade;
export const Zoom = Fade;
export const Bounce = Fade;
export const Flip = Fade;
export const Roll = Fade;

export default Fade;
