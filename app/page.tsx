import { Container, Title } from "@/components/shared";
import { TopBar } from "@/components/shared";



export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Alle Pizzen" size="lg" className="font-extrabold"/>
      </Container>
      <TopBar/>
    </>
  );
}
