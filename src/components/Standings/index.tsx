import { useState } from "react";
import styles from "./index.module.css";
import { getDrivers } from "@/api/drivers";
import type { Driver } from "@/types/driver";

type DriversProps = {
  renderNumber?: number;
};

const DriverStandings = ({ renderNumber = 5 }: DriversProps) => {
  const [drivers] = useState<Driver[]>(() => getDrivers());

  return (
    <div className={styles.standingsContent}>
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
          {drivers.slice(0, renderNumber).map((driver, index) => (
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
    </div>
  );
};

export default DriverStandings;
