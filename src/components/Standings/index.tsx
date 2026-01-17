import { useState } from "react";
import styles from "./index.module.css";
import { getDrivers } from "@/api/drivers";

type StandingsProps = {
  className?: string;
};

const DriverStandings = ({ className }: StandingsProps) => {
  const drivers = getDrivers();

  const [opened, setOpened] = useState(false);

  //Função que retorna o valor inverso de opened
  const toggleDisplay = () => {
    setOpened(!opened);
  };

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

        <tbody>
          {drivers.slice(0, 5).map((driver, index) => (
            <tr key={driver.id}>
              <td>{index + 1}</td>
              <td>{driver.name}</td>
              <td>{driver.state}</td>
              <td>{driver.team}</td>
              <td>{driver.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className={styles.btnLight} onClick={toggleDisplay}>
        {opened ? "Ver Menos" : "Vem Tabela Completa"}
      </button>
    </div>
  );
};

export default DriverStandings;
