export function EqnNumber(props) {
    return(
        (
        !props.inline
        ? <span className="text-info font-bold text-xl border-default border-2 py-1 px-3 rounded-xl">{props.number}</span>
        : <span className="text-info font-bold text-sm border-default border-2 py-0 px-4 rounded-xl 
            hover:bg-secondary-focus hover:text-white hover:cursor-pointer transition-all duration-300"
            onClick={props.onClick}>{props.number}</span>
        )
    );
}