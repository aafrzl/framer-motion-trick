import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export default function CheckoutBtn() {
  const [focus, setFocus] = useState(false);

  const variants = {
    initial: {
      height: 10,
      opacity: 0,
    },
    animate: {
      height: 100,
      opacity: 1,
    },
    exit: {
      height: 10,
      opacity: 0,
    },
  };

  return (
    <div className="relative z-0 mt-10">
      <motion.button
        onMouseEnter={() => setFocus(true)}
        onMouseLeave={() => setFocus(false)}
        className="h-12 px-10 text-white overflow-hidden z-10 flex items-center gap-2 rounded-xl bg-black"
      >
        <span className="text-lg font-semibold">Checkout</span>
        <span className="relative">
          <ShoppingCart className="size-5 ml-2" />
          <motion.span
            animate={{
              y: focus ? "-100%" : 0,
              opacity: focus ? 0 : 1,
            }}
            transition={{
              duration: 0.2,
              staggerChildren: 0.1,
              delayChildren: 0.2,
            }}
            className="text-xs size-4 rounded-full bg-zinc-200 text-black -top-1.5 -right-1.5 absolute"
          >
            3
          </motion.span>
        </span>
        <AnimatePresence onExitComplete={() => setFocus(false)}>
          {focus && (
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute bg-zinc-100/50 text-black p-2 flex text-lg -z-10 bottom-0 w-full left-0 rounded-xl"
            >
              3 Items in cart
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
