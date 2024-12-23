import { useRef } from "react";
import Input from "./Input.jsx";
import Model from "./Model.jsx";

export default function NewProject({ onAdd, onCancel }) {
  const model = useRef();

  const Title = useRef();
  const Description = useRef();
  const date = useRef();

  function HandelSave() {
    const enteredTitle = Title.current.value;
    const enteredDescription = Description.current.value;
    const enteredDate = date.current.value;

    //vaalidation ....
    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0 ||
      enteredDate.trim().length === 0
    ) {
      model.current.open();
      return;
    } else {
      onAdd({
        title: enteredTitle,
        description: enteredDescription,
        date: enteredDate,
      });
    }
  }

  return (
    <>
      <Model ref={model} buttoncaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Model>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
              onClick={HandelSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={Title} label={"Tile"} />
          <Input ref={Description} label={"Description"} textArea />
          <Input type="date" ref={date} label={"Due Date"} />
        </div>
      </div>
    </>
  );
}
