import React, { useState, useEffect } from "react";

const Message = ({ text, type = "success" }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [text]);

  if (!visible) return null;

  const bgColor = type === "success" ? "bg-green-100" : "bg-red-100";
  const textColor = type === "success" ? "text-green-700" : "text-red-700";
  const borderColor = type === "success" ? "border-green-400" : "border-red-400";

  return (
    <div
      className={`${bgColor} border ${borderColor} ${textColor} px-4 py-2 rounded shadow mb-4`}
    >
      {text}
    </div>
  );
};

export default Message;
