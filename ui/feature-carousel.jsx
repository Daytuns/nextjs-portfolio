"use client"

import { forwardRef, useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion, useMotionTemplate, useMotionValue } from "framer-motion"
import EducationCard from "@/components/EducationCard"
import Chihuahua from "@/components/ChihuahuaPopover"

// Utility function to combine class names
function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const TOTAL_STEPS = 4;

const steps = [
  {
    id: "1",
    name: "Step 1",
    title: "What",
    description:
      "Today, I’m a developer. I build for the web because it’s fast, expressive, and fun. Whether front‑end or full‑stack, I’m drawn to creativity and impact of shipping real things to users.",
  },
  {
    id: "2",
    name: "Step 2",
    title: "How",
    description:
      "I navigate life and work through curiosity, persistence, adaptability. I build solutions that are technically sound yet thoughtfully designed.",
  },
  {
    id: "3",
    name: "Step 3",
    title: "Why",
    description:
      "Understanding and creating gives me purpose—whether a circuit, code, or idea, I’m wired to explore and refine.",
  },
  {
    id: "4",
    name: "Step 4",
    title: "Outside Work",
    description: (
      <>
        “Always chasing goals—unless we <Chihuahua /> loud enough to distract me.”
      </>
    ),
  },
];



const ANIMATION_PRESETS = {
  fadeInScale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      mass: 0.5,
    },
  },
  slideInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      mass: 0.5,
    },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      mass: 0.5,
    },
  },
}

function useNumberCycler(totalSteps = TOTAL_STEPS, interval = 3000) {
  const [currentNumber, setCurrentNumber] = useState(0)
  const timerRef = useRef()

  const setupTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    timerRef.current = setTimeout(() => {
      setCurrentNumber((prev) => (prev + 1) % totalSteps)
    }, interval)
  }, [interval, totalSteps])

  const increment = useCallback(() => {
    setCurrentNumber((prev) => (prev + 1) % totalSteps)
    setupTimer()
  }, [totalSteps, setupTimer])

  useEffect(() => {
    setupTimer()
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [setupTimer])

  return {
    currentNumber,
    increment,
  }
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const isSmall = window.matchMedia("(max-width: 768px)").matches
      setIsMobile(isSmall)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}

function IconCheck({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={classNames("h-4 w-4", className)}
      {...props}
    >
      <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  )
}

const stepVariants = {
  inactive: {
    scale: 0.8,
    opacity: 0.5,
  },
  active: {
    scale: 1,
    opacity: 1,
  },
}

const StepImage = forwardRef(({ src, alt, className, style, width = 1200, height = 630, ...props }, ref) => {
  return (
    <Image
      ref={ref}
      alt={alt}
      className={className}
      src={src || "/placeholder.svg"}
      width={width}
      height={height}
      style={{
        position: "absolute",
        userSelect: "none",
        maxWidth: "unset",
        ...style,
      }}
      {...props}
    />
  )
})
StepImage.displayName = "StepImage"

const MotionStepImage = motion(StepImage)

const AnimatedStepImage = ({ preset = "fadeInScale", delay = 0, onAnimationComplete, ...props }) => {
  const presetConfig = ANIMATION_PRESETS[preset]
  return (
    <MotionStepImage
      {...props}
      {...presetConfig}
      transition={{
        ...presetConfig.transition,
        delay,
      }}
      onAnimationComplete={onAnimationComplete}
    />
  )
}

function FeatureCard({ bgClass, children, step }) {
  const [mounted, setMounted] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const isMobile = useIsMobile()

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    if (isMobile) return
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <motion.div
      className="animated-cards relative w-full rounded-[16px]"
      onMouseMove={handleMouseMove}
      style={{
        "--x": useMotionTemplate`${mouseX}px`,
        "--y": useMotionTemplate`${mouseY}px`,
      }}
    >
      <div
        className={classNames(
          "group relative w-full overflow-hidden rounded-3xl border border-zinc-800/50 bg-gradient-to-b from-neutral-900/90 to-stone-800 transition duration-300 dark:from-neutral-950/90 dark:to-neutral-800/90",
          "md:hover:border-transparent",
          bgClass,
        )}
      >
        <div className="m-10 min-h-[300px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              className="flex w-4/6 flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.3,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              <motion.h2
                className="text-xl font-bold tracking-tight text-white md:text-2xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.1,
                  duration: 0.3,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                {steps[step].title}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.3,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                <p className="text-sm leading-5 text-neutral-300 sm:text-base sm:leading-5 dark:text-zinc-400">
                  {steps[step].description}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
          {mounted ? children : null}
        </div>
      </div>
    </motion.div>
  )
}

