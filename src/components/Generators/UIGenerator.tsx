import React, { ReactNode, useState } from "react";
import Navigation from "../Navigation/Navigation";
import useSocket from "../../hooks/useSocket";
import Chatbot from "../ChatBot/Chatbot";

interface IUIGeneratorProps {
  children: ReactNode;
}

const UIGenerator: React.FC<IUIGeneratorProps> = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <Chatbot />
    </div>
  );
};

export default UIGenerator;
