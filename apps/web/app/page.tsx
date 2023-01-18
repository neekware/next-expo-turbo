import Link from "next/link";
import { Button } from "ui";

export default function Page() {
  return (
    <div>
      <h1>Home Page</h1>

      <Link href="/profile">
        <Button>Profile</Button>
      </Link>
    </div>
  );
}
