import "./App.css";
import { Button } from "./components/Button/Button";
import { FormControl, useDisclosure } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import FeatherIcon from "feather-icons-react";
import { Badge } from "./components/Badge/Badge";
import { Card, CardHeader, CardBody } from "./components/Card/Card";
import { Action, Actions } from "./components/Card/Actions/Actions";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "./components/Modal/Modal";
import { Input } from "./components/Input/Input";
import { useEffect, useState } from "react";

interface Data {
  number: number;
  companyName: string;
}

const data: Data = {
  number: 123456,
  companyName: "Spliff Decision",
};

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { number, companyName } = data;

  const handleInputChange = (e) => setInput(e.target.value);

  useEffect(() => {
    if (input !== number.toString()) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [input]);

  const handleConfirmation = () => {
    setIsConfirmed(true);
    onClose();
  };

  const handleOpenModal = () => {
    if (!isConfirmed) {
      onOpen();
    }
  };

  return (
    <div style={{ padding: "24px" }}>
      <ActionCard data={data} />
      {/* <Card>
        <CardHeader>
          <div className="card-title">Order #{number}</div>
          <div className="card-subtitle">{companyName}</div>
        </CardHeader>
        <CardBody>
          <Actions>
            <Action onClick={handleOpenModal}>
              <div className={`action ${isConfirmed && "confirmed"}`}>
                <div className="action-icon">
                  <FeatherIcon icon={"package"} size={16} />
                </div>
                Confirm Delivery
              </div>
              {isConfirmed && <Badge color="green">Confirmed</Badge>}
            </Action>
            <Action>
              <div className="action">
                <div className="action-icon">
                  <FeatherIcon icon={"dollar-sign"} size={16} />
                </div>
                Record Payment
              </div>
            </Action>
          </Actions>
        </CardBody>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <div className="confirm-header">
              <div className="confirm-icon">
                <FeatherIcon icon={"alert-triangle"} size={24} />
              </div>
              <div className="confirm-title">
                Confirm delivery for Order #{number}
              </div>
              <div className="confirm-sub-title">
                Enter the order number to confirm delivery
              </div>
            </div>
          </ModalHeader>
          <ModalBody>
            <div>
              <FormControl className="order-number" isInvalid={isValid}>
                <Input
                  className="order-number-input"
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
      </Modal> */}
    </div>
  );
}

interface ActionCardProps {
  data: Data;
}

const ActionCard = ({ data }: ActionCardProps) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { number, companyName } = data;

  const handleOpenModal = () => {
    if (!isConfirmed) {
      onOpen();
    }
  };

  const handleConfirmation = () => {
    setIsConfirmed(true);
    onClose();
  };

  return (
    <>
      <Card>
        <CardHeader>
          <div className="card-title">Order #{number}</div>
          <div className="card-subtitle">{companyName}</div>
        </CardHeader>
        <CardBody>
          <Actions>
            <Action onClick={handleOpenModal}>
              <div className={`action ${isConfirmed && "confirmed"}`}>
                <div className="action-icon">
                  <FeatherIcon icon={"package"} size={16} />
                </div>
                Confirm Delivery
              </div>
              {isConfirmed && <Badge color="green">Confirmed</Badge>}
            </Action>
            <Action>
              <div className="action">
                <div className="action-icon">
                  <FeatherIcon icon={"dollar-sign"} size={16} />
                </div>
                Record Payment
              </div>
            </Action>
          </Actions>
        </CardBody>
      </Card>
      <ConfirmationModal
        isOpen={isOpen}
        onClose={onClose}
        data={data}
        handleConfirmation={handleConfirmation}
      />
    </>
  );
};

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
          <div className="confirm-header">
            <div className="confirm-icon">
              <FeatherIcon icon={"alert-triangle"} size={24} />
            </div>
            <div className="confirm-title">
              Confirm delivery for Order #{number}
            </div>
            <div className="confirm-sub-title">
              Enter the order number to confirm delivery
            </div>
          </div>
        </ModalHeader>
        <ModalBody>
          <div>
            <FormControl className="order-number" isInvalid={isValid}>
              <Input
                className="order-number-input"
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

export default App;
