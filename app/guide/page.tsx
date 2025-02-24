"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card } from "pixel-retroui";
import React, { useState, useEffect, useRef } from "react";
import CopyableCode from "../../components/CopyableCode";
import Navbar from "../../components/Navbar";

function Page() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("");
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index: any) => {
    setOpenItem(openItem === index ? null : index);
  };

  const sections = [
    { id: "coreprinciples", title: "Core Principles" },
    { id: "cleancodetips", title: "Clean Code Tips" },
    { id: "next-steps", title: "Next Steps" },
  ];

  const troubleshootingItems = [
    // {
    //   title: "Getting server error",
    //   content: (
    //     <>
    //       You might wana add{" "}
    //       <span className="font-mono bg-gray-200 p-1 rounded-md">
    //         &quot;use client&quot;;
    //       </span>{" "}
    //       on top of your page.
    //     </>
    //   ),
    // },
    {
      title: "Meaningful Names",
      content: (
        <>
          Use descriptive names for variables, functions, classes, and other
          identifiers. A well-chosen name can convey the purpose of the entity,
          making the code more understandable.
          <CopyableCode
            code={`# Bad variable name
x = 5

# Good variable name
total_score = 5`}
            className="w-full md:w-1/2 mt-3 md:mt-5"
          />
        </>
      ),
    },
    {
      title: "Consistent Formatting and Indentation",
      content: (
        <>
          Adhere to a consistent coding style and indentation. This makes the
          codebase look clean and organized. Most programming languages have
          community-accepted coding standards (e.g., PEP 8 for Python, eslint
          for JavaScript) that you should follow. Consistency also applies to
          naming conventions, spacing, and code structure.
          <CopyableCode
            code={`// Inconsistent formatting
if(condition){
    doSomething();
  } else {
      doSomethingElse();
}

// Consistent formatting
if (condition) {
    doSomething();
} else {
    doSomethingElse();
}`}
            className="w-full md:w-1/2 mt-3 md:mt-5"
          />
        </>
      ),
    },
    {
      title: "DRY (Don't Repeat Yourself) Principle",
      content: (
        <>
          Avoid duplicating code. Repeated code is harder to maintain and
          increases the risk of inconsistencies. Extract common functionality
          into functions, methods, or classes to promote code reusability.
          <div className="flex gap-x-6">
            <CopyableCode
              code={`// ❌ Violates DRY
function bookPrice(q, p) {
    return q * p;
}

function laptopPrice(q, p) {
    return q * p;
}

console.log(bookPrice(3, 25));
console.log(laptopPrice(2, 800)); `}
              className="w-full md:w-1/2 mt-3 md:mt-5"
            />
            <CopyableCode
              code={`// ✅ Follows DRY
function price(q, p) {
    return q * p;
}

console.log(price(3, 25));  // Book price
console.log(price(2, 800)); // Laptop price`}
              className="w-full md:w-1/2 mt-3 md:mt-5"
            />
          </div>
        </>
      ),
    },
    {
      title: "Single Responsibility",
      content:
        "Each function or class should have one reason to change. Break complex tasks into smaller, focused pieces of code.",
    },
    {
      title: "Write Tests",
      content: (
        <>
          Write unit tests to verify your code's correctness. Test-driven
          development (TDD) can help you write cleaner code by forcing you to
          consider edge cases and expected behavior upfront.
          <CopyableCode
            code={`// Example using JavaScript and the Jest testing framework
test('addition works correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
});
`}
            className="w-full md:w-1/2 mt-3 md:mt-5"
          />
        </>
      ),
    },
    {
      title: "Keep Functions Small",
      content: (
        <>
          Functions should do one thing, do it well, and do it only. Aim for
          functions that are small enough to fit on a screen.
          <CopyableCode
            code={`// Long and complex function
function processUserData(user) {
    // Many lines of code...
}

// Refactored into smaller functions
function validateUserInput(userInput) {
    // Validation logic...
}

function saveUserToDatabase(user) {
    // Database operation...
}
`}
            className="w-full md:w-1/2 mt-3 md:mt-5"
          />
        </>
      ),
    },
    {
      title: "Use Version Control Properly",
      content:
        "Write meaningful commit messages and make small, focused commits. Each commit should represent a single logical change.",
    },
    {
      title: "Document with Care",
      content: (
        <>
          Use comments sparingly, and when you do, make them meaningful. Write
          documentation that explains "why" rather than "what". The code should
          be clear enough to show what it does. Documentation, such as inline
          comments and README files, helps other developers understand your
          code's purpose and usage.
          <div className="flex gap-x-6">
            <CopyableCode
              code={`❌
x = x + 1  # Increment x`}
              className="w-full md:w-1/2 mt-3 md:mt-5"
            />
            <CopyableCode
              code={`✅
# Calculate the total score by incrementing x
total_score = x + 1
`}
              className="w-full md:w-1/2 mt-3 md:mt-5"
            />
          </div>
        </>
      ),
    },
    {
      title: "Error Handling",
      content: (
        <>
          Handle errors gracefully and provide meaningful error messages. Don't
          swallow exceptions or return null when an error occurs.
          <div className="flex gap-x-6">
            <CopyableCode
              code={`❌
try {
    result = divide(x, y);
} catch (error) {
    console.error("An error occurred");
}`}
              className="w-full md:w-1/2 mt-3 md:mt-5"
            />
            <CopyableCode
              code={`✅
try {
    result = divide(x, y);
} catch (error) {
    console.error(
        error instanceof ZeroDivisionError ? "Division by zero:" :
        error instanceof ValueError ? "Invalid input:" : 
        "Unexpected error:", 
        error.message
    );
}
`}
              className="w-full md:w-1/2 mt-3 md:mt-5"
            />
          </div>
        </>
      ),
    },
    {
      title: "Continuous Refactoring",
      content: (
        <>
          Refactor your code regularly. As requirements change and your
          understanding of the problem domain deepens, adjust your code
          accordingly. Refactoring helps maintain clean code as the project
          evolves. Suppose you have a function that calculates the total price
          of items in a shopping cart with a fixed discount percentage:
          <CopyableCode
            code={`function calcTotal(cart) {
    return cart.reduce((sum, item) => sum + item.price, 0) * 0.9;
}`}
            className="w-full md:w-1/2 mt-3 md:mt-5"
          />
          <p className="mt-3">
            Initially, this function calculates the total price and applies a
            fixed discount of 10%. However, as the project evolves, you realize
            that you need to support variable discounts. To refactor the code to
            make it more flexible, you can introduce a discount parameter:
          </p>
          <CopyableCode
            code={`function calcTotal(cart, discount = 10) {
    if (discount < 0 || discount > 100) throw new Error("Invalid discount!");
    return cart.reduce((sum, item) => sum + item.price, 0) * (1 - discount / 100);
}`}
            className="w-full md:w-1/2 mt-3 md:mt-5"
          />
        </>
      ),
    },
    // {
    //   title: "Tailwind classes not working",
    //   content: (
    //     <>
    //       Ensure that you have added{" "}
    //       <span className="font-mono bg-gray-200 p-1 rounded-md">
    //         important: true
    //       </span>{" "}
    //       in tailwind.config.ts.
    //     </>
    //   ),
    // },
  ];

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen font-minecraft flex-col w-full gap-5 p-4 md:p-8 lg:p-16 xl:p-32 relative overflow-hidden pt-16">
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://tse1.mm.bing.net/th?id=OIP.3TCx9qKNvsGIehvF4OZWlwHaFu&pid=15.1')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          }}
        ></div>

        <button
          className="absolute top-20 left-2 md:left-8 underline font-minecraft text-sm flex items-center"
          onClick={() => router.push("/")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home Page
        </button>

        {/* ------------------------------------------ */}
        <div className="hidden lg:block fixed right-4 top-1/2 transform z-50 -translate-y-1/2 bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-minecraft-bold mb-2">Index</h2>
          <ul>
            {sections.map((section) => (
              <li key={section.id} className="mb-2">
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left ${
                    activeSection === section.id
                      ? "font-bold text-blue-500"
                      : ""
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* ------------------------------------------ */}

        <div className="mt-32 sm:mt-20 md:mt-20 lg:mt-10 z-10">
          <h1 className="font-minecraft-bold text-3xl md:text-5xl">
            Why Clean Code?
          </h1>
          <p className="mt-2 md:mt-4 text-sm md:text-base">
            Writing clean code is an art that transforms complex problems into
            elegant, maintainable solutions. It's not just about making code
            work—it's about making code that's easy to understand, modify, and
            scale. Clean code is the foundation of every successful software
            project, and it's the key to building maintainable, high-quality
            applications.
          </p>

          <hr className="mt-6 mb-6 md:mt-10 md:mb-10 h-2" color="black" />
          <div className="mt-6 md:mt-10">
            {/* Core Principles */}
            <div id="coreprinciples" className="mt-6 md:mt-10">
              <div className="flex items-center">
                <div className="hidden md:flex bg-black text-white rounded-full w-10 h-10 items-center justify-center mr-4 flex-shrink-0">
                  1
                </div>
                <h1 className="font-minecraft-bold text-2xl md:text-3xl">
                  Core Principles
                </h1>
              </div>
              {/* <p className="mt-2 md:mt-4 md:ml-12 text-xs md:text-sm">
                Start by creating a new project. The setup requires a NextJS/
                ReactJS app with Typescript & Tailwind.
              </p> */}
              <div className="md:ml-12">
                <div className="flex flex-col gap-3 mt-4 md:mt-6 w-full">
                  <div className="flex gap-3 mt-4 md:mt-6 w-full">
                    <div className="w-full md:w-1/2">
                      {/* <h2 className="text-xs">For NextJS:</h2> */}
                      <Card
                        bg="#fefcd0"
                        textColor="black"
                        borderColor="black"
                        shadowColor="#c381b5"
                        className="p-4 text-center"
                      >
                        <h2 className="font-minecraft-bold">
                          DRY (Don't Repeat Yourself)
                        </h2>
                        <p>
                          Every piece of knowledge must have a single,
                          unambiguous, authoritative representation within a
                          system.
                        </p>
                      </Card>
                    </div>
                    <div className="w-full md:w-1/2">
                      {/* <h2 className="text-xs">For NextJS:</h2> */}
                      <Card
                        bg="#fefcd0"
                        textColor="black"
                        borderColor="black"
                        shadowColor="#c381b5"
                        className="p-4 text-center"
                      >
                        <h2 className="font-minecraft-bold">SOLID</h2>
                        <p>
                          Five principles of Object-Oriented Design that make
                          software more understandable, flexible, and
                          maintainable.
                        </p>
                      </Card>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4 md:mt-6 w-full">
                    <div className="w-full md:w-1/2">
                      {/* <h2 className="text-xs">For NextJS:</h2> */}
                      <Card
                        bg="#fefcd0"
                        textColor="black"
                        borderColor="black"
                        shadowColor="#c381b5"
                        className="p-4 text-center"
                      >
                        <h2 className="font-minecraft-bold">
                          KISS (Keep It Simple, Stupid)
                        </h2>
                        <p>
                          Systems work best when they are kept simple rather
                          than made complex.
                        </p>
                      </Card>
                    </div>
                    <div className="w-full md:w-1/2">
                      {/* <h2 className="text-xs">For NextJS:</h2> */}
                      <Card
                        bg="#fefcd0"
                        textColor="black"
                        borderColor="black"
                        shadowColor="#c381b5"
                        className="p-4 text-center"
                      >
                        <h2 className="font-minecraft-bold">
                          YAGNI (You Aren't Gonna Need It)
                        </h2>
                        <p>
                          Avoid implementing premature functionality before it's
                          actually required.
                        </p>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-6 mb-6 md:mt-10 md:mb-10 h-1" color="black" />
            {/* Clean Code Tips */}
            <div id="cleancodetips" className="mt-6 md:mt-10">
            <div className="flex items-center mb-8">
                <div className="hidden md:flex bg-black text-white rounded-full w-10 h-10 items-center justify-center mr-4 flex-shrink-0">
                  2
                </div>
                <h1 className="font-minecraft-bold text-2xl md:text-3xl">
                  Clean Code Tips
                </h1>
              </div>
              <div className=" space-y-8">
                {troubleshootingItems.map((item, index) => (
                  <Card key={index} className="lg:w-1/2 overflow-hidden">
                    <button
                      className="flex gap-4 items-center w-full p-4 text-left font-minecraft-bold text-lg md:text-xl"
                      onClick={() => toggleItem(index)}
                    >
                      <div
                        className="w-6 h-6 relative transition-transform duration-300 ease-in-out"
                        style={{
                          transform:
                            openItem === index
                              ? "rotate(90deg)"
                              : "rotate(0deg)",
                        }}
                      >
                        <Image
                          src="/arrow.svg"
                          alt="Toggle"
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                      {item.title}
                    </button>
                    <div
                      className="transition-all duration-300 ease-in-out"
                      style={{
                        maxHeight: openItem === index ? "1000px" : "0",
                        opacity: openItem === index ? 1 : 0,
                        overflow: "hidden",
                      }}
                    >
                      <div className="p-4 text-xs md:text-sm border-t border-gray-200">
                        {item.content}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            <hr className="mt-6 mb-6 md:mt-10 md:mb-10 h-1" color="black" />
            {/* Next Steps */}
            <div id="next-steps" className="mt-6 md:mt-10">
              <h1 className="font-minecraft-bold text-2xl md:text-3xl">
                Next Steps
              </h1>
              <ul className="list-disc list-inside mt-2 md:mt-4 text-xs md:text-sm">
                <li>
                  Check out this{" "}
                  <a
                    href="https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29"
                    className="underline"
                    target="_blank"
                  >
                    GitHub repository
                  </a>{" "}
                  for examples and best practices.
                </li>
              </ul>

              <p className="mt-4 md:mt-6 text-xs md:text-sm">
                Keep your code clean and your brain rot-free!
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Page;
