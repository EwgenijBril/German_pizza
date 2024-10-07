import { Header } from "@/components/shared/header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div >
      <Header />
      <h1>
        Home
        <Button variant="outline">Warenkorb</Button>
      </h1>
    </div>
  );
}
