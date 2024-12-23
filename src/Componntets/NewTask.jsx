import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [EnteredTask, SetEnteredTask] = useState("");

  function HandelChange(event) {
    SetEnteredTask(event.target.value);
  }

  function HandelAddTask() {
    onAdd(EnteredTask);
    SetEnteredTask("");
  }
  return (
    <div className="felx items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={HandelChange}
        value={EnteredTask}
      />

      <button
        className="text-stone-700 hover:text-stone-950 mx-4"
        onClick={HandelAddTask}
      >
        Add Tasks
      </button>
    </div>
  );
}
