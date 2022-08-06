import { FiFileText } from "react-icons/fi";

export function FileItem(props) {
  return (
    <div className="flex group my-2 sm:my-0">
      <FiFileText
        size={18}
        className="my-auto mx-2 group-hover:text-info transition-all duration-300 min-w-min"
      />
      <a
        href={props.link}
        target="_blank"
        className="my-auto group-hover:underline transition-all duration-300 text-sm"
      >
        <div className="mx-2">{props.name}</div>
      </a>
    </div>
  );
}
