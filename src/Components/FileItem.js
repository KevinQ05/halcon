import { FiFileText } from 'react-icons/fi';

export function FileItem(props) {

    return(
        <div className='flex group my-2 sm:my-0'>
            <FiFileText size={32} className="my-auto px-1 group-hover:text-info transition-all duration-300"/>
            <a href={props.link} target="_blank" className='my-auto group-hover:underline transition-all duration-300 text-sm'>{props.name}</a>
        </div>
    );
}