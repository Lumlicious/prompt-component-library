import styles from "./Badge.module.css";

export interface BadgeProps {
  children?: React.ReactNode;
  color: "yellow" | "orange" | "red" | "green" | "blue" | "gray" | "round";
}

const Badge = ({ children, ...props }: BadgeProps) => {
  const { color } = props;

  return (
    <div className={`${styles.badge} ${styles[`badge-${color}`]}`}>
      {children}
    </div>
  );
};

export { Badge };
