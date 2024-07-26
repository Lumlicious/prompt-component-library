import { Input as ChakraInput, InputProps } from "@chakra-ui/react";

const Input = ({ children, ...props }: InputProps) => {
  return <ChakraInput {...props}>{children}</ChakraInput>;
};

export { Input };
