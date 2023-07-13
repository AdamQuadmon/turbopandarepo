import { Button } from "@turbopandarepo/ui";

export default function Page() {
  return (
    <>
      <h1>Web</h1>
      <Button variant="instagram">Boop</Button>
      <Button size="lg" label="Large Button" />
      {/* Comment this out to see how Storybook refresh adding the warning variant class  */}
      {/* <Button variant="warning" label="Warning Variant Button" /> */}
    </>
  );
}
