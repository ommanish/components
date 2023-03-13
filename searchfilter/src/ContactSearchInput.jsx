import React from "react";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const ContactSearchInput = ({ onChange }) => {
  return (
    <div>
      <Form>
        <InputGroup className="my-3">
          {/* onChange for search */}
          <Form.Control onChange={onChange} placeholder="Search contacts" />
        </InputGroup>
      </Form>
    </div>
  );
};

export default ContactSearchInput;
