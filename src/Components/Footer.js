import {FiMail} from 'react-icons/fi'

export function Footer({}) {
    return (
    <footer class="footer items-center p-4 bg-neutral text-neutral-content flex">
        <div class="items-center grid-flow-col">
        <p className='hidden sm:flex'>Copyright © 2022 - All right reserved</p>
        <p className='sm:hidden'>Copyright © 2022</p>
        </div> 
        <div class="grid-flow-col gap-4 md:place-self-center absolute right-4">
            <a href="#"><FiMail size={"28"} className="mx-3"></FiMail></a>
        </div>
    </footer>);
}

  