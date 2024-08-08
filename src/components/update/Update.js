import React, { useState, useEffect } from 'react';
import { Button, Form, Checkbox } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Update = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setFirstName(localStorage.getItem('First Name'));
    setLastName(localStorage.getItem('Last Name'));
    setCheckbox(localStorage.getItem('Checkbox Value') === 'true');
  }, []);

  const updateAPIData = () => {
    const id = localStorage.getItem('ID');
    axios.put(`https://correct-api-endpoint.com/data/${id}`, {
      firstName,
      lastName,
      checkbox
    }).then(() => {
      navigate('/read');
    }).catch(error => {
      console.error('Error updating data:', error);
    });
  };
  

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            checked={checkbox}
            onChange={() => setCheckbox(!checkbox)}
          />
        </Form.Field>
        <Button type="submit" onClick={updateAPIData}>
          Update
        </Button>
      </Form>
    </div>
  );
};

export default Update;
