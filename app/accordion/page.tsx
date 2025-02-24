"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CopyableCode from "../../components/CopyableCode";
import {
  Card,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "pixel-retroui";
import { themeColors, ThemeOptions } from "../themes";
import Navbar from "../../components/Navbar";

function Page() {
  const router = useRouter();
  const [selectedTheme, setSelectedTheme] = useState<ThemeOptions | "custom">(
    "pop"
  );
  const [customColors, setCustomColors] = useState({
    bg: "#ffffff",
    text: "#000000",
    border: "#000000",
    shadow: "#000000",
  });

  const handleThemeChange = (theme: ThemeOptions | "custom") => {
    setSelectedTheme(theme);
  };

  const handleCustomColorChange = (colorType: string, color: string) => {
    setCustomColors((prev) => ({ ...prev, [colorType]: color }));
    setSelectedTheme("custom");
  };

  const getAccordionCode = () => {
    const colors =
      selectedTheme === "custom"
        ? customColors
        : themeColors[selectedTheme as ThemeOptions];
    return `<Accordion
  bg="${colors.bg}"
  textColor="${colors.text}"
  borderColor="${colors.border}"
  shadowColor="${colors.shadow}"
>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content for section 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Section 2</AccordionTrigger>
    <AccordionContent>Content for section 2</AccordionContent>
  </AccordionItem>
</Accordion>`;
  };

  return (
    <main className="flex z-10 min-h-screen font-minecraft flex-col w-full gap-10 p-10 py-24 xl:p-28  bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/564x/fa/66/27/fa662786798d35f4d86572ab79621d0a.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <Navbar />

      <div className="z-10">
        <h1 className="font-minecraft-bold text-5xl">Accordion</h1>
        <p className="mt-4">
          A customizable, pixel-art styled accordion component for organizing
          content into collapsible sections.
        </p>
        <div className="mt-12">
          <h1 className="font-minecraft-bold text-lg ml-2">Basic Usage</h1>
          <CopyableCode
            code={`import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'pixel-retroui';

function App() {
  return (
    <Accordion>
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>Content for section 1</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>Content for section 2</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`}
          />

          <div className="mt-12">
            <h1 className="font-minecraft-bold text-lg ml-2">Props</h1>
            <Card
              className="w-full overflow-x-auto bg-opacity-30 bg-white"
              bg="transparent"
            >
              <table className="min-w-full">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-left">Prop</th>
                    <th className="px-4 py-2 text-left">Type</th>
                    <th className="px-4 py-2 text-left">Default</th>
                    <th className="px-4 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2">bg</td>
                    <td className="px-4 py-2">string</td>
                    <td className="px-4 py-2">undefined</td>
                    <td className="px-4 py-2">
                      Background color of the accordion
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">textColor</td>
                    <td className="px-4 py-2">string</td>
                    <td className="px-4 py-2">undefined</td>
                    <td className="px-4 py-2">Text color of the accordion</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">borderColor</td>
                    <td className="px-4 py-2">string</td>
                    <td className="px-4 py-2">undefined</td>
                    <td className="px-4 py-2">Border color of the accordion</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">shadowColor</td>
                    <td className="px-4 py-2">string</td>
                    <td className="px-4 py-2">undefined</td>
                    <td className="px-4 py-2">Shadow color of the accordion</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">collapsible</td>
                    <td className="px-4 py-2">boolean</td>
                    <td className="px-4 py-2">false</td>
                    <td className="px-4 py-2">
                      If true, allows all items to be closed
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">className</td>
                    <td className="px-4 py-2">string</td>
                    <td className="px-4 py-2">&apos;&apos;</td>
                    <td className="px-4 py-2">
                      Additional CSS classes to apply to the accordion
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </div>

          <div className="mt-20">
            <h1 className="font-minecraft-bold text-lg ml-2">
              Custom Accordion
            </h1>
            <p className="text-sm ml-2 mb-6">
              Customize your accordion&apos;s appearance by selecting a preset
              theme or creating your own color scheme.
            </p>
            <Card
              className={`w-full min-h-56 relative ${
                String(selectedTheme) === "dark" ? " bg-black text-white" : ""
              }`}
            >
              <div className="flex justify-between">
                <div className="flex flex-col gap-1 absolute top-0 left-0">
                  <p>
                    Theme: <span className="font-bold">{selectedTheme}</span>
                  </p>
                  {Object.keys(themeColors).map((theme) => (
                    <div key={theme} className="flex items-center gap-2">
                      <button
                        onClick={() => handleThemeChange(theme as ThemeOptions)}
                        className={`p-3 h-1 w-1 rounded-full border ${
                          theme === selectedTheme ? "ring-2 ring-blue-500" : ""
                        }`}
                        style={{
                          borderColor:
                            themeColors[theme as ThemeOptions].border,
                          backgroundColor:
                            themeColors[theme as ThemeOptions].bg,
                        }}
                      ></button>
                      {theme === selectedTheme && (
                        <span className="text-sm capitalize">{theme}</span>
                      )}
                    </div>
                  ))}
                  <div className="flex items-center gap-2">
                    <button onClick={() => handleThemeChange("custom")}>
                      <img
                        src="./custom.png"
                        className="h-6 w-6"
                        alt="Custom colors"
                      />
                    </button>
                    {selectedTheme === "custom" && (
                      <span className="text-sm">Custom</span>
                    )}
                  </div>
                </div>
                {selectedTheme === "custom" && (
                  <div className="flex flex-col gap-2 items-end absolute top-0 right-0">
                    <div className="flex">
                      <p>Bg color</p>
                      <input
                        type="color"
                        value={customColors.bg}
                        className="h-6 w-6"
                        onChange={(e) =>
                          handleCustomColorChange("bg", e.target.value)
                        }
                      />
                    </div>
                    <div className="flex">
                      <p>Text color</p>
                      <input
                        type="color"
                        value={customColors.text}
                        className="h-6 w-6"
                        onChange={(e) =>
                          handleCustomColorChange("text", e.target.value)
                        }
                      />
                    </div>
                    <div className="flex">
                      <p>Border color</p>
                      <input
                        type="color"
                        value={customColors.border}
                        className="h-6 w-6"
                        onChange={(e) =>
                          handleCustomColorChange("border", e.target.value)
                        }
                      />
                    </div>
                    <div className="flex">
                      <p>Shadow color</p>
                      <input
                        type="color"
                        value={customColors.shadow}
                        className="h-6 w-6"
                        onChange={(e) =>
                          handleCustomColorChange("shadow", e.target.value)
                        }
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-center items-center my-24">
                <Accordion
                  bg={
                    selectedTheme === "custom"
                      ? customColors.bg
                      : themeColors[selectedTheme as ThemeOptions].bg
                  }
                  textColor={
                    selectedTheme === "custom"
                      ? customColors.text
                      : themeColors[selectedTheme as ThemeOptions].text
                  }
                  borderColor={
                    selectedTheme === "custom"
                      ? customColors.border
                      : themeColors[selectedTheme as ThemeOptions].border
                  }
                  shadowColor={
                    selectedTheme === "custom"
                      ? customColors.shadow
                      : themeColors[selectedTheme as ThemeOptions].shadow
                  }
                  className="sm:w-1/3 w-1/2"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Section 1</AccordionTrigger>
                    <AccordionContent>Content for section 1</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Section 2</AccordionTrigger>
                    <AccordionContent>Content for section 2</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="mt-4">
                <CopyableCode code={getAccordionCode()} />
              </div>
            </Card>
          </div>

          <div className="mt-12">
            <h1 className="font-minecraft-bold text-lg ml-2">
              Additional Examples
            </h1>

            <h2 className="font-minecraft text-md ml-2 mt-4">
              Individual Custom Props
            </h2>
            <Card
              className={`w-full min-h-56 relative ${
                String(selectedTheme) === "dark" ? "bg-black text-white" : ""
              }`}
            >
              <CopyableCode
                code={`<Accordion>
      <AccordionItem 
          value="item-1"
          shadowColor="purple"
          textColor="purple">
            <AccordionTrigger>Section 1</AccordionTrigger>
            <AccordionContent>Content for section 1</AccordionContent>
      </AccordionItem>
      <AccordionItem 
          value="item-2"
          shadowColor="green"
          textColor="green">
            <AccordionTrigger>Section 2</AccordionTrigger>
            <AccordionContent>Content for section 2</AccordionContent>
      </AccordionItem>
          <AccordionItem
          value="item-3"
          shadowColor="blue"
          textColor="blue">
            <AccordionTrigger>Section 3</AccordionTrigger>
            <AccordionContent>Content for section 3</AccordionContent>
      </AccordionItem>
</Accordion>`}
              />
              <div className="w-full flex flex-col gap-4 items-center py-20 justify-center relative">
                <p className="absolute top-2 left-2">Preview:</p>
                <Accordion className="w-1/3">
                  <AccordionItem
                    value="item-1"
                    shadowColor="purple"
                    textColor="purple"
                  >
                    <AccordionTrigger>Section 1</AccordionTrigger>
                    <AccordionContent>Content for section 1</AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-2"
                    shadowColor="green"
                    textColor="green"
                  >
                    <AccordionTrigger>Section 2</AccordionTrigger>
                    <AccordionContent>Content for section 2</AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-3"
                    shadowColor="blue"
                    textColor="blue"
                  >
                    <AccordionTrigger>Section 3</AccordionTrigger>
                    <AccordionContent>Content for section 3</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
