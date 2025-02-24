"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CopyableCode from "../../components/CopyableCode";
import { Card, Button, Popup, Input } from "pixel-retroui";
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
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [isPopupOpen2, setIsPopupOpen2] = useState(false);

  const openPopup = () => setIsPopupOpen2(true);
  const closePopup = () => setIsPopupOpen2(false);

  const handleThemeChange = (theme: ThemeOptions | "custom") => {
    setSelectedTheme(theme);
  };

  const handleCustomColorChange = (colorType: string, color: string) => {
    setCustomColors((prev) => ({ ...prev, [colorType]: color }));
    setSelectedTheme("custom");
  };

  const getPopupCode = () => {
    const colors =
      selectedTheme === "custom"
        ? customColors
        : themeColors[selectedTheme as ThemeOptions];
    return `<div>
  <Button onClick={openPopup}>Open Popup</Button>
  
  <Popup
    isOpen={isPopupOpen}
    onClose={closePopup}
    bg="${colors.bg}"
    baseBg="${colors.shadow}"
    textColor="${colors.text}"
    borderColor="${colors.border}"
  >
    Your popup content here
  </Popup>
  </div>`;
  };

  return (
    <main className="flex z-10 min-h-screen font-minecraft flex-col w-full gap-10 p-10 py-24 xl:p-28 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <div
        className="absolute inset-0 z-0 opacity-30"
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
        <h1 className="font-minecraft-bold text-5xl">Popup</h1>
        <p className="mt-4">
          A customizable, pixel-art styled popup component for displaying modal
          content.
        </p>

        <div className="mt-12">
          <h1 className="font-minecraft-bold text-lg ml-2">Basic Usage</h1>
          <CopyableCode
            code={`import React, { useState } from 'react';
import { Button, Popup } from 'pixel-retroui';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div>
      <Button onClick={openPopup}>Open Popup</Button>

      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
      >
        Your popup content here
      </Popup>
    </div>
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
                  <td className="px-4 py-2">isOpen</td>
                  <td className="px-4 py-2">boolean</td>
                  <td className="px-4 py-2">false</td>
                  <td className="px-4 py-2">
                    Controls whether the popup is visible
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">onClose</td>
                  <td className="px-4 py-2">function</td>
                  <td className="px-4 py-2">-</td>
                  <td className="px-4 py-2">
                    Function to call when closing the popup
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">bg</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">&apos;#ffffff&apos;</td>
                  <td className="px-4 py-2">
                    Background color of the popup content
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">baseBg</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">&apos;#f0f0f0&apos;</td>
                  <td className="px-4 py-2">
                    Background color of the popup container
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">textColor</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">&apos;#000000&apos;</td>
                  <td className="px-4 py-2">Text color of the popup content</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">borderColor</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">&apos;#000000&apos;</td>
                  <td className="px-4 py-2">Border color of the popup</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">className</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">&apos;&apos;</td>
                  <td className="px-4 py-2">
                    Additional CSS classes to apply to the popup
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
        </div>

        <div className="mt-20">
          <h1 className="font-minecraft-bold text-lg ml-2">Custom Popup</h1>
          <p className="text-sm ml-2 mb-6">
            Customize your popup&apos;s appearance by selecting a preset theme
            or creating your own color scheme.
          </p>
          <Card
            className={`w-full min-h-56 relative ${
              String(selectedTheme) === "dark" ? "bg-black text-white" : ""
            }`}
          >
            {/* Theme selection and custom color inputs */}
            <div className="flex justify-between">
              <div className="flex flex-col gap-1 absolute top-0 left-0">
                <p>Theme:</p>
                {Object.keys(themeColors).map((theme) => (
                  <button
                    key={theme}
                    onClick={() => handleThemeChange(theme as ThemeOptions)}
                    className={`p-3 h-1 w-1 rounded-full border ${
                      theme === selectedTheme ? "ring-2 ring-blue-500" : ""
                    }`}
                    style={{
                      borderColor: themeColors[theme as ThemeOptions].border,
                      backgroundColor: themeColors[theme as ThemeOptions].bg,
                    }}
                  ></button>
                ))}
                <button onClick={() => handleThemeChange("custom")}>
                  <img
                    src="./custom.png"
                    className="h-6 w-6"
                    alt="Custom colors"
                  />
                </button>
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
                </div>
              )}
            </div>
            {/* ... (similar to previous components) ... */}

            <div className="flex justify-center items-center my-24">
              <Button
                onClick={() => setIsPopupOpen(true)}
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
                    ? customColors.border
                    : themeColors[selectedTheme as ThemeOptions].shadow
                }
              >
                Open Popup
              </Button>
              <Popup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                bg={
                  selectedTheme === "custom"
                    ? customColors.bg
                    : themeColors[selectedTheme as ThemeOptions].bg
                }
                baseBg={
                  selectedTheme === "custom"
                    ? customColors.shadow
                    : themeColors[selectedTheme as ThemeOptions].shadow
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
                className=" text-center"
              >
                <h2 className="text-xl mb-4">Welcome!</h2>
                <p>Hope you are having a great day.</p>
              </Popup>
            </div>
            <div className="mt-4">
              <CopyableCode code={getPopupCode()} />
            </div>
          </Card>
        </div>

        <div className="mt-12">
          <h1 className="font-minecraft-bold text-lg ml-2">
            Additional Examples
          </h1>

          <h2 className="font-minecraft text-md ml-2 mt-4">
            With Custom Content and Classes
          </h2>
          <Card
            className={`w-full min-h-56 relative ${
              String(selectedTheme) === "dark" ? "bg-black text-white" : ""
            }`}
          >
            <CopyableCode
              code={`<div>
  <Button bg="gray" onClick={openPopup}>Open form</Button>
  <Popup
    bg="darkgray"
    baseBg="gray"
    isOpen={isPopupOpen}
    onClose={closePopup}
    className="text-center">
      <h1 className="text-3xl mb-4">Welcome!</h1>
      <p className="mb-4"> Please login to continue.</p>
      <form onSubmit={handleSubmit} className=" flex flex-col gap-4 items-center">
        <Input bg="#f2f2f2" placeholder="Username" />
        <Input bg="#f2f2f2" type="password" placeholder="Password" />
        <Button bg="gray" type="submit" className=" w-20">
          Login
        </Button>
      </form>
    </Popup>
</div>`}
            />
            <div className=" w-full flex items-center py-20 justify-center relative">
              <p className=" absolute top-2 left-2">Preview:</p>
              <div>
                <Button bg="gray" onClick={openPopup}>
                  Open form
                </Button>
                <Popup
                  isOpen={isPopupOpen2}
                  onClose={closePopup}
                  className="text-center"
                  bg="darkgray"
                  baseBg="gray"
                >
                  <h1 className="text-3xl mb-4">Welcome!</h1>
                  <p className="mb-4"> Hi there! Please enter you details.</p>
                  <form
                    onSubmit={closePopup}
                    className=" flex flex-col gap-4 items-center"
                  >
                    <Input bg="#f2f2f2" placeholder="Username" />
                    <Input
                      bg="#f2f2f2"
                      type="password"
                      placeholder="Password"
                    />
                    <Button bg="gray" type="submit" className=" w-20">
                      Login
                    </Button>
                  </form>
                </Popup>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}

export default Page;
