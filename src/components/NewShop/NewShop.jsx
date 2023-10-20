import React, { useState } from 'react';

const NewShop = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [email, setemail] = useState('');
  const [mobile, setmobile] = useState('');
  const [address, setaddress] = useState('');

  const handleSubmit = () => {
    console.log("Shop Name:", name);
    console.log("Shop Description:", description);
    console.log("Shop email:", email);
    console.log("Shop mobile:", mobile);
    console.log("Shop address:", address);
  
  };

  const handleCancel = () => {
    setName('');
    setDescription('');
    setemail('');
    setmobile('');
    setaddress('');
  };

  return (
    <div style={{ margin: '1rem', maxWidth: '400px' }}>
      <h2>Employee Registration From</h2>
      <div style={{ marginBottom: '1rem' }}>
        <label>First Name:</label><br />
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          style={{ width: '100%', padding: '0.5rem' }}
        />
      </div>


      <div style={{ marginBottom: '1rem' }}>
        <label>Last name:</label><br />
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          style={{ width: '100%', padding: '0.5rem' }}
        />
      </div>



      <div style={{ marginBottom: '1rem' }}>
        <label>Email ID:</label><br />
        <textarea 
          value={email} 
          onChange={(e) => setemail(e.target.value)} 
          style={{ width: '100%', padding: '0.5rem' }}
        />
      </div>



      <div style={{ marginBottom: '1rem' }}>
        <label>Mobile number:</label><br />
        <textarea 
          value={mobile} 
          onChange={(e) => setmobile(e.target.value)} 
          style={{ width: '100%', padding: '0.5rem' }}
        />
      </div>
      <div >
      




      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>Address:</label><br />
        <textarea 
          value={address} 
          onChange={(e) => setaddress(e.target.value)} 
          style={{ width: '100%', padding: '0.5rem' }}
        />
      </div>
      <div>
        <button onClick={handleSubmit} style={{ marginRight: '1rem', padding: '0.5rem 1rem' }}>SUBMIT</button>
        <button onClick={handleCancel} style={{ padding: '0.5rem 1rem' }}>Reset</button>
      </div>
    </div>
  );
};

export default NewShop;