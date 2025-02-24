"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CopyableCode from "../../components/CopyableCode";
import { Card, Button } from "pixel-retroui";
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

  const getButtonCode = () => {
    const colors =
      selectedTheme === "custom"
        ? customColors
        : themeColors[selectedTheme as ThemeOptions];
    return `<Button
  bg="${colors.bg}"
  textColor="${colors.text}"
  borderColor="${colors.border}"
  shadow="${colors.shadow}"
>
  Themed Button
</Button>`;
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
        <h1 className="font-minecraft-bold text-5xl">Button</h1>
        <p className=" mt-4">
          A customizable, pixel-art styled button component.
        </p>
        <div className=" mt-12">
          <h1 className="font-minecraft-bold text-lg ml-2">Basic Usage</h1>
          <CopyableCode
            code={`import { Button } from 'pixel-retroui';

function App() {
  return (
    <Button onClick={() => console.log('Clicked!')}>
      Click me!
    </Button>
  );
}`}
          />

          {/* -------------------------------------------------------- */}
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
                    <td className="px-4 py-2">&apos;#ffffff&apos;</td>
                    <td className="px-4 py-2">
                      Background color of the button
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">textColor</td>
                    <td className="px-4 py-2">string</td>
                    <td className="px-4 py-2">&apos;#000000&apos;</td>
                    <td className="px-4 py-2">Text color of the button</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">borderColor</td>
                    <td className="px-4 py-2">string</td>
                    <td className="px-4 py-2">&apos;#000000&apos;</td>
                    <td className="px-4 py-2">Border color of the button</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">shadow</td>
                    <td className="px-4 py-2">string</td>
                    <td className="px-4 py-2">&apos;#000000&apos;</td>
                    <td className="px-4 py-2">Shadow color of the button</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">onClick</td>
                    <td className="px-4 py-2">function</td>
                    <td className="px-4 py-2">undefined</td>
                    <td className="px-4 py-2">
                      Function to call when the button is clicked
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">className</td>
                    <td className="px-4 py-2">string</td>
                    <td className="px-4 py-2">&apos;&apos;</td>
                    <td className="px-4 py-2">
                      Additional CSS classes to apply to the button
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </div>

          <div className="mt-20">
            <h1 className="font-minecraft-bold text-lg ml-2">Custom Button</h1>
            <p className="text-sm ml-2 mb-6">
              Customize your button&apos;s appearance by selecting a preset
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
                <Button
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
                  shadow={
                    selectedTheme === "custom"
                      ? customColors.shadow
                      : themeColors[selectedTheme as ThemeOptions].shadow
                  }
                >
                  Themed Button
                </Button>
              </div>
              <div className="mt-4">
                <CopyableCode code={getButtonCode()} />
              </div>
            </Card>
          </div>

          {/* Additional Examples Section */}
          <div className="mt-12">
            <h1 className="font-minecraft-bold text-lg ml-2">
              Additional Examples
            </h1>

            <h2 className="font-minecraft text-md ml-2 mt-4">
              With onClick Handler
            </h2>
            <Card
              className={`w-full min-h-56 relative ${
                String(selectedTheme) === "dark" ? "bg-black text-white" : ""
              }`}
            >
              <CopyableCode
                code={`<Button 
className="w-20 h-10" 
onClick={() => alert('Button clicked!')}>
    Alert!
</Button>`}
              />
              <div className=" w-full flex flex-col gap-4 items-center py-20 justify-center relative">
                <p className=" absolute top-2 left-2">Preview:</p>
                <Button
                  className="w-20 h-10"
                  onClick={() => alert("Button clicked!")}
                >
                  Alert!
                </Button>
              </div>
            </Card>

            <h2 className="font-minecraft text-md ml-2 mt-4">
              With Additional Classes
            </h2>
            <Card
              className={`w-full min-h-56 relative ${
                String(selectedTheme) === "dark" ? "bg-black text-white" : ""
              }`}
            >
              <CopyableCode
                code={`<Button bg="darkgray" shadow="gray" className="w-full py-2">
  Full Width Button
</Button>`}
              />
              <div className=" px-10 w-full flex items-center py-20 justify-center relative">
                <p className=" absolute top-2 left-2">Preview:</p>

                <Button className="w-full py-2" bg="darkgray" shadow="gray">
                  Full Width Button
                </Button>
              </div>
            </Card>
          </div>
          {/* -------------------------------------------------------- */}
        </div>
      </div>
    </main>
  );
}

export default Page;
