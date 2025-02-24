"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CopyableCode from "../../components/CopyableCode";
import {
  Card,
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
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

  const getDropdownCode = () => {
    const colors =
      selectedTheme === "custom"
        ? customColors
        : themeColors[selectedTheme as ThemeOptions];
    return `<DropdownMenu
  bg="${colors.bg}"
  textColor="${colors.text}"
  borderColor="${colors.border}"
  shadowColor="${colors.shadow}"
>
  <DropdownMenuTrigger>
    Click me
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Option 1</DropdownMenuItem>
    <DropdownMenuItem>Option 2</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Option 3</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`;
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
        <h1 className="font-minecraft-bold text-5xl">Dropdown</h1>
        <p className="mt-4">
          A customizable, pixel-art styled dropdown menu component with support
          for triggers, content, items, and separators.
        </p>

        <div className="mt-12">
          <h1 className="font-minecraft-bold text-lg ml-2">Basic Usage</h1>
          <CopyableCode
            code={`import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from 'pixel-retroui';

function App() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        Open Menu
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
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
                  <th className="px-4 py-2 text-left">Component</th>
                  <th className="px-4 py-2 text-left">Prop</th>
                  <th className="px-4 py-2 text-left">Type</th>
                  <th className="px-4 py-2 text-left">Default</th>
                  <th className="px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2" rowSpan={5}>
                    DropdownMenu
                  </td>
                  <td className="px-4 py-2">bg</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">#ffffff</td>
                  <td className="px-4 py-2">
                    Background color of the dropdown
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">textColor</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">#000000</td>
                  <td className="px-4 py-2">Text color of the dropdown</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">borderColor</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">#000000</td>
                  <td className="px-4 py-2">Border color of the dropdown</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">shadowColor</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">#000000</td>
                  <td className="px-4 py-2">Shadow color of the dropdown</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">className</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2"></td>
                  <td className="px-4 py-2">Additional CSS classes</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2" rowSpan={4}>
                    DropdownMenuTrigger
                  </td>
                  <td className="px-4 py-2">bg</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">#ffffff</td>
                  <td className="px-4 py-2">
                    Background color of the trigger button
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">textColor</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">#000000</td>
                  <td className="px-4 py-2">
                    Text color of the trigger button
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">shadow</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">#000000</td>
                  <td className="px-4 py-2">
                    Shadow color of the trigger button
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">borderColor</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">#000000</td>
                  <td className="px-4 py-2">
                    Border color of the trigger button
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
        </div>

        <div className="mt-20">
          <h1 className="font-minecraft-bold text-lg ml-2">Custom Dropdown</h1>
          <p className="text-sm ml-2 mb-6">
            Customize your dropdown&apos;s appearance by selecting a preset
            theme or creating your own color scheme.
          </p>
          <Card
            className={`w-full min-h-56 relative ${
              String(selectedTheme) === "dark" ? "bg-black text-white" : ""
            }`}
          >
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
              <DropdownMenu
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
              >
                <DropdownMenuTrigger>Click me</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Option 1</DropdownMenuItem>
                  <DropdownMenuItem>Option 2</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Option 3</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="mt-4">
              <CopyableCode code={getDropdownCode()} />
            </div>
          </Card>
        </div>

        <div className="mt-12">
          <h1 className="font-minecraft-bold text-lg ml-2">
            Additional Examples
          </h1>

          <h2 className="font-minecraft text-md ml-2 mt-8">
            With Nested Content and Hover Effects
          </h2>
          <Card
            className={`w-full min-h-56 relative ${
              String(selectedTheme) === "dark" ? "bg-black text-white" : ""
            }`}
          >
            <CopyableCode
              code={`<DropdownMenu>
  <DropdownMenuTrigger 
    bg="#E0EFF2"
    className="hover:bg-blue-100 transition-colors duration-200"
  >
    File Options
  </DropdownMenuTrigger>
  <DropdownMenuContent 
    bg="#E0EFF2" 
    className="w-48"
  >
    <DropdownMenuItem className="hover:bg-blue-100 transition-colors duration-200">
      <div className="flex items-center gap-2">
        <span className="text-lg">📄</span>
        <span>New File</span>
      </div>
    </DropdownMenuItem>
    <DropdownMenuItem className="hover:bg-blue-100 transition-colors duration-200">
      <div className="flex items-center gap-2">
        <span className="text-lg">📁</span>
        <span>Open Folder</span>
      </div>
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="hover:bg-blue-100 transition-colors duration-200">
      <div className="flex items-center gap-2">
        <span className="text-lg">💾</span>
        <span>Save</span>
      </div>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
            />
            <div className="w-full flex items-center py-20 justify-center relative">
              <p className="absolute top-2 left-2">Preview:</p>
              <DropdownMenu>
                <DropdownMenuTrigger
                  bg="#E0EFF2"
                  className="hover:bg-blue-100 transition-colors duration-200"
                >
                  File Options
                </DropdownMenuTrigger>
                <DropdownMenuContent bg="#E0EFF2" className="w-48">
                  <DropdownMenuItem className="hover:bg-blue-100 transition-colors duration-200">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">📄</span>
                      <span>New File</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-blue-100 transition-colors duration-200">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">📁</span>
                      <span>Open Folder</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="hover:bg-blue-100 transition-colors duration-200">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">💾</span>
                      <span>Save</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}

export default Page;
