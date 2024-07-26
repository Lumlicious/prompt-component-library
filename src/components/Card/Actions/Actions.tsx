import styles from "./Actions.module.css";

interface ActionsProps {
  children: React.ReactNode;
}

const Actions = ({ children }: ActionsProps) => {
  return <ul className={styles["action-list"]}>{children}</ul>;
};

interface ActionProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  status?: "" | "confirmed";
}

const Action = ({ children, ...props }: ActionProps) => {
  return (
    <li className={styles.action} {...props}>
      {children}
    </li>
  );
};

export { Actions, Action };
