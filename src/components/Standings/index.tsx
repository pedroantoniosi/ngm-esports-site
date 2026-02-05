import StandingsTemplate from "../StandingsTemplate";
import styles from "./index.module.css";
import { getDrivers } from "@/api/Drivers";

const DriverStandings = () => {
  const drivers = getDrivers();
  return (
    <StandingsTemplate className={styles.standings}>
      {drivers
        .sort((a, b) => b.pts - a.pts)
        .map((driver, index) => (
          <tr key={driver.id}>
            <td>{index + 1}</td>
            <td>{driver.name}</td>
            <td>{driver.state}</td>
            <td>{driver.team}</td>
            <td>{driver.pts}</td>
          </tr>
        ))}
    </StandingsTemplate>
  );
};

export default DriverStandings;
