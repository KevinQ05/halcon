import { TexString } from "./Components/TexString";
import { EqnNumber } from "./Components/EqnNumber";

export function SeriesIntro() {

    let nsquaredterms = "";
    for (let i = 1; i < 7; i++) {
        nsquaredterms = nsquaredterms + "{\\frac{1}{"+ i**2 +"}},"
    }

    return(
        <div className="container mt-8 mb-12 p-4 py-10 w-11/12 m-auto rounded-lg border-base-300 border-[1px] shadow-2xl lg:px-32">
            <article className="prose max-w-none">
                <h1>Sucesiones: Introducción</h1>
                <p>Las sucesiones en el contexto de Cálculo 3 son elementos matemáticos que se pueden pensar como
                <span className='font-bold'> listas</span> , se simbolizan generalmente con llaves de esta manera:
                <br />
                <br />
                <TexString texContent = "\{1,10,5,2,1\}" className="text-lg lg:text-2xl pl-0 ml-0"></TexString>
                <span className="text-accent">Lista o sucesión con 5 elementos.</span>
                <br />
                <br />
                <TexString texContent = "\{1,2,3,4,5,6,7,8\}" className="text-lg lg:text-2xl pl-0 ml-0"></TexString>
                <span className="text-accent">Sucesión con 8 elementos.</span>
                <br /><br />
                Aunque no es estrictamente necesario, las sucesiones que vamos a usar tienen elementos que siguen cierto "patrón", es decir,
                que los elementos no están ahí al azar, siguen una regla de correspondencia y por tanto, pueden ser descritos por un
                <span className="font-bold"> término general.</span>
                <br />
                Miremos por ejemplo la siguiente sucesion:
                <br /><br />
                <TexString texContent = "\{1,4,9,16,25,36\}" className="text-lg lg:text-2xl pl-0 ml-0"></TexString>
                <EqnNumber number="1" inline={false}/>
                <br /> <br />
                Es claro que los términos siguen un patrón, parece que cada término es el cuadrado de su posición (con esto me refiero a que el
                segundo término es dos al cuadrado, el tercer término es tres al cuadrado, etc. ) . Es costumbre representar esto con una función
                que llamamos término general:
                <br /><br />
                <TexString texContent = "a_n = n^2" className="text-lg lg:text-2xl pl-0 ml-0"></TexString>
                Nótese que no importa qué letra usemos como "variable", las más usadas son <code>n</code> y <code>k</code>:
                <TexString texContent = "a_k = k^2" className="text-lg lg:text-2xl"></TexString> es totalmente equivalente.
                <br />
                Entonces podríamos representar la serie <EqnNumber number="1" inline={true}/> como:
                <TexString texContent = "\{k^2\}^6_{k=1}" className="text-lg lg:text-2xl"/>.
                <br /><br />
                Te preguntarás entonces, ¿qué son los números que están afuera de las llaves? se usan para indicar en qué número empieza
                y termina la sucesión, en este caso comienza en <code>k = 1</code> y termina en <code>k = 6</code>. Es importante
                destacar que las sucesiones implícitamente asumen que los números se incrementan de 1 en 1, es decir, <code>k</code> es un
                <span className="font-bold"> número entero</span>.
                <br /><br />
                Acá hay varios ejemplos de sucesiones con su respectivo término general:
                <br /><br />
                <TexString texContent = "\{k!\}^5_{k=0}=\{1,1,2,6,24,120\}" className="text-lg lg:text-2xl ml-0 pl-0"/>
                <br /><br />
                <TexString texContent = "\{(-1)^k\}^6_{k=1}=\{-1,1,-1,1,-1,1\}" className="text-lg lg:text-2xl ml-0 pl-0"/>
                <br /><br />
                <TexString texContent = "\{\frac{1}{n^3}\}^4_{k=2}=\{8,27,64\}" className="text-lg lg:text-2xl ml-0 pl-0"/>
                <br /><br />
                <TexString texContent = {"\\{\\frac{1}{n^2}\\}^{\\infty}_{k=1}=\\{"+ nsquaredterms + "..." +"\\}"} className="text-lg lg:text-2xl ml-0 pl-0"/>
                <br /><br />
                Esta última puede parecer peculiar ya que según la notación, termina cuando <code>k</code> vale infinito. Aunque formalmente lo que
                voy a decir es incorrecto, podemos pensar que este tipo de sucesión tiene "infinitos términos". 
                <br /> Este será el tipo de sucesiones
                que usaremos en Cálculo 3, les llamaremos sucesiones que tienden al infinito o <span className="font-bold"> sucesiones infinitas</span>.
                </p>
            </article>
        </div>
    );
}