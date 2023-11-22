import React from "react";
import Table from "../Table";
import { useState, useEffect } from "react";
import axios from "axios";

const Admin = () => {
  const [member, setMember] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      )
      .then((response) => {
        setMember(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  return (
    <div>
      <Table member={member} />
    </div>
  );
};

export default Admin;
