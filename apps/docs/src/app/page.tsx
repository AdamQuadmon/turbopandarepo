import { Button } from "@turbopandarepo/core";

import { css } from "../../styled-system/css";

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
