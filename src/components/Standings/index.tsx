import { getDrivers } from "@/api/Drivers";

type DriverStandingsProps = {
  limit?: number;
};

const DriverStandings = ({ limit }: DriverStandingsProps) => {
  const drivers = getDrivers();

  const sortedDrivers = drivers.sort((a, b) => b.pts - a.pts);
  const visibleDrivers = limit ? sortedDrivers.slice(0, limit) : sortedDrivers;

  return (
    <>
      {visibleDrivers.map((driver, index) => (
        <tr key={driver.id}>
          <td>{index + 1}</td>
          <td>{driver.name}</td>
          <td>{driver.state}</td>
          <td>{driver.team}</td>
          <td>{driver.pts}</td>
        </tr>
      ))}
    </>
  );
};

export default DriverStandings;
