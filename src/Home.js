import './index.css';

const Home = () => {
    return(
        <>
        <div class="hero min-h-screen home-back bg-gradient-to-b from-base-100 to-info flex-col">
            <div class="flex-col lg:flex-row-reverse items-center justify-center p-4 gap-4 md:hero-content">
                {/* <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl hidden sm:inline-block"/> */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/j2t1pxRJmJM" 
                title="YouTube video player" frameborder="0" className='hidden rounded-lg shadow-2xl lg:inline-block'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
                <div className='flex-col'>
                    <h1 class="text-5xl font-bold  w-1/2 m-auto lg:m-0">Cálculo III</h1>
                    <p class="py-6 text-center lg:text-left">Acá encontrarás todo lo necesario para aprender, entender y pasar la materia.
                        <br />
                        Lee a tu
                        ritmo, entiende mejor que en las clases.
                    </p>
                    <div className='flex lg:block'>
                        <button class="btn btn-primary m-auto">
                            EMPEZAR
                        </button>
                    </div>
                </div>
            </div>
            <div className='content w-full relative top-96 flex-col'>
                
            </div>
        </div>
        </>
    );
};
export default Home;