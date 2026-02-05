import Standings from "@/components/Standings";
import Container from "@/components/Container";
import MainTemplate from "@/components/MainTemplate";

export default function standingsPage() {
  return (
    <>
      <MainTemplate>
        <Container>
          <Standings />
        </Container>
      </MainTemplate>
    </>
  );
}
