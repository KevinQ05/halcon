import { FaVideo } from 'react-icons/fa';

export function VideoItem(props) {

    return(
        <div className='flex group '>
            <FaVideo size={36} className="my-auto px-2 group-hover:text-warning transition-all duration-300"/>
            <a href={props.link} target="_blank" className='my-auto group-hover:underline transition-all duration-300 text-sm'>{props.name}</a>
        </div>
    );
}