import { FiFolder } from "react-icons/fi";
import { FaFolderOpen } from "react-icons/fa";
import { useState } from "react";
import { BsArrowReturnRight, BsArrowBarRight } from "react-icons/bs";

const FolderItem = (props) => {
  const [open, setOpen] = useState(false);

  const { files, folders } = props;

  return (
    <div
      tabindex="0"
      class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
    >
      <input
        type="checkbox"
        name=""
        id=""
        className="peer"
        onChange={() => setOpen(!open)}
      />
      <div class="collapse-title text-xl font-medium flex">
        {open ? (
          <FaFolderOpen className="my-auto px-4 text-primary" size={50} />
        ) : (
          <FiFolder className="my-auto px-4" size={50} />
        )}
        <div className="w-fit my-auto">{props.name}</div>
      </div>

      <div class={"collapse-content " + (open ? "" : "hidden")}>
        {[...renderFiles(files), folders]}
      </div>
    </div>
  );
};

export default FolderItem;

function renderFiles(fileArray) {
  let files = [];

  for (let [index, file] of fileArray.entries()) {
    files.push(
      <div className="flex sm:translate-x-4" key={index}>
        <BsArrowBarRight
          size={40}
          className="my-auto px-2 pl-0 sm:pl-1 hidden sm:flex"
        />
        <div className="w-fit my-auto">{file}</div>
      </div>
    );
  }

  return files;
}
