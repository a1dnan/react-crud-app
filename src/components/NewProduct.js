import React, { useState } from 'react'
import { saveProduct } from '../app/app';

function NewProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [checked, setChecked] = useState(false);
    // add new Product
    const handleSaveProduct = (event)=>{
        event.preventDefault();
        let product = {name, price, checked};
        saveProduct(product).then(resp=>{
            alert(JSON.stringify(resp.data));
        });
    }

  return (
    <div className='row p-1'>
        <div className='col'>
            <div className='card'>
                <div className='card-body'>
                    <form onSubmit={handleSaveProduct}>
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
                            <label className="form-check-label" htmlFor="flexCheckChecked">
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

export default NewProduct