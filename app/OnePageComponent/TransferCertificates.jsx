 import { color } from 'framer-motion';
import React from 'react';

const tcData = [
  { sno: 1, tcNo: 474, admnNo: 2676, studentName: "VISHAV SINGH JAWANDA", fatherName: "JASVEER SINGH JAWANDA", classLeft: "VI", dateOfIssue: "31/03/2025" },
  { sno: 2, tcNo: 475, admnNo: 1187, studentName: "MUKHRAJ SINGH", fatherName: "KULWINDER SINGH", classLeft: "VIII", dateOfIssue: "31/03/2025" },
  { sno: 3, tcNo: 476, admnNo: 1493, studentName: "GAVI SINGH", fatherName: "KULDEEP SINGH", classLeft: "VI", dateOfIssue: "01/04/2025" },
  { sno: 4, tcNo: 477, admnNo: 2210, studentName: "RANVEER SINGH", fatherName: "KULDEEP SINGH", classLeft: "IV", dateOfIssue: "01/04/2025" },
  { sno: 5, tcNo: 478, admnNo: 2079, studentName: "JASMEEN KAUR", fatherName: "KAMALJIT SINGH", classLeft: "IV", dateOfIssue: "02/04/2025" },
  { sno: 6, tcNo: 479, admnNo: 1067, studentName: "JASMEET KAUR", fatherName: "BALKAR SINGH", classLeft: "IX", dateOfIssue: "02/04/2025" },
  { sno: 7, tcNo: 480, admnNo: 2478, studentName: "NIMRAT KAUR", fatherName: "MANDEEP SINGH", classLeft: "L.K.G.", dateOfIssue: "02/04/2025" },
  { sno: 8, tcNo: 481, admnNo: 2522, studentName: "PARAMVIR SINGH", fatherName: "MANDEEP SINGH", classLeft: "X", dateOfIssue: "05/04/2025" },
  { sno: 9, tcNo: 482, admnNo: 2518, studentName: "GURJOT SINGH", fatherName: "SOHAN SINGH", classLeft: "IX", dateOfIssue: "09/04/2025" },
  { sno: 10, tcNo: 483, admnNo: "", studentName: "", fatherName: "", classLeft: "", dateOfIssue: "" },
  { sno: 11, tcNo: 484, admnNo: 2277, studentName: "MANRAJ SINGH NIRMAN", fatherName: "DAVINDER SINGH", classLeft: "I", dateOfIssue: "09/04/2025" },
  { sno: 12, tcNo: 485, admnNo: 2180, studentName: "RANDEEP KAUR", fatherName: "AMARJIT SINGH", classLeft: "X", dateOfIssue: "16/04/2025" },
  { sno: 13, tcNo: 486, admnNo: "", studentName: "", fatherName: "", classLeft: "", dateOfIssue: "" },
  { sno: 14, tcNo: 487, admnNo: 1013, studentName: "HARJOT SINGH", fatherName: "DAVINDER SINGH", classLeft: "X", dateOfIssue: "16/04/2025" },
  { sno: 15, tcNo: 488, admnNo: 2579, studentName: "MOHAMMAD REHMAN", fatherName: "VAKIL MOHD", classLeft: "U.K.G.", dateOfIssue: "17/04/2025" },
  { sno: 16, tcNo: 489, admnNo: 2296, studentName: "SUKHWINDER SINGH", fatherName: "JAGBIR SINGH", classLeft: "X", dateOfIssue: "19/04/2025" },
  { sno: 17, tcNo: 490, admnNo: "", studentName: "", fatherName: "", classLeft: "", dateOfIssue: "" },
  { sno: 18, tcNo: 491, admnNo: 2295, studentName: "NIYAMAT KAUR", fatherName: "JAGBIR SINGH", classLeft: "VI", dateOfIssue: "19/04/2025" },
  { sno: 19, tcNo: 492, admnNo: 2565, studentName: "SIMRAN KAUR", fatherName: "KARAM SINGH", classLeft: "XII", dateOfIssue: "21/04/2025" },
  { sno: 20, tcNo: 493, admnNo: 1920, studentName: "PRABHBIR SINGH", fatherName: "HARDEEP SINGH", classLeft: "IV", dateOfIssue: "21/04/2025" },
  { sno: 21, tcNo: 494, admnNo: 1177, studentName: "SAHIBJOT SINGH", fatherName: "BALKAR SINGH", classLeft: "VIII", dateOfIssue: "07/05/2025" },
  { sno: 22, tcNo: 495, admnNo: 1434, studentName: "GURNOOR SINGH", fatherName: "AJMER SINGH", classLeft: "VIII", dateOfIssue: "14/05/2025" },
  { sno: 23, tcNo: 496, admnNo: 2143, studentName: "GURLEEN KAUR", fatherName: "JIWAN SINGH", classLeft: "XI", dateOfIssue: "17/05/2025" },
];

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px',
};

const thTdStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  color: '#333',
  textAlign: 'left',
};

const headerStyle = {
  ...thTdStyle,
  backgroundColor: 'black',
  fontWeight: 'bold',
  color: 'white',
};

const StudentTCList = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Transfer Certificate (TC) List</h2>
      <div style={{ overflowX: 'auto' }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={headerStyle}>S.No.</th>
              <th style={headerStyle}>TC No.</th>
              <th style={headerStyle}>Admn No.</th>
              <th style={headerStyle}>Student Name</th>
              <th style={headerStyle}>Father's Name</th>
              <th style={headerStyle}>Class Left</th>
              <th style={headerStyle}>Date of Issue</th>
            </tr>
          </thead>
          <tbody>
            {tcData.map((item, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9f9f9' }}>
                <td style={thTdStyle}>{item.sno}</td>
                <td style={thTdStyle}>{item.tcNo}</td>
                <td style={thTdStyle}>{item.admnNo}</td>
                <td style={thTdStyle}>{item.studentName}</td>
                <td style={thTdStyle}>{item.fatherName}</td>
                <td style={thTdStyle}>{item.classLeft}</td>
                <td style={thTdStyle}>{item.dateOfIssue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTCList;
