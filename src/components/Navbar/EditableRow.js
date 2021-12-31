import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
    <td>
      <input
        type="text"
        required="required"
        placeholder="courseStart"
        name="courseStart"
        value={editFormData.courseStart}
        onChange={handleEditFormChange}
      ></input>
    </td>
    <td>
      <input
        type="text"
        required="required"
        placeholder="courseEnd"
        name="courseEnd"
        value={editFormData.courseEnd}
        onChange={handleEditFormChange}
      ></input>
    </td>
    <td>
      <input
        type="text"
        required="required"
        placeholder="level"
        name="level"
        value={editFormData.level}
        onChange={handleEditFormChange}
      ></input>
    </td>
    <td>
      <input
        type="text"
        required="required"
        placeholder="period"
        name="period"
        value={editFormData.period}
        onChange={handleEditFormChange}
      ></input>
    </td>
    <td>
      <input
        type="text"
        required="required"
        placeholder="vacancies"
        name="vacancies"
        value={editFormData.vacancies}
        onChange={handleEditFormChange}
      ></input>
    </td>
    <td>
      <button type="submit">Save</button>
      <button type="button" onClick={handleCancelClick}>
        Cancel
      </button>
    </td>
  </tr>
);
};


export default EditableRow;