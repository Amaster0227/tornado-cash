import { Button } from "react-bootstrap";

export default function Hero() {
  return (
    <div className="container mt-5">
      <h1 className="text-primary">Next.js + Bootstrap</h1>
      <Button variant="primary" className="mt-3">
        This is a hero section
      </Button>
    </div>
  );
}
