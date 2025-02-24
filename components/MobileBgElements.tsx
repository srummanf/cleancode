"use client";
import {
  Card,
  Input,
  TextArea,
  Button,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  ProgressBar,
  Bubble,
} from "pixel-retroui";

export default function MobileBgElements() {
  return (
    <div className="relative w-full p-4 flex flex-col gap-4 items-center">
      {/* Card */}
      <Card
        bg="#fefcd0"
        shadowColor="#c381b5"
        className="col-span-2 p-4 rotate-[-5deg] max-w-sm "
      >
        <img
          src="https://i.pinimg.com/474x/f0/ad/05/f0ad05f5916d618e7d7e871e73b765ca.jpg"
          alt="Mew"
          className="w-full rounded-md"
        />
        <div className="py-4 text-center">
          <h1 className="font-minecraft-bold text-xl mb-2">MEW</h1>
          <p className="text-sm">
            Despite being one of the most powerful Pokémon in the world, Mew is
            very playful and mischievous.
          </p>
        </div>
      </Card>

      {/* Accordion */}
      <Accordion className="col-span-2 w-full max-w-sm mx-auto rotate-[5deg]">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is it?</AccordionTrigger>
          <AccordionContent>
            RetroUI is a component library for react-based websites that support
            TailwindCSS and TypeScript.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What makes it different?</AccordionTrigger>
          <AccordionContent>
            RetroUI lets you add a retro pixelated touch to your websites
            easily.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is retro style good?</AccordionTrigger>
          <AccordionContent>Yes, awesome! Just like you.</AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Progress Bar */}
      <div className="col-span-2 text-center w-full max-w-sm mx-auto rotate-[-5deg]">
        <p className="font-minecraft mb-2">How cute are you?</p>
        <ProgressBar size="lg" progress={100} color="#c381b5" />
        <p className="text-sm mt-1 font-minecraft">100%</p>
      </div>

      {/* Bubbles */}
      <div className="col-span-2 flex flex-col items-center font-minecraft">
        <Bubble
          direction="left"
          bg="#fefcd0"
          className="w-full py-3 rotate-[5deg]"
        >
          I&apos;m so obsessed with this library!
        </Bubble>
        <Bubble
          direction="right"
          bg="#fefcd0"
          className="py-3 rotate-[-5deg] -mt-3 ml-20"
        >
          Mee too!
        </Bubble>
      </div>

      {/* Separator */}
      <div
        className="w-full max-w-sm mt-8"
        style={{
          height: "0px",
          border: "2px dashed #9CA3AF",
          borderRadius: "9999px",
          backgroundClip: "content-box",
          borderStyle: "dashed",
          borderWidth: "4px",
          borderSpacing: "8px",
        }}
      ></div>

      {/* Form */}
      <div className="col-span-2 flex flex-col items-center gap-4 my-10">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="font-minecraft text-xl font-black">
            Request A Component!
          </h1>
          <p className="font-minecraft text-sm">Yes, this is a real form.</p>
        </div>
        <Input className="w-full max-w-sm" placeholder="Enter Email" />
        <TextArea
          bg="white"
          className="w-full max-w-sm h-24 rounded-md"
          placeholder="Describe your component..."
        />
        <div className="flex gap-4 w-full max-w-sm justify-between">
          <Button bg="#fefcd0" shadow="#c381b5" className="w-full">
            Submit
          </Button>
          <Button
            bg="#c381b5"
            shadow="#fefcd0"
            textColor="#fefcd0"
            className="w-full"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
