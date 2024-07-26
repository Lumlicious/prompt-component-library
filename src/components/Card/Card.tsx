import styles from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <div className={styles.card}>{children}</div>;
};

interface CardHeaderProps {
  children: React.ReactNode;
}

const CardHeader = ({ children }: CardHeaderProps) => {
  return <div className={styles["card-header"]}>{children}</div>;
};

interface CardBodyProps {
  children: React.ReactNode;
}

const CardBody = ({ children }: CardBodyProps) => {
  return <div className={styles["card-body"]}>{children}</div>;
};

export { Card, CardHeader, CardBody };
