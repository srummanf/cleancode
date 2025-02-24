import React, { useState } from "react";
import { Card } from "pixel-retroui";
import Image from "next/image";
import { Highlight, themes } from "prism-react-renderer";

interface CopyableCodeProps {
  code: string;
  className?: string;
}

const customTheme = {
  ...themes.github,
  styles: [
    {
      types: ["punctuation"],
      style: {
        color: "#000000",
      },
    },
    {
      types: ["string", "comment", "attr-value", "keyword", "operator"],
      style: {
        color: "#8B4513",
      },
    },
    {
      types: ["tag"],
      style: {
        color: "#808080",
      },
    },
  ],
};

const CopyableCode: React.FC<CopyableCodeProps> = ({ code, className }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Card className={`relative ${className}`}>
      <Highlight theme={customTheme} code={code} language="tsx">
        {({ className, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`p-4 whitespace-pre-wrap break-words text-[13px] ${className}`}
            style={{
              backgroundColor: "transparent",
              margin: 0,
              fontFamily: "'Fira Code', monospace",
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <button
        onClick={copyToClipboard}
        className="absolute top-3 right-3 p-1.5 rounded-md hover:bg-gray-100 transition-colors duration-200"
      >
        {copied ? (
          <span className="text-xs font-minecraft px-2 py-1 rounded">
            Copied!
          </span>
        ) : (
          <div className="hover:opacity-75 transition-opacity">
            <Image src="/copy.svg" alt="Copy" width={16} height={16} />
          </div>
        )}
      </button>
    </Card>
  );
};

export default CopyableCode;
