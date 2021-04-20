import { useState } from 'react';
import axios from 'axios';
import useRequest from '../../hooks/use-request';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 // const [errors, setErrors] = useState([]);
  const { doRequest, errors } = useRequest({
    url: 'api/users/signup',
    method: 'post',
    body: {
      email, password
    }
  });

  const onSubmit = async event => {
    event.preventDefault();

    //console.log(email, password);
    doRequest();
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <div clsssName="form-group">
        <label>Email Address</label>
        <input value={email} 
          onChange={e => setEmail(e.target.value)} 
          className="form-control" />
      </div>
      <div clsssName="form-group">
        <label>Password</label>
        <input value={password}
         onChange={e => setPassword(e.target.value)}
         type="password" className="form-control" />
      </div>
      {errors}
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};