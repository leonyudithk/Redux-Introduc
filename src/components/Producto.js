import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from '../Hooks/useForm';
import { AgregarProducto } from '../redux/actions/actionProductos';
import ListarProductos from './ListarProductos';

const Producto = () => {

    const dispatch = useDispatch()

    const  [formValue, handleInputChange, reset] = useForm({
        codigo: '',
        precio: ''
    })



    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log('hola')
        console.log(formValue)
     
        dispatch(AgregarProducto(formValue))
        reset()
  
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                 <input
                     type='text'
                     name='codigo'
                     placeholder="ingrese Codigo"
                     onChange={handleInputChange}
                 />
           
                </div>
                <div>
                 <input
                     type='text'
                     name='precio'
                     placeholder="ingrese precio"
                     onChange={handleInputChange}
                 />
           
                </div>
                <Button type='submit'>Guardar</Button>
            </form>
            <ListarProductos/>
        </div>
    );
};

export default Producto;