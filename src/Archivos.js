import { FilesApp } from "./Components/FilesApp";
import React from "react";


export class Archivos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<>
        <div className="container mt-8 mb-12 p-4 py-10 w-11/12 m-auto rounded-lg border-base-300 border-[1px] shadow-2xl lg:px-32">
            <article className="prose max-w-none">
                <h1>Archivos</h1>
                <p>Para tu conveniencia (y la mía) he construido una pequeña aplicación interactiva para accesar a todos los PDF y grabaciones
                que se encuentran en drive, incluyendo ciclos pasados.</p>
                <br /><br />
            </article>
            
            <div className='bg-none border-2 rounded-xl flex-col p-0'>
                <FilesApp/>
            </div>

        </div>
        </>);
  }

}