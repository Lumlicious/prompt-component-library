import styles from "./ActionCard.module.css";
import { useDisclosure } from "@chakra-ui/react";

import FeatherIcon from "feather-icons-react";
import { Badge } from "..//Badge/Badge";
import { Card, CardHeader, CardBody } from "../Card/Card";
import { Action, Actions } from "../Card/Actions/Actions";

import { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";

export interface Data {
  number: number;
  companyName: string;
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
          <div className={styles["card-title"]}>Order #{number}</div>
          <div className={styles["card-subtitle"]}>{companyName}</div>
        </CardHeader>
        <CardBody>
          <Actions>
            <Action onClick={handleOpenModal}>
              <div
                className={`${styles["action"]} ${isConfirmed && styles["confirmed"]}`}
              >
                <div className={styles["action-icon"]}>
                  <FeatherIcon icon={"package"} size={16} />
                </div>
                Confirm Delivery
              </div>
              {isConfirmed && <Badge color="green">Confirmed</Badge>}
            </Action>
            <Action>
              <div className={styles["action"]}>
                <div className={styles["action-icon"]}>
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

export default ActionCard;
