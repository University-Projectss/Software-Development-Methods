import React, { CSSProperties } from "react";

interface BubbleMessageProps {
  text: string;
  isFromMe: boolean;
}

export const BubbleMessage: React.FC<BubbleMessageProps> = ({
  text,
  isFromMe,
}) => {
  const bubbleStyle: CSSProperties = {
    backgroundColor: isFromMe ? "#007aff" : "#f0f0f0",
    color: isFromMe ? "#fff" : "#000",
    borderRadius: "20px",
    maxWidth: "75%",
    padding: "10px",
    marginTop: "10px",
    marginBottom: "10px",
    marginLeft: isFromMe ? "auto" : "10px",
    marginRight: isFromMe ? "10px" : "auto",
    textAlign: "left",
  };

  return <div style={bubbleStyle}>{text}</div>;
};
