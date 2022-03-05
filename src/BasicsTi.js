import { Tex } from 'react-tex';

import ti_basics_1 from "./images/ti_basics_1.png";
import ti_basics_2 from "./images/ti_basics_2.png";
import ti_basics_3 from "./images/ti_basics_3.png";
import ti_basics_4 from "./images/ti_basics_4.png";
import ti_basics_5 from "./images/ti_basics_5.png";

export function BasicsTi() {
    return(
        <div className="container mt-8 mb-12 p-4 pb-6 w-11/12 m-auto rounded-lg bg-base-200">
            <article className="prose max-w-none">
                <h1>Hay que aprender a usar la TI</h1>
                <p className="lg:text-lg">Como primer artículo en el sitio, escribiré lo que es en mi opinión un punto fundamental:
                el verdadero uso de la TI para Cálculo III.
                <br />
                <br />
                ¿A qué me refiero con verdadero?
                <br /><br />
                En mi experiencia, ya que C3 es una de las primeras materias donde te dejan usar la TI, no has tenido tiempo de acostumbrarte a usarla
                más allá de una simple "calculadora", para realizar las operaciones aritméticas básicas, tal vez derivar e integrar o utilizar alguno que
                otro comando. No te preocupes, yo también pasé por eso cuando llevé la materia y me tomó bastante tiempo y dedicación averiguar todo lo que
                se puede hacer con esta herramienta (y aún sigo aprendiendo).
                <br />
                <br />
                Sin embargo, utilizarla sólo para operaciones está MUY por debajo del potencial que tiene la calculadora, por eso en este sitio encontrarás que le
                daré un enfoque alto al uso de la TI para resolver la mayoría de ejercicios, es decir, si puedo hacerlo con la calcu lo haré con la calcu.
                Aprenderemos a tomar provecho verdaderamente del nombre <span className="text-accent font-bold">programable</span> en "calculadora programable".
                <br />
                <br />
                Seguramente ahora estés pensando que esto será muy complicado, pero dejame decirte que no puede ser más diferente, es totalmente sencillo
                y la ventaja que te traerá saber manejar bien la calcu es incomparable, te prometo que te ayudará grandemente en tu carrera, no
                solo en C3.
                <br />
                <br />
                A continuación, dejaré un pequeño tutorial de las primeras funciones o características básicas que utilizaremos durante la materia (y mucho).
                </p>
                <h2>Funcionalidad Básica:</h2>
                <h3>Definición de variables y funciones:</h3>
                <p className="lg:text-lg">
                    Esta es una de las habilidades que más utilizaremos, para definir una variable, es decir guardar su valor en un "nombre"
                    se utiliza <kbd className="kbd">:=</kbd> , este puede incluir toda clase de operaciones:
                    <figure>
                        <img src={ti_basics_1} alt="" />
                    </figure>
                    En este ejemplo asignamos la operación <code className="">2+2</code> a la variable llamada <code>x</code> , además a la derecha nos aparece el resultado de la operación
                    que en este caso obviamente es 4.
                    <br />
                    Podemos usar ahora <code>x</code> y manipularla tal cual lo haríamos como con cualquier número:
                    <figure>
                        <img src={ti_basics_2} alt="" />
                    </figure>
                    También es posible como mencioné antes utilizar letras simbólicas en las variables si se tiene CAS, este es de hecho propiamente el objetivo de el "CAS":
                    <figure>
                        <img src={ti_basics_3} alt="" />
                    </figure>
                    Acá por ejemplo asignamos a <code>f</code> el valor simbólico de 
                    <div className='inline-flex px-2 mx-2'>
                        <Tex texContent={"ay^2 + by + c"}/>
                    </div>
                    y en la segunda línea, por ejemplo, le restamos simbólicamente 
                    <div className='inline-flex pl-2 mx-2'>
                        <Tex texContent={"by"}/>
                    </div>.
                    Como esperamos, esta operación da como resultado
                    <div className='inline-flex px-2 mx-2'>
                        <Tex texContent={"ay^2+c"}/>
                    </div>. En general casi toda manipulación algebraíca la podremos hacer en la TI, esto ahorra mucho tiempo para ejercicios
                    con algebreo tedioso.
                    <br />
                    <br />
                    Inclusive de esta misma manera podemos declarar funciones, que por cierto me refiero al contexto de función no necesariamente matemática,
                    más bien como las vistas en las materias de programación, al final de cuentas lo que estamos haciendo acá es ocupar el lenguaje de
                    programación de la calculadora.
                    <br />
                    Para declarar una función de esta manera se le da un nombre tal cual como una variable pero además se le colocan paréntesis, donde
                    va cualquier argumento que esta tome, una función puede no tener argumentos aunque usualmente no las ocuparemos así,
                    por ejemplo:
                    <figure>
                        <img src={ti_basics_4} alt="" />
                    </figure>
                    Hemos declarado una función <code>h</code> que toma como argumentos <code>u</code> y <code>v</code> , asumiendo que estos fuesen
                    números, devuelve la suma de sus cuadrados.
                    <br />
                    Claramente no nos retorna ningún valor, esto es porque solamente la hemos <span className='font-bold'>definido</span>,
                    todavía hace falta <span className="font-bold">llamarla</span> con valores provistos a los argumentos:
                    <figure>
                        <img src={ti_basics_5} alt="" />
                    </figure>
                    Y como podemos ver, la función se comporta como esperamos ya sea para entradas numéricas o simbólicas (letras), empezamos a ver la potencia
                    del CAS para encargarse del álgebra.
                </p>
            </article>
        </div>
    );
}