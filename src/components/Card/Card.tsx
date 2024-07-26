import styles from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children, ...props }: CardProps) => {
  return <div className={styles.card}>{children}</div>;
};

interface CardHeaderProps {
  children: React.ReactNode;
}

const CardHeader = ({ children, ...props }: CardHeaderProps) => {
  return <div className={styles["card-header"]}>{children}</div>;
};

interface CardBodyProps {
  children: React.ReactNode;
}

const CardBody = ({ children, ...props }: CardBodyProps) => {
  return <div className={styles["card-body"]}>{children}</div>;
};

export { Card, CardHeader, CardBody };
