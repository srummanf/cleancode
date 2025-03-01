"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Bubble,
  Button,
  Card,
  Input,
  ProgressBar,
  TextArea,
  Popup,
} from "pixel-retroui";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import MobileBgElements from "../components/MobileBgElements";

// Screen size breakpoints
const BREAKPOINTS = {
  mobile: 800,
  tablet: 1200,
};

type ScreenSize = "mobile" | "tablet" | "desktop";

type StylesType = {
  [key in ScreenSize]: {
    headerPadding: string;
    logoSize: { width: number; height: number };
    mainPadding: string;
    titleSize: string;
    subtitleSize: string;
    buttonSize: string;
  };
};

// Responsive sizes and positions
const RESPONSIVE_STYLES: StylesType = {
  mobile: {
    headerPadding: "p-3",
    logoSize: { width: 20, height: 20 },
    mainPadding: "px-4",
    titleSize: "text-3xl",
    subtitleSize: "text-base",
    buttonSize: "text-sm px-2 py-1",
  },
  tablet: {
    headerPadding: "p-4",
    logoSize: { width: 22, height: 22 },
    mainPadding: "px-8",
    titleSize: "text-5xl",
    subtitleSize: "text-xl",
    buttonSize: "text-base px-3 py-1.5",
  },
  desktop: {
    headerPadding: "p-5",
    logoSize: { width: 25, height: 25 },
    mainPadding: "px-10",
    titleSize: "text-7xl",
    subtitleSize: "text-3xl",
    buttonSize: "text-lg px-4 py-2",
  },
};

type ElementStyle = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  width: string;
  rotate: string;
};

type BgElementsType = {
  [key in Exclude<ScreenSize, "desktop">]: {
    card: ElementStyle;
    form: ElementStyle;
    accordion: ElementStyle;
    progressBar: ElementStyle;
    bubbleLeft: ElementStyle;
    bubbleRight: ElementStyle;
  };
};