function Steps({ steps, current, onChange }) {
  return (
    <nav aria-label="Progress" className="flex justify-center px-4">
      <ol
        className="flex w-full flex-wrap items-start justify-start gap-2 sm:justify-center md:w-10/12 md:divide-y-0"
        role="list"
      >
        {steps.map((step, stepIdx) => {
          const isCompleted = current > stepIdx
          const isCurrent = current === stepIdx
          const isFuture = !isCompleted && !isCurrent

          return (
            <motion.li
              key={`${step.name}-${stepIdx}`}
              initial="inactive"
              animate={isCurrent ? "active" : "inactive"}
              variants={stepVariants}
              transition={{ duration: 0.3 }}
              className={classNames(
                "relative z-50 rounded-full px-3 py-1 transition-all duration-300 ease-in-out md:flex",
                isCompleted ? "bg-neutral-500/20" : "bg-neutral-500/10",
              )}
            >
              <div
                className={classNames(
                  "group flex w-full cursor-pointer items-center focus:outline-none focus-visible:ring-2",
                  (isFuture || isCurrent) && "pointer-events-none",
                )}
                onClick={() => onChange(stepIdx)}
              >
                <span className="flex items-center gap-2 text-sm font-medium">
                  <motion.span
                    initial={false}
                    animate={{
                      scale: isCurrent ? 1.2 : 1,
                    }}
                    className={classNames(
                      "flex h-4 w-4 shrink-0 items-center justify-center rounded-full duration-300",
                      isCompleted && "bg-green-500 text-white",
                      isCurrent && "bg-zinc-500/80 text-neutral-400",
                      isFuture && "bg-zinc-700/50",
                    )}
                  >
                    {isCompleted ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        <IconCheck className="h-3 w-3 text-white" />
                      </motion.div>
                    ) : (
                      <span className={classNames("text-xs", !isCurrent && "text-zinc-400")}>{stepIdx + 1}</span>
                    )}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={classNames(
                      "text-sm font-medium duration-300",
                      isCompleted && "text-zinc-400",
                      isCurrent && "text-white",
                      isFuture && "text-zinc-500",
                    )}
                  >
                    {step.name}
                  </motion.span>
                </span>
              </div>
            </motion.li>
          )
        })}
      </ol>
    </nav>
  )
}

const defaultClasses = {
  step1img1: "pointer-events-none w-[50%] border border-zinc-700/50 transition-all duration-500 rounded-2xl",
  step1img2:
    "pointer-events-none w-[60%] border border-zinc-700/50 transition-all duration-500 overflow-hidden rounded-2xl",
  step2img1:
    "pointer-events-none w-[50%] border border-zinc-700/50 transition-all duration-500 rounded-2xl overflow-hidden",
  step2img2:
    "pointer-events-none w-[40%] border border-zinc-700/50 transition-all duration-500 rounded-2xl overflow-hidden",
  step3img:
    "pointer-events-none w-[90%] border border-zinc-700/50 rounded-2xl transition-all duration-500 overflow-hidden",
  step4img:
    "pointer-events-none w-[90%] border border-zinc-700/50 rounded-2xl transition-all duration-500 overflow-hidden",
}

