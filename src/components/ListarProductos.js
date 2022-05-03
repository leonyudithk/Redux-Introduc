import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ListarProductos = () => {
    //entre las {como lo llame en el reducers} y entre useSelect(como lo llame en la store)
    const {producto} = useSelector(estoStaStore => estoStaStore.producto)
    console.log(producto)


    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            producto.map((prod,index)=>(
                                <tr key={index}>
                                <th>{prod.codigo}</th>
                        <th>{prod.precio}</th>

                                </tr>
                            ))
                        }
                </tbody>
            </Table>
        </div>
    );
};

export default ListarProductos;