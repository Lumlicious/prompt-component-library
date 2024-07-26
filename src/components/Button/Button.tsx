import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: CustomButtonProps) => {
  return <ChakraButton {...props}>{children}</ChakraButton>;
};

export { Button };
