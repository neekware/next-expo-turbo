import Link from "next/link";
import { Button } from "ui";

export default function Docs() {
  return (
    <div>
      <h1>Docs</h1>
      <Link href="/">
        <Button>Home</Button>
      </Link>{" "}
    </div>
  );
}
