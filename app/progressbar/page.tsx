"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CopyableCode from "../../components/CopyableCode";
import { Card, ProgressBar } from "pixel-retroui";
import { themeColors, ThemeOptions } from "../themes";
import Navbar from "../../components/Navbar";

function Page() {
  const router = useRouter();
  const [selectedTheme, setSelectedTheme] = useState<ThemeOptions | "custom">(
    "pop"
  );
  const [customColors, setCustomColors] = useState({
    bg: "#ffffff",
    color: "#000000",
    border: "#000000",
  });
  const [progress, setProgress] = useState(50);

  const handleThemeChange = (theme: ThemeOptions | "custom") => {
    setSelectedTheme(theme);
  };

  const handleCustomColorChange = (colorType: string, color: string) => {
    setCustomColors((prev) => ({ ...prev, [colorType]: color }));
    setSelectedTheme("custom");
  };

  const getProgressBarCode = () => {
    const colors =
      selectedTheme === "custom"
        ? customColors
        : themeColors[selectedTheme as ThemeOptions];
    return `<ProgressBar
  size="md"
  color="${colors.bg}"
  borderColor="${colors.border}"
  className="w-full"
  progress={${progress}}
/>`;
  };

  return (
    <main className="flex z-10 min-h-screen font-minecraft flex-col w-full gap-10 p-10 py-24 xl:p-28  bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage:
            "url('https://tse1.mm.bing.net/th?id=OIP.3TCx9qKNvsGIehvF4OZWlwHaFu&pid=15.1')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <Navbar />

      <div className="z-10">
        <h1 className="font-minecraft-bold text-5xl">Progress Bar</h1>
        <p className="mt-4">
          A customizable, pixel-art styled progress bar component.
        </p>

        <div className="mt-12">
          <h1 className="font-minecraft-bold text-lg ml-2">Basic Usage</h1>
          <CopyableCode
            code={`import { ProgressBar } from 'pixel-retroui';

function App() {
  return (
    <ProgressBar
      size="md"
      color="pink"
      borderColor="black"
      className="w-full"
      progress={50}
    />
  );
}`}
          />
        </div>

        <div className="mt-12">
          <h1 className="font-minecraft-bold text-lg ml-2">Props</h1>
          <Card className="w-full overflow-x-auto bg-opacity-30 bg-white">
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
                  <td className="px-4 py-2">size</td>
                  <td className="px-4 py-2">
                    &apos;sm&apos; | &apos;md&apos; | &apos;lg&apos;
                  </td>
                  <td className="px-4 py-2">&apos;md&apos;</td>
                  <td className="px-4 py-2">Size of the progress bar</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">color</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">&apos;pink&apos;</td>
                  <td className="px-4 py-2">Color of the progress indicator</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">borderColor</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">&apos;black&apos;</td>
                  <td className="px-4 py-2">
                    Border color of the progress bar
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">progress</td>
                  <td className="px-4 py-2">number</td>
                  <td className="px-4 py-2">0</td>
                  <td className="px-4 py-2">Progress value (0-100)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">className</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">&apos;&apos;</td>
                  <td className="px-4 py-2">Additional CSS classes</td>
                </tr>
              </tbody>
            </table>
          </Card>
        </div>

        <div className="mt-20">
          <h1 className="font-minecraft-bold text-lg ml-2">
            Custom ProgressBar
          </h1>
          <p className="text-sm ml-2 mb-6">
            Customize your progress bar&apos;s appearance by selecting a preset
            theme or creating your own color scheme.
          </p>
          <Card
            className={`w-full min-h-56 relative ${
              String(selectedTheme) === "dark" ? "bg-black text-white" : ""
            }`}
          >
            {/* Theme selection and custom color inputs */}
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
                        borderColor: themeColors[theme as ThemeOptions].border,
                        backgroundColor: themeColors[theme as ThemeOptions].bg,
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
                    <p>Bar color</p>
                    <input
                      type="color"
                      value={customColors.bg}
                      className="h-6 w-6"
                      onChange={(e) =>
                        handleCustomColorChange("color", e.target.value)
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
                </div>
              )}
            </div>
            {/* ... (similar to previous components) ... */}

            <div className="flex justify-center items-center my-24">
              <ProgressBar
                size="md"
                color={
                  selectedTheme === "custom"
                    ? customColors.color
                    : themeColors[selectedTheme as ThemeOptions].shadow
                }
                borderColor={
                  selectedTheme === "custom"
                    ? customColors.border
                    : themeColors[selectedTheme as ThemeOptions].border
                }
                className=" w-1/2"
                progress={progress}
              />
            </div>
            <div className=" flex justify-center items-center">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={(e) => setProgress(Number(e.target.value))}
                className="w-full max-w-xs"
              />
              <span className="ml-4">{progress}%</span>
            </div>
            <div className="mt-4">
              <CopyableCode code={getProgressBarCode()} />
            </div>
          </Card>
        </div>

        <div className="mt-12">
          <h1 className="font-minecraft-bold text-lg ml-2">
            Additional Examples
          </h1>

          <h2 className="font-minecraft text-md ml-2 mt-4">
            Different Sizes with Custom Colors
          </h2>

          <Card
            className={`w-full min-h-56 relative ${
              String(selectedTheme) === "dark" ? "bg-black text-white" : ""
            }`}
          >
            <CopyableCode
              code={`<ProgressBar size="sm" color="gray" progress={25} className="w-1/3" />
<ProgressBar size="md" color="green" progress={50} className="w-1/3" />
<ProgressBar size="lg" color="skyblue" progress={75} className="w-1/3" />`}
            />
            <div className=" w-full flex flex-col gap-4 items-center py-20 justify-center relative">
              <p className=" absolute top-2 left-2">Preview:</p>

              <ProgressBar
                size="sm"
                color="gray"
                progress={25}
                className="w-1/3"
              />
              <ProgressBar
                size="md"
                color="green"
                progress={50}
                className="w-1/3"
              />
              <ProgressBar
                size="lg"
                color="skyblue"
                progress={75}
                className="w-1/3"
              />
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}

export default Page;
