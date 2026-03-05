import { useState } from "react";
import Standings from "@/components/Standings";
import Container from "@/components/Container";
import MainTemplate from "@/components/MainTemplate";
import Button from "@/components/Button";
import StandingsTemplate from "@/components/StandingsTemplate";

export default function StandingsPage() {
  const [showAll, setShowAll] = useState(false);

  function toggleDrivers() {
    setShowAll((prev) => !prev);
  }

  return (
    <MainTemplate>
      <Container>
        <StandingsTemplate>
          <Standings limit={showAll ? undefined : 10} />
          <Button className={`btn btnSecondary mt-2`} onClick={toggleDrivers}>
            {showAll ? "Ver Menos" : "Ver Todos"}
          </Button>
        </StandingsTemplate>
      </Container>
    </MainTemplate>
  );
}
