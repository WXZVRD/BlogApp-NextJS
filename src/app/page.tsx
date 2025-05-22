import { Button } from "@/shared/ui/button";

export default function Home() {
  return (
    <div>
      <h1>Hello world!</h1>
      {Array.from([1, 10]).map((el) => {
        return <Button size={"lg"}>Hello, button! {el}</Button>;
      })}
    </div>
  );
}
