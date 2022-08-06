import { FaVideo } from "react-icons/fa";

export function VideoItem(props) {
  return (
    <div className="flex group py-2 ">
      <FaVideo
        size={18}
        className="my-auto px-2 group-hover:text-warning transition-all duration-300 min-w-min"
      />
      <a
        href={props.link}
        target="_blank"
        className="my-auto group-hover:underline transition-all duration-300 text-sm"
      >
        {props.name}
      </a>
    </div>
  );
}
