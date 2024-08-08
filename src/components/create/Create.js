import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

//importing AXIOS to send the POST request to Server API
import axios from 'axios';

//Main Function
export default function Create() {

    // setting up the variables for storing the data  
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    // Function that will send data to the API
    const postData = () => {
      axios.post('https://66b34e097fba54a5b7ec609e.mockapi.io/FakeData', {
        firstName,
        lastName,
        checkbox
      })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}