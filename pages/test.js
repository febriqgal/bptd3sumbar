import Styles from "../styles/Home.module.css";
import { Tooltip } from "@nextui-org/react";

export default function test() {
  return (
    <div className={Styles.main}>
      <Tooltip
        trigger="hover"
        content={"Developers love Next.js"}
        color={"default"}
      >
        <h1>Febriqgal</h1>
      </Tooltip>
    </div>
  );
}
