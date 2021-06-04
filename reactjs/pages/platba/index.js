import PlatbaForm from "../../components/platebni-brana/platba_form";
import classes from "./modal.module.css";
import { useRouter } from "next/router";

function Platba() {
  const router = useRouter();
  async function penizeHandler(enteredPenize) {
    const response = await fetch("/api/platba/platba", {
      method: "POST",
      body: JSON.stringify(enteredPenize),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      console.log("PROPBLEM");
      return;
    }
    console.log(data);
    router.push("/");
  }
  return (
    <div className={classes.modal}>
      <PlatbaForm onAddPenize={penizeHandler} />
    </div>
  );
}

export default Platba;
