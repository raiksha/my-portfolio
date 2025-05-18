"use client"

import { fadeIn } from "@/utils/motionTransitions";
import { motion } from "motion/react";

interface MotionTransitionProps {
  children: React.ReactNode,
  position: 'right' | 'bottom',
  className?: string,
}

const MotionTransition = (props: MotionTransitionProps) => {
  const { children, position, className } = props;
  return ( 
    <motion.div
      variants={fadeIn(position)}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={className}
    >
      {children}
    </motion.div>
  );
}
 
export default MotionTransition;