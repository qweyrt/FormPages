import { useState } from "react"
export function AddProduct() {
  const [value, setValue] = useState( {
    productname: '',
    description: '',
    productid: ''
  });
  function handleRegister(e) {
    e.preventDefault();
    console.log( 'value = ', value );
  };
    const handleOnChange = e => {
     console.log('e = ', e);
     setValue( value => ({value, [e.target.name]: e.target.value}))
  };  
    
    
  return (
    <div>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="usernameCtrl">Product ID</label>
          <input
            id="usernameCtrl"
            value={value.productid}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="passwordCtrl">Product Name</label>
          <input
            id="passwordCtrl"
            value={value.productname}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="passwordCtrl">Description</label>
          <textarea
            id="passwordCtrl"
            value={value.description}
            onChange={handleOnChange}
            rows="6"
            cols="60"
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default AddProduct;