export function FeatureCarousel({
  image,
  step1img1Class = defaultClasses.step1img1,
  step1img2Class = defaultClasses.step1img2,
  step2img1Class = defaultClasses.step2img1,
  step2img2Class = defaultClasses.step2img2,
  step3imgClass = defaultClasses.step3img,
  step4imgClass = defaultClasses.step4img,
  bgClass,
}) {
  const { currentNumber: step, increment } = useNumberCycler()
  const [isAnimating, setIsAnimating] = useState(false)

  const handleIncrement = () => {
    if (isAnimating) return
    setIsAnimating(true)
    increment()
  }

  const handleAnimationComplete = () => {
    setIsAnimating(false)
  }

  const renderStepContent = () => {
    const content = () => {
      switch (step) {
        case 0:
          return (
            <motion.div className="relative w-full h-full" onAnimationComplete={handleAnimationComplete}>
              <AnimatedStepImage
                alt={image.alt}
                className={classNames(step1img1Class, "left-[25%] top-[57%] md:left-[35px] md:top-[29%]")}
                src={image.step1light1}
                preset="slideInLeft"
              />
              <AnimatedStepImage
                alt={image.alt}
                className={classNames(
                  step1img2Class,
                  "left-[69%] top-[53%] md:top-[21%] md:left-[calc(50%+35px+1rem)]",
                )}
                src={image.step1light2}
                preset="slideInRight"
                delay={0.1}
              />
            </motion.div>
          )
        case 1:
          return (
            <motion.div className="relative w-full h-full" onAnimationComplete={handleAnimationComplete}>
              <AnimatedStepImage
                alt={image.alt}
                className={classNames(step2img1Class, "left-[25%] top-[69%] md:left-[35px] md:top-[30%]")}
                src={image.step2light1}
                preset="fadeInScale"
              />
              <AnimatedStepImage
                alt={image.alt}
                className={classNames(
                  step2img2Class,
                  "left-[70%] top-[53%] md:top-[25%] md:left-[calc(50%+27px+1rem)]",
                )}
                src={image.step2light2}
                preset="fadeInScale"
                delay={0.1}
              />
            </motion.div>
          )
        case 2:
          return (
            <AnimatedStepImage
              alt={image.alt}
              className={classNames(step3imgClass, "left-[5%] top-[50%] md:top-[30%] md:left-[68px]")}
              src={image.step3light}
              preset="fadeInScale"
              onAnimationComplete={handleAnimationComplete}
            />
          )
        case 3:
          return (
            <motion.div
              className="absolute left-2/4 top-1/3 flex w-[100%] -translate-x-1/2 -translate-y-[33%] flex-col gap-12 text-center text-2xl font-bold md:w-[60%]"
              {...ANIMATION_PRESETS.fadeInScale}
              onAnimationComplete={handleAnimationComplete}
            >
              <AnimatedStepImage
                alt={image.alt}
                className="pointer-events-none top-[50%] w-[90%] overflow-hidden rounded-2xl border border-zinc-700 md:left-[35px] md:top-[30%] md:w-full"
                src="/placeholder.svg?height=400&width=600"
                preset="fadeInScale"
                delay={0.1}
              />
            </motion.div>
          )
        default:
          return null
      }
    }

    return (
      <AnimatePresence mode="wait">
        <motion.div key={step} {...ANIMATION_PRESETS.fadeInScale} className="w-full h-full absolute">
          {content()}
        </motion.div>
      </AnimatePresence>
    )
  }

  return (
    <FeatureCard bgClass={bgClass} step={step}>
      {renderStepContent()}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute left-[12rem] top-5 z-50 h-full w-full cursor-pointer md:left-0"
      >
        <Steps current={step} onChange={() => {}} steps={steps} />
      </motion.div>
      <motion.div
        className="absolute right-0 top-0 z-50 h-full w-full cursor-pointer md:left-0"
        onClick={handleIncrement}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      />
    </FeatureCard>
  )
}

// Add the CSS for the animated gradient effect
const styles = `
.animated-cards::before {
  pointer-events: none;
  position: absolute;
  user-select: none;
  border-radius: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s;
  background: radial-gradient(
    1000px circle at var(--x) var(--y),
    #c9ee80 0,
    #eebbe2 10%,
    #adc0ec 25%,
    #c9ee80 35%,
    rgba(255, 255, 255, 0) 50%,
    transparent 80%
  );
  z-index: -1;
  content: "";
  inset: -1px;
}

.animated-cards:hover::before {
  opacity: 1;
}
`

// Inject styles
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style")
  styleSheet.innerText = styles
  document.head.appendChild(styleSheet)
}

export default FeatureCarousel
