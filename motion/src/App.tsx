import { motion, Variants } from "framer-motion";
import { useState } from "react";

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3, // 子元素动画开始的延迟时间
      staggerChildren: 0.2, // 子元素动画之间间隔
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const menu: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
  },
};

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        className="ml-60 h-20 w-20 rounded-full bg-teal-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.5 }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />

      <motion.ul
        className="mx-auto grid h-14 w-14 grid-cols-2 rounded-2xl bg-purple-500"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {[0, 1, 2, 3].map((i) => (
          <motion.li
            key={i}
            variants={item}
            className="m-auto h-5 w-5 rounded-full bg-white"
          />
        ))}
      </motion.ul>

      <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="m-auto flex w-40 rounded-xl bg-slate-50 text-slate-950"
        >
          <i className="m-auto text-lg font-bold">Menu</i>
          <motion.div
            variants={{
              open: { rotate: 90 },
              closed: { rotate: -90 },
            }}
            transition={{ duration: 0.2 }}
            className="m-auto border-none"
          >
            &gt;
          </motion.div>
        </motion.button>
        <motion.ul
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            },
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
          className="mx-auto mt-2 w-40 bg-slate-50"
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.li variants={menu} key={i} className="w-40">
              Item {i + 1}
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </>
  );
}
