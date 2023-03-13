import React from "react";
import Table from "react-bootstrap/Table";
const ContactSearchTable = ({ filterData }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((item) => (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}@gmail.com</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ContactSearchTable;
