import styles from "./ActionCard.module.css";
import { useEffect, useState } from "react";
import { Data } from "./ActionCard";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "../Modal/Modal";
import FeatherIcon from "feather-icons-react";
import { FormControl, Stack } from "@chakra-ui/react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

interface ConfirmationModalProps {
  isOpen: any;
  onClose: any;
  data: Data;
  handleConfirmation: () => void;
}

const ConfirmationModal = ({
  isOpen,
  onClose,
  data,
  handleConfirmation,
}: ConfirmationModalProps) => {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(false);
  const { number } = data;

  const handleInputChange = (e) => setInput(e.target.value);

  useEffect(() => {
    if (input !== number.toString()) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [input]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <div className={styles["confirm-header"]}>
            <div className={styles["confirm-icon"]}>
              <FeatherIcon icon={"alert-triangle"} size={24} />
            </div>
            <div className={styles["confirm-title"]}>
              Confirm delivery for Order #{number}
            </div>
            <div className={styles["confirm-sub-title"]}>
              Enter the order number to confirm delivery
            </div>
          </div>
        </ModalHeader>
        <ModalBody>
          <div>
            <FormControl className={styles["order-number"]} isInvalid={isValid}>
              <Input
                className={styles["order-number-input"]}
                placeholder="Enter order number"
                value={input}
                onChange={handleInputChange}
              />
            </FormControl>
          </div>
        </ModalBody>

        <ModalFooter>
          <Stack direction="row" spacing={4} width="100%">
            <Button
              width="100%"
              variant="primary"
              onClick={handleConfirmation}
              leftIcon={<FeatherIcon icon={"check"} size={14} />}
              isDisabled={isValid}
            >
              Confirm Delivery
            </Button>
            <Button
              width="100%"
              variant="secondary"
              onClick={onClose}
              leftIcon={<FeatherIcon icon={"x"} size={14} />}
            >
              Cancel
            </Button>
          </Stack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmationModal;
