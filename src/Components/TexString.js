import { Tex } from "react-tex";

export function TexString(props) {
    return(
        <div className={"inline-flex px-2 mx-2 " + props.className}>
            <Tex texContent = {props.texContent}/>
        </div>
    );
}