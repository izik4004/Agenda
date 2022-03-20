import React from 'react'

const Table = () => {
  return (
    <div className="App">
    <ReactHTMLTableToExcel
      id="test-table-xls-button"
      className="download-table-xls-button"
      table="table-to-xls"
      filename="test"
      sheet="tablexls"
      buttonText="Download as XLS"
    />
    <table id="table-to-xls">
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr>
            <td>{item.firstname}</td>
            <td>{item.lastname}</td>
            <td>{item.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Table