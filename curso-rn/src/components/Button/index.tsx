import React from "react";
import { TouchableOpacity } from "react-native";
import { s } from "./styles";

interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  color: string;
}

const Button = ({ children, onPress, color }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[s.button, { backgroundColor: color }]}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Button;
