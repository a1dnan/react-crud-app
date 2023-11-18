import React, { useEffect, useState } from 'react'
import { getProductById, updateProduct } from '../app/app';
import { useParams } from 'react-router-dom';

function EditProduct() {
    // to retrieve params
    const {id} = useParams();

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [checked, setChecked] = useState(false);

    useEffect(()=>{
        handleGetProductById(id);
    },[]);

    const handleGetProductById = (id)=>{
        getProductById(id).then(resp=>{
            let product = resp.data;
            setName(product.name);
            setPrice(product.price);
            setChecked(product.checked);
        })
    }
    // update Product
    const handleUpdateProduct = (event)=>{
        event.preventDefault();
        let product = {id, name, price, checked};
        updateProduct(product).then(resp=>{
            alert(JSON.stringify(resp.data));
        });
    }

  return (
    <div className='row p-1'>
        <div className='col'>
            <div className='card'>
                <div className='card-body'>
                    <form onSubmit={handleUpdateProduct}>
                        <div className='mb-3'>
                            <label className='form-label'>Name :</label>
                            <input 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='form-control'/>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Price :</label>
                            <input 
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className='form-control'/>
                        </div>
                        <div class="form-check">
                            <input 
                            checked={checked}
                            onChange={(e) => setChecked(e.target.value)}
                            className="form-check-input" type="checkbox"/>
                            <label className="form-check-label" for="flexCheckChecked">
                                Checked
                            </label>
                        </div>
                        <button className='btn btn-success mt-2'>Save</button>              
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default EditProduct