import React from "react";
import edit from "../Table/images/pen.png";
import delete_btn from "../Table/images/delete.png";
import "./table.css";

const Table = ({ member }) => {
  return (
    <div>
      <table>
        <thead>
          <th className="header_names">
            <input type="checkbox" name="selectAll" id="selectAll" />
          </th>
          <th className="name header_names">Name</th>
          <th className="email header_names">Email</th>
          <th className="role header_names">Role</th>
          <th className="action_btn header_names">Actions</th>
        </thead>
        <tbody>
          {member.map((row) => (
            <tr key={row.id}>
              <td>
                <input
                  type="checkbox"
                  checked={row.checked}
                  onChange={() => handleCheckboxChange(row.id)}
                />
              </td>
              <td className="name">
                {/* <input
                  type="text"
                  value={row.name}
                  onChange={(e) =>
                    handleTextChange(row.id, row.Name, e.target.value)
                  }
                /> */}
                {row.name}
              </td>
              <td className="email">{row.email}</td>
              <td className="role">{row.role}</td>
              <td className="action_btn">
                <img src={edit} alt="edit button" />
                <img src={delete_btn} alt="delete button" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
