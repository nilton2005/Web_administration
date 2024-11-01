import { useEffect, useState} from "react";
import {getAllProducts} from '../api/products.api';
import {TableContainer, Table, TableHead, TableBody,  TableCell, TableFooter, TablePagination, TableSortLabel, TableRow} from '@mui/material'
import {Row, Col, Card, Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export function ProductsList() {

    const [products, setProducts] = useState([]);
    const [terminoDeBusqueda, setTerminodDeBusqueda] = useState('')



  useEffect(() => {
    async function loadProducts(){
        const res = await getAllProducts();
        //console.log(res.data);
        setProducts(res.data);
       
    };
    loadProducts();
     console.log("----------------");
        console.log("lista de productos =>");
        console.log(products)
  }, []);

  const manejadorDeBusqueda = (event) =>{
    setTerminodDeBusqueda(event.target.value)
  }


const listaDeDatosFiltrados = products.filter(producto => producto.name.toLowerCase().includes(terminoDeBusqueda.toLowerCase()))


  return (
    // create a table wit tailwind css
    <article className="container">
        <h1>Estos son los productos</h1>
        <Form.Control
            type="text"
            placeholder="Ingrea tu busqueda"
            value={terminoDeBusqueda}
            onChange={manejadorDeBusqueda}
            className="mb-3"
        />
        
        <TableContainer>
            <Table className="classes.table" aria-label="styled table">
                <TableHead   className=""   >
                    <TableRow>
                        <TableCell className="">ID</TableCell>
                        <TableCell className="">Nombre</TableCell>
                        <TableCell className="">Precio</TableCell>
                        <TableCell className="">Stock</TableCell>
                        <TableCell className="" >UID RFID</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {listaDeDatosFiltrados.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell className=" ">{product.id}</TableCell>
                            <TableCell className=" ">{product.name}</TableCell>
                            <TableCell className=" ">{product.price}</TableCell>
                            <TableCell className=" ">{product.stock}</TableCell>
                            <TableCell className=" ">{product.idNFC}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </article>
    
  );
}