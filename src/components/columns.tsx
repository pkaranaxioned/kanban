"use client";

import React, { useState } from "react";
import { useColumnStore } from "../../store/useColumn";
import { shallow } from "zustand/shallow";
import { uuid } from "uuidv4";

const Columns = ({ status }: any) => {
  const [openModal, setOpenModal] = useState(false);
  const [text, setText] = useState("");
  const tasks = useColumnStore(
    (state) => state.tasks.filter((task) => task.status === status),
    shallow
  );
  const addTask = useColumnStore((state) => state.addTask);
  const deleteTask = useColumnStore((state) => state.deleteTask);
  return (
    <>
      <div className="bg-white text-black min-w-[200px] rounded-lg flex-1" >
        <div className="p-3 flex justify-between items-center bg-slate-700 text-white rounded-t-lg">
          <h2 className="capitalize text-base">{status}</h2>
          <button
            onClick={() => setOpenModal(true)}
            className="p-2 bg-white rounded-lg text-black"
          >
            Add Task
          </button>
        </div>
        <ul className="p-3 h-[300px] overflow-y-auto">
          {tasks.map((task, index) => {
            return (
              <li
                key={index}
                className="rounded-lg bg-slate-700 text-white mt-2 p-3 flex justify-between items-center"
              >
                <span>{task.title}</span>
                <button className="p-2 bg-white text-black rounded-lg" onClick={() => deleteTask(task.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
      { openModal && <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-black bg-opacity-25">
        <form className="w-72 bg-slate-300 p-5 rounded-lg" onSubmit={(e) => {
          e.preventDefault();
          if(text.length > 0) {
            addTask( uuid(), text, status);
          setOpenModal(false);
          setText('');
          }
        } }>
          <input type="text" name="" id="" onChange={(e) => setText(e.target.value)} value={text} className="rounded-lg text-black px-3 w-full" autoFocus />
          <input type="submit" value="submit" className="mt-3 text-black p-2 rounded-lg bg-white cursor-pointer" />
        </form>
      </div>}
    </>
  );
};

export default Columns;
