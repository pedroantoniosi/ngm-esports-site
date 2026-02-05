import styles from "./index.module.css";

type StandingsProps = {
  className?: string;
  children?: React.ReactNode;
};

const DriverStandings = ({ className, children }: StandingsProps) => {
  return (
    <div className={`${styles.standingsContent} ${className}`}>
      <table className={styles.driversTable}>
        <thead>
          <tr>
            <th>Pos.</th>
            <th>Nome</th>
            <th>País</th>
            <th>Equipe</th>
            <th>PTS.</th>
          </tr>
        </thead>

        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default DriverStandings;
