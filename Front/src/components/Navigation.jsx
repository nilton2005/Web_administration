import {Link } from 'react-router-dom';

export function Navigation(){
    return(


        <ul className='menu' >
            <li>
                <Link to="/" className="link link-theme link-arrow">Inicio</Link>

            </li>
            <li>
                <Link to="/productos" className="link link-theme link-arrow">Productos</Link>
            </li>
            <li>
                <Link to="/anlitica" className='link link-theme link-arroe'>Analítica</Link>
            </li>

        </ul>
        //<div>
        //    <Link to="/" >Home</Link>
        //    <br />
        //    <Link to="/productos" >productos</Link>
        //</div>
    )

}