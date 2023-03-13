import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactSearchInput from "./ContactSearchInput";
import ContactSearchTable from "./ContactSearchTable";

import { data } from "./data.js";

const ContactSearchResult = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filterData = data.filter((item) =>
    item.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <Container>
        <ContactSearchInput onChange={(e) => setSearchTerm(e.target.value)} />
        <ContactSearchTable filterData={filterData} />
      </Container>
    </div>
  );
};

export default ContactSearchResult;