// Background element positions and sizes
const BG_ELEMENTS: BgElementsType = {
  mobile: {
    card: { top: "5%", right: "-10%", width: "60%", rotate: "-10deg" },
    form: { bottom: "5%", right: "-5%", width: "60%", rotate: "10deg" },
    accordion: { top: "20%", left: "-5%", width: "70%", rotate: "5deg" },
    progressBar: { bottom: "30%", left: "-5%", width: "70%", rotate: "-10deg" },
    bubbleLeft: { bottom: "10%", left: "0", width: "auto", rotate: "5deg" },
    bubbleRight: { bottom: "5%", left: "20%", width: "auto", rotate: "-5deg" },
  },
  tablet: {
    card: { top: "10%", right: "-10%", width: "30%", rotate: "-15deg" },
    form: { bottom: "10%", right: "-10%", width: "30%", rotate: "15deg" },
    accordion: { top: "25%", left: "-5%", width: "30%", rotate: "10deg" },
    progressBar: { bottom: "35%", left: "-8%", width: "30%", rotate: "-15deg" },
    bubbleLeft: { bottom: "15%", left: "-5%", width: "auto", rotate: "10deg" },
    bubbleRight: { bottom: "5%", left: "18%", width: "auto", rotate: "-10deg" },
  },
};

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const router = useRouter();

  const [progress, setProgress] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval); // Stop the interval when reaching 100
          return 100;
        }
        return prev + 5; // Increase smoothly
      });
    }, 1200);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getScreenSize = (): ScreenSize => {
    if (windowWidth < BREAKPOINTS.mobile) return "mobile";
    if (windowWidth < BREAKPOINTS.tablet) return "tablet";
    return "desktop";
  };

  const screenSize = getScreenSize();
  const styles = RESPONSIVE_STYLES[screenSize];
  const bgElements =
    screenSize !== "desktop"
      ? BG_ELEMENTS[screenSize as "mobile" | "tablet"]
      : null;

  // Helper function to get style with fallback
  const getStyle = (
    element: keyof BgElementsType["mobile"],
    property: keyof ElementStyle,
    defaultValue = "0"
  ): string => bgElements?.[element]?.[property] || defaultValue;

  return (
    <div className="min-h-screen relative flex flex-col ">
      <Navbar />

      {/* Main content */}
      <main
        className={`flex-grow flex items-center relative justify-center min-h-screen ${styles.mainPadding} z-10`}
      >
        <div className="text-center">
          <div className="relative mb-10">
            <Image
              src="/sparkle.png"
              className={`absolute -top-20 md:-top-32 right-0 md:right-10 w-12 h-12 md:w-20 md:h-20`}
              alt="sparkle"
              width={80}
              height={80}
            />
            <Image
              src="/sparkle.png"
              className={`absolute -bottom-56 md:-bottom-48 -left-5 md:left-10 w-12 h-12 md:w-20 md:h-20 opacity-100`}
              alt="sparkle"
              width={80}
              height={80}
            />
            <h1 className={`${styles.titleSize} font-minecraft-bold mb-4`}>
              Guide on <br /> Clean Code
            </h1>
            <p className={`${styles.subtitleSize} font-minecraft mb-8`}>
              The Art of <span className="font-minecraft-bold">Writing Beautiful Software</span>{" "}
              
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4  justify-center">
            <div>
              <Button onClick={openPopup}>Welcome Heckers!</Button>

              <Popup
                isOpen={isPopupOpen}
                onClose={closePopup}
                bg="#ffffff"
                baseBg="#000000"
                textColor="#5e4545"
                borderColor="#e65151"
              >
               Sikee!! 
              </Popup>
            </div>
            <Button
              className="px-2"
              bg="#c381b5"
              shadow="#fefcd0"
              textColor="#fefcd0"
              onClick={() => router.push("/guide")}
            >
              Explore guide
            </Button>
          </div>
        </div>
      </main>

      {/* Background elements */}
      {screenSize !== "mobile" && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          {screenSize === "desktop" ? (
            <>
              <Card
                className="w-60 lg:w-80 p-2 absolute top-10 lg:top-40 right-0 lg:-right-20 transition-transform duration-300 hover:rotate-[-20deg] pointer-events-auto"
                bg="#fefcd0"
                shadowColor="#c381b5"
                style={{
                  transform: `rotate(-15deg) scale(${
                    windowWidth >= 1440 ? 0.9 : 0.8
                  })`,
                }}
              >
                <img
                  src="https://i.pinimg.com/736x/9e/2c/b3/9e2cb31efaaf32f30d1402529632c7c1.jpg"
                  alt="Mew"
                />
                <div className="py-5">
                  <h1 className="font-minecraft-bold text-2xl lg:text-3xl">
                    Code Like a Pro
                  </h1>
                  <p className="text-sm lg:text-base">
                    Write readable, maintainable, and error-free code
                    effortlessly!
                  </p>
                </div>
              </Card>

              <div
                className="w-60 lg:w-80 flex flex-col items-center gap-4 absolute bottom-0 lg:bottom-10 right-0 lg:-right-5
                transition-transform duration-300 hover:rotate-[10deg] pointer-events-auto"
                style={{
                  transform: `rotate(15deg) scale(${
                    windowWidth >= 1440 ? 0.9 : 0.8
                  })`,
                }}
              >
                <div>
                  <Button onClick={openPopup}>Open Popup</Button>

                  <Popup
                    isOpen={isPopupOpen}
                    onClose={closePopup}
                    bg="#fefcd0"
                    baseBg="#c381b5"
                    textColor="black"
                    borderColor="black"
                  >
                    Learn about clean code!
                  </Popup>
                </div>
              </div>

              <div
                className="z-10 absolute top-1/4 left-0 transition-transform duration-300 hover:rotate-[5deg] pointer-events-auto"
                style={{
                  transform: `rotate(10deg) scale(${
                    windowWidth >= 1440 ? 0.9 : 0.8
                  })`,
                }}
              >
                <Accordion className="w-72 lg:w-96">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is clean code?</AccordionTrigger>
                    <AccordionContent>
                    Clean code is code that is easy to read, easy to understand, and easy to modify.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      Why is clean code important?
                    </AccordionTrigger>
                    <AccordionContent>
                      Clean code reduces technical debt, makes debugging easier,
                      improves collaboration among developers, and ensures
                      long-term scalability.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div
                className="w-72 lg:w-96 absolute bottom-48 lg:bottom-72 left-0 lg:-left-10 font-minecraft transition-transform duration-300 hover:rotate-[-10deg] pointer-events-auto"
                style={{
                  transform: `rotate(-15deg) scale(${
                    windowWidth >= 1440 ? 0.9 : 0.8
                  })`,
                }}
              >
                <p className="text-center">How good is your code?</p>
                
                <ProgressBar size="lg" progress={progress} color="#c381b5" />
                <p className="text-right">{progress}%</p>
              </div>

              <div
                className="font-minecraft absolute bottom-20 left-0 transition-transform duration-300 hover:rotate-[5deg] pointer-events-auto"
                style={{
                  transform: `rotate(10deg) scale(${
                    windowWidth >= 1440 ? 0.9 : 0.8
                  })`,
                }}
              >
                <Bubble direction={"left"} bg="#fefcd0">
                  Damn!! What a great hackathon!
                </Bubble>
              </div>

              <div
                className="font-minecraft absolute bottom-0 left-20 lg:left-40 transition-transform duration-300 hover:rotate-[-20deg] pointer-events-auto"
                style={{
                  transform: `rotate(-10deg) scale(${
                    windowWidth >= 1440 ? 0.9 : 0.8
                  })`,
                }}
              >
                <Bubble direction={"right"} bg="#fefcd0">
                  Exactly! Hacknight rocks!
                </Bubble>
              </div>
            </>
          ) : (
            <>
              <Card
                className={`p-2 absolute transition-transform duration-300 hover:rotate-[-20deg] pointer-events-auto`}
                bg="#fefcd0"
                shadowColor="#c381b5"
                style={{
                  top: getStyle("card", "top"),
                  right: getStyle("card", "right"),
                  width: getStyle("card", "width", "40%"),
                  transform: `rotate(${getStyle("card", "rotate", "0deg")})`,
                }}
              >
                <img
                  src="https://i.pinimg.com/736x/9e/2c/b3/9e2cb31efaaf32f30d1402529632c7c1.jpg"
                  alt="Mew"
                />
                <div className="py-5">
                  <h1 className="font-minecraft-bold text-2xl">
                    Code Like a Pro
                  </h1>
                  <p className="text-sm">
                    Write readable, maintainable, and error-free code
                    effortlessly!
                  </p>
                </div>
              </Card>

              {/* <div
                className={`flex flex-col items-center gap-4 absolute transition-transform duration-300 hover:rotate-[10deg] pointer-events-auto`}
                style={{
                  bottom: bgElements?.form.bottom,
                  right: bgElements?.form.right,
                  width: bgElements?.form.width || "40%",
                  transform: `rotate(${bgElements?.form.rotate || "0deg"})`,
                }}
              >
                <Input className="w-full" placeholder="Enter Name" />
                <TextArea
                  bg="white"
                  className="h-36"
                  placeholder="Type something..."
                />
                <div className="flex w-full">
                  <Button
                    className={styles.buttonSize}
                    bg="#fefcd0"
                    shadow="#c381b5"
                  >
                    Submit Form
                  </Button>
                  <Button
                    className={styles.buttonSize}
                    bg="#c381b5"
                    shadow="#fefcd0"
                    textColor="#fefcd0"
                  >
                    Cancel
                  </Button>
                </div>
              </div> */}

              <div
                className={`absolute transition-transform duration-300 hover:rotate-[5deg] pointer-events-auto`}
                style={{
                  top: bgElements?.accordion.top,
                  left: bgElements?.accordion.left,
                  width: bgElements?.accordion.width || "50%",
                  transform: `rotate(${
                    bgElements?.accordion.rotate || "0deg"
                  })`,
                }}
              >
                <Accordion className="w-72 lg:w-96">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is clean code?</AccordionTrigger>
                    <AccordionContent>
                      Clean code is code that is easy to read, understand, and
                      maintain. It follows best practices like meaningful
                      naming, small functions, and proper formatting to ensure
                      clarity and efficiency.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      Why is clean code important?
                    </AccordionTrigger>
                    <AccordionContent>
                      Clean code reduces technical debt, makes debugging easier,
                      improves collaboration among developers, and ensures
                      long-term scalability.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div
                className={`absolute font-minecraft transition-transform duration-300 hover:rotate-[-10deg] pointer-events-auto`}
                style={{
                  bottom: bgElements?.progressBar.bottom,
                  left: bgElements?.progressBar.left,
                  width: bgElements?.progressBar.width || "50%",
                  transform: `rotate(${
                    bgElements?.progressBar.rotate || "0deg"
                  })`,
                }}
              >
                <p className="text-center">How cute are you?</p>
                <ProgressBar size="lg" progress={progress} color="#c381b5" />
                <p className="text-right">100%</p>
              </div>

              <div
                className={`font-minecraft absolute transition-transform duration-300 hover:rotate-[5deg] pointer-events-auto`}
                style={{
                  bottom: bgElements?.bubbleLeft.bottom,
                  left: bgElements?.bubbleLeft.left,
                  transform: `rotate(${
                    bgElements?.bubbleLeft.rotate || "0deg"
                  })`,
                }}
              >
                <Bubble direction={"left"} bg="#fefcd0">
                  I&apos;m so obsessed with this library!
                </Bubble>
              </div>

              <div
                className={`font-minecraft absolute transition-transform duration-300 hover:rotate-[-20deg] pointer-events-auto`}
                style={{
                  bottom: bgElements?.bubbleRight.bottom,
                  left: bgElements?.bubbleRight.left,
                  transform: `rotate(${
                    bgElements?.bubbleRight.rotate || "0deg"
                  })`,
                }}
              >
                <Bubble direction={"right"} bg="#fefcd0">
                  Mee too!
                </Bubble>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
