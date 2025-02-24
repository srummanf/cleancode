import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Button,
  Input,
  Card,
  ProgressBar,
  TextArea,
  Popup,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Bubble,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "pixel-retroui";
import { ThemeOptions, themeColors } from "../app/themes";
import { useRouter } from "next/navigation";

interface ComponentGridProps {
  theme: ThemeOptions;
}

const ComponentGrid: React.FC<ComponentGridProps> = ({ theme }) => {
  const router = useRouter();
  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    null
  );
  const colors = themeColors[theme];

  const components = [
    {
      name: "Accordion",
      description: "Collapsible content sections",
      Component: Accordion,
    },
    {
      name: "Bubble",
      description: "Speech bubble for text or content",
      Component: Bubble,
    },
    {
      name: "Button",
      description: "Customizable, pixel-art styled buttons",
      Component: Button,
    },
    {
      name: "Card",
      description: "Pixel-perfect content containers",
      Component: Card,
    },
    {
      name: "Dropdown",
      description: "Customizable dropdown menu",
      Component: DropdownMenu,
    },
    {
      name: "Input",
      description: "Retro-styled input fields for user",
      Component: Input,
    },
    {
      name: "Popup",
      description: "Retro-inspired modal dialogs",
      Component: Popup,
    },
    {
      name: "ProgressBar",
      description: "Nostalgic progress indicators",
      Component: ProgressBar,
    },
    {
      name: "TextArea",
      description: "Multi-line input with retro charm",
      Component: TextArea,
    },
  ];

  const renderComponentPreview = (name: string, Component: any) => {
    switch (name) {
      case "Button":
        return (
          <div className="flex space-x-4">
            <Component
              className=""
              borderColor={colors.border}
              bg={colors.bg}
              shadow={colors.shadow}
              textColor={colors.text}
            >
              Click me
            </Component>
            <Component
              className="py-1 px-2"
              borderColor={colors.border}
              bg={colors.shadow}
              shadow={colors.bg}
              textColor={colors.bg}
            >
              Accent
            </Component>
          </div>
        );

      case "Dropdown":
        return (
          <Component>
            <DropdownMenu>
              <DropdownMenuTrigger
                bg={colors.bg}
                textColor={colors.text}
                borderColor={colors.border}
                shadow={colors.shadow}
              >
                Dropdown Button
              </DropdownMenuTrigger>
              <DropdownMenuContent
                bg={colors.bg}
                textColor={colors.text}
                borderColor={colors.border}
                shadowColor={colors.shadow}
              >
                <DropdownMenuItem>Action</DropdownMenuItem>
                <DropdownMenuItem>Another action</DropdownMenuItem>
                <DropdownMenuItem>One more action</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Component>
        );

      case "Input":
        return (
          <Component
            placeholder="Type here..."
            bg={colors.textareaBg}
            textColor={colors.text}
            borderColor={colors.border}
            className="w-full max-w-xs"
          />
        );

      case "Card":
        return (
          <Component
            className="w-full max-w-xs p-4 flex items-center justify-center"
            bg={colors.bg}
            textColor={colors.text}
            borderColor={colors.border}
            shadowColor={colors.shadow}
          >
            <p>Card Content</p>
          </Component>
        );

      case "ProgressBar":
        return (
          <div className="w-full max-w-xs">
            <Component
              progress={65}
              color={colors.shadow}
              borderColor={colors.border}
            />
          </div>
        );

      case "TextArea":
        return (
          <Component
            className="w-full max-w-xs"
            bg={colors.textareaBg}
            textColor={colors.text}
            borderColor={colors.border}
            placeholder="Enter multiple lines..."
          />
        );

      case "Popup":
        return (
          <div
            className="relative w-full max-w-xs h-36 border-4 border-dashed cursor-pointer overflow-hidden"
            style={{ borderColor: colors.border }}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedComponent(name);
              router.push(`/${name.toLowerCase()}`);
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                <Component
                  isOpen={true}
                  onClose={() => {}}
                  bg={colors.bg}
                  textColor={colors.text}
                  borderColor={colors.border}
                  baseBg={colors.shadow}
                  className="z-0 text-center w-48 pointer-events-none scale-75 transform !absolute !left-1/2 !top-1/2 !-translate-x-1/2 !-translate-y-1/2"
                >
                  <p className="">
                    Popup content goes
                    <br /> here
                  </p>
                </Component>
              </div>
            </div>
          </div>
        );

      case "Accordion":
        return (
          <Component
            className="w-full max-w-xs"
            borderColor={colors.border}
            bg={colors.bg}
            shadow={colors.shadow}
            textColor={colors.text}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Section 1</AccordionTrigger>
              <AccordionContent>Content 1</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Section 2</AccordionTrigger>
              <AccordionContent>Content 2</AccordionContent>
            </AccordionItem>
          </Component>
        );

      case "Bubble":
        return (
          <Bubble
            className="max-w-xs"
            direction="left"
            borderColor={colors.border}
            bg={colors.bg}
            textColor={colors.text}
          >
            Hello there, beautiful!
          </Bubble>
        );

      default:
        return <div>Preview not available</div>;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <AnimatePresence>
        <motion.div
          key="grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 auto-rows-fr"
        >
          {components.map(({ name, description, Component }) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedComponent(name);
                router.push(`/${name.toLowerCase()}`);
              }}
              className="h-full"
            >
              <Card
                className="border-4 p-4 cursor-pointer transition-colors duration-200 flex flex-col h-full"
                bg={colors.cardBg}
                textColor={colors.text}
                borderColor={colors.border}
                shadowColor={colors.shadow}
              >
                <div className="flex-grow flex items-center justify-center mb-4">
                  {renderComponentPreview(name, Component)}
                </div>
                <div>
                  <h3 className="font-minecraft-bold text-xl mb-2">{name}</h3>
                  <p className="text-sm">{description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ComponentGrid;
