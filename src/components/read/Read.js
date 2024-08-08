import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';

const Read = () => {
  // State that will contain the incoming data, initialized as an empty array
  const [APIData, setAPIData] = useState([]);

  // Sending the GET Request
  useEffect(() => {
    axios.get('https://66b34e097fba54a5b7ec609e.mockapi.io/FakeData')
      .then((response) => {
        // Log the response to check its structure
        console.log('API Response:', response.data);
        setAPIData(response.data);  // Assuming response.data is an array
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Delete Operation
  const onDelete = (id) => {
    axios.delete(`https://66b34e097fba54a5b7ec609e.mockapi.io/FakeData/${id}`)
      .then((getData) => {
        setAPIData(getData.data);
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
  };

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {/* Ensure APIData is an array before calling .map */}
        <Table.Body>
          {Array.isArray(APIData) && APIData.length > 0 ? (
            APIData.map((data) => (
              <Table.Row key={data.id}>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                <Table.Cell>
                  <Button onClick={() => onDelete(data.id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.Cell colSpan="4" style={{ textAlign: 'center' }}>
                No data available
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
}

export default Read;
