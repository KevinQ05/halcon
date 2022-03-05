import './index.css';
import { FiVideo, FiCpu } from 'react-icons/fi';
import { useState } from 'react';
import home_1 from './images/Home/home_1.png';
import home_2 from './images/Home/home_2.png';

const Home = (props) => {

    const [toggle1,setToggle1] = useState(true);
    const [toggle2,setToggle2] = useState(false);

    return(
        <>
        <div class="hero min-h-screen home-back bg-gradient-to-b from-base-100 to-info flex-col">
            <div class="flex-col lg:flex-row-reverse items-center justify-center p-4 gap-4 md:flex">
                {/* <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl hidden sm:inline-block"/> */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/j2t1pxRJmJM" 
                title="YouTube video player" frameborder="0" className='hidden rounded-lg shadow-2xl lg:inline-block'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
                <div className='flex-col'>
                    <h1 class="text-5xl font-bold w-fit m-auto lg:m-0 flex-nowrap">Cálculo III</h1>
                    <p class="py-6 text-center lg:text-left">Acá encontrarás todo lo necesario para aprender, entender y pasar la materia.
                        <br />
                        Lee a tu
                        ritmo, entiende mejor que en las clases.
                    </p>
                    <div className='flex lg:block'>
                        {/* <button class="btn btn-primary m-auto">
                            EMPEZAR
                        </button> */}
                    </div>
                </div>
            </div>


        </div>
            
        <div className='content w-full flex-col bg-gradient-to-b from-info to-secondary-focus py-16'>
            <div class="tabs w-fit bg-base-100 rounded-t-md ml-[4.16666%] lg:hidden z-0">
                <a className={"tab tab-lg tab-lifted " + (toggle1? "tab-active text-info":"")}><FiVideo className=' px-2' size={"38"}
                onClick={() => {
                    if (toggle1) {
                        return;
                    }
                    setToggle1(!toggle1);
                    setToggle2(!toggle2); 
                }}
                >

                    </FiVideo>
                </a> 
                <a className={"tab tab-lg tab-lifted" + (toggle2? "tab-active text-info":"")}><FiCpu className=' px-2' size={"38"}
                onClick={() => {
                    if (toggle2) {
                        return;
                    }
                    setToggle1(!toggle1);
                    setToggle2(!toggle2); 
                }}
                >
                 </FiCpu>
                </a> 
            </div>
            
            <div className="features bg-base-100 w-11/12 lg:w-4/5 m-auto h-fit rounded-2xl shadow-2xl flex-row rounded-tl-none lg:rounded-tl-2xl text-center">
                <div className='p-6 lg:hidden tabbed-features'>
                    {
                    toggle1
                    ? <><h1 className='text-xl font-semibold'>Bellos Gráficos y Animaciones</h1>
                                        <img src={home_1} alt="" className='rounded-2xl py-6' />
                                        <p>Qué mejor manera de aprender una materia que visualmente, es por eso que he preparado las mejores visualizaciones.</p></>
                    : null
                    }
                    {
                    toggle2?
                        <>
                            <h1 className='text-xl font-semibold'>Tutoriales para usar la TI</h1>
                                <img src={home_2} alt="" className='rounded-2xl py-6 mx-auto' />
                                <p>Encontrarás a cada paso instrucciones para usar tu calculadora para lo que fue diseñada, para programar</p>
                        </>
                    :null
                    }
                </div>

                <div className='non-tabbed-features hidden lg:flex'>
                    <div className='w-2/5 p-10 mx-auto'>
                        <h1 className='text-xl font-semibold'>Bellos Gráficos y Animaciones</h1>
                            <img src={home_1} alt="" className='rounded-2xl py-6' />
                            <p>Qué mejor manera de aprender una materia que visualmente, es por eso que he preparado las mejores visualizaciones.</p>
                    </div>
                    <div className='divider divider-horizontal'>o</div>
                    <div className='w-2/5 p-10 flex flex-col mx-auto'>
                        <h1 className='text-xl font-semibold'>Tutoriales para usar la TI</h1>
                            <img src={home_2} alt="" className='rounded-2xl py-6 mx-auto my-auto' />
                            <p className="">Encontrarás a cada paso instrucciones para usar tu calculadora para lo que fue diseñada, para programar</p>
                    </div>
                </div>
            </div>

        </div>
        </>
    );
};
export default Home;