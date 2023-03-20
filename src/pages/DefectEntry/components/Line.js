import { motion } from "framer-motion";

export default function App({ boxX, boxY, x1, y1 }) {
    return (
        <motion.svg
            width="100%"
            height="100%"
            animate={{
                pathLength: 1,
                position: "absolute",
                top: 40,
                left: 40,
                pointerEvents: "none",
                display: x1 !== -100 ? "block" : "none"
            }}
        >
            <motion.line
                strokeWidth="3px"
                x1={x1 - 40}
                y1={y1 - 40}
                x2={boxX}
                y2={boxY}
                stroke="#d00000"
                custom={5}
            />
        </motion.svg>
    );
}
