import {
  Modal as ChakraModal,
  ModalOverlay as ChakraModalOverlay,
  ModalContent as ChakraModalContent,
  ModalHeader as ChakraModalHeader,
  ModalFooter as ChakraModalFooter,
  ModalBody as ChakraModalBody,
  ModalProps,
  ModalOverlayProps,
  ModalContentProps,
  ModalHeaderProps,
  ModalFooterProps,
  ModalBodyProps,
} from "@chakra-ui/react";

const Modal = ({ children, ...props }: ModalProps) => {
  return <ChakraModal {...props}>{children}</ChakraModal>;
};

const ModalOverlay = ({ children, ...props }: ModalOverlayProps) => {
  return <ChakraModalOverlay {...props}>{children}</ChakraModalOverlay>;
};
const ModalContent = ({ children, ...props }: ModalContentProps) => {
  return <ChakraModalContent {...props}>{children}</ChakraModalContent>;
};
const ModalHeader = ({ children, ...props }: ModalHeaderProps) => {
  return <ChakraModalHeader {...props}>{children}</ChakraModalHeader>;
};
const ModalFooter = ({ children, ...props }: ModalFooterProps) => {
  return <ChakraModalFooter {...props}>{children}</ChakraModalFooter>;
};
const ModalBody = ({ children, ...props }: ModalBodyProps) => {
  return <ChakraModalBody {...props}>{children}</ChakraModalBody>;
};

export {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
};
