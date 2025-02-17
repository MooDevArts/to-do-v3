import Menu from "@/components/Menu";
import { addTask } from "@/actions/tasks";

export default function Home() {
  addTask("Hi", "pls work");
  return (
    <div className="content">
      <div className="to-do green">Task 1asfasdfs</div>
      <div className="to-do red">Task 1</div>
      <div className="to-do yellow">Task 1</div>

      <Menu></Menu>
    </div>
  );
}
