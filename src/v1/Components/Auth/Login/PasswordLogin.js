// PasswordLogin.js
import React, { useState } from 'react';
import { InputField, Button } from '../../../Components';
import { findError } from '../../../Utils';

export default function PasswordLogin({ controls, submitHandler, onChange, errors, showErr, loading }) {
  const { phone_number, password } = controls;
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const clickHandler=()=>{
    setShowPasswordInput(true)
    password && submitHandler();
  }

  return (
    <div>
      {/* <InputField
        type="number"
        placeholder="Mobile Number"
        value={phone_number}
        onChange={(e) => onChange(e, 'PHONE')}
        error={findError('phone_number', errors, showErr)}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => onChange(e, 'PASSWORD')}
        error={findError('password', errors, showErr)}
      />
      <Button loading={loading} text={'Login'} width='80%' margin='0.5rem auto' type={'button'} clicker={submitHandler} /> */}
        {console.log(showPasswordInput,"show password iunput")}
      {showPasswordInput && (
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => onChange(e, 'PASSWORD')}
          error={findError('password', errors, showErr)}
        />
      )}

      {/* <button onClick={() => setShowPasswordInput(!showPasswordInput)}>Login with PASSWORD</button> */}
      <Button loading={loading} text={'Login via OTP'} text={'Login via Password'} width='80%' margin='0.5rem auto' type={'button'} clicker={clickHandler} />

    </div>
  );
}