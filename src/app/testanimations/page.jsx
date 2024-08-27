"use client"
import { motion } from 'framer-motion'


const TestPage = () => {
    const variants = {
        variant1: {
            x: 400, y: 300, opacity: 0.5
        },
        variant2: {
            x: 100, y: -300, rotation: 90
        },
    }
    return (
        <div className='h-full flex items-center justify-center'>
            <motion.div
                initial={{ x: -100 }}
                variants={variants}
                animate="variant2"
                transition={{ delay: 2, duration: 4 }}
                className='w-96 h-96 bg-red-500 rounded'>

            </motion.div>
        </div>
    )
}

export default TestPage