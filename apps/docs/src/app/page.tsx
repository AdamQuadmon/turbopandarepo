import { css } from "@turbopandarepo/ds/css";
import { Button } from "@turbopandarepo/ui";

export default function Page() {
  return (
    <>
      <h1>Web</h1>
      <Button className={css({ fontSize: "2xl", fontWeight: "bold" })}>
        Boop
      </Button>
    </>
  );
}
