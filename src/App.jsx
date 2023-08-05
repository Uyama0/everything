import "./style/style.css";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <div className="flex items-center flex-col justify-center text-9xl text-white font-bold h-screen">
        <motion.div
          className="w-40 h-40 bg-purple-100 rounded-xl"
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 1,
            repeatType: "loop",
          }}
          animate={{ rotate: 360 }}
        ></motion.div>
        <motion.h1
          initial={{
            x: -1500,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="mt-10"
        >
          Everything here
        </motion.h1>
      </div>
    </>
  );
}

export default App;
