"use client";
import React from "react";

const TransferCertifcates = () => {
  const tcData = [
    {
      sno: 1,
      tcNo: "11/524",
      admnNo: 1411,
      studentName: "Amanveer Singh",
      fatherName: "S. Ravinder Singh",
      classLeft: "IV",
      dateOfIssue: "29/06/2020",
    },
    {
      sno: 2,
      tcNo: "11/525",
      admnNo: 1057,
      studentName: "Gurmanjot Singh Cheema",
      fatherName: "S. Mandeep Singh",
      classLeft: "IV",
      dateOfIssue: "16/07/2020",
    },
    {
      sno: 3,
      tcNo: "11/526",
      admnNo: 2018,
      studentName: "Pushwinder Singh",
      fatherName: "S. Jagtar Singh",
      classLeft: "XII",
      dateOfIssue: "17/07/2020",
    },
    {
      sno: 4,
      tcNo: "11/528",
      admnNo: 1310,
      studentName: "Gobind Singh",
      fatherName: "S. Dilbagh Singh",
      classLeft: "IX",
      dateOfIssue: "20/07/2020",
    },
    {
      sno: 5,
      tcNo: "11/529",
      admnNo: 504,
      studentName: "Harmandeep Singh Dhariwal",
      fatherName: "S. Gurpal Singh",
      classLeft: "XII",
      dateOfIssue: "04/08/2020",
    },
    {
      sno: 6,
      tcNo: "11/530",
      admnNo: 1848,
      studentName: "Tarandeep Singh",
      fatherName: "S. Bhinder Singh",
      classLeft: "X",
      dateOfIssue: "10/08/2020",
    },
    {
      sno: 7,
      tcNo: "11/531",
      admnNo: 2024,
      studentName: "Navjot Singh",
      fatherName: "S. Hakam Singh",
      classLeft: "XI",
      dateOfIssue: "08/08/2020",
    },
    {
      sno: 8,
      tcNo: "11/532",
      admnNo: 1432,
      studentName: "Jashanpreet Singh",
      fatherName: "S. Surjit Singh",
      classLeft: "X",
      dateOfIssue: "17/08/2020",
    },
    {
      sno: 9,
      tcNo: "11/533",
      admnNo: 1849,
      studentName: "Harmanpreet Kaur",
      fatherName: "S. Binder Singh",
      classLeft: "XII",
      dateOfIssue: "18/08/2020",
    },
    {
      sno: 10,
      tcNo: "11/534",
      admnNo: 1990,
      studentName: "Amisha",
      fatherName: "S. Ranjit Singh",
      classLeft: "XI",
      dateOfIssue: "19/08/2020",
    },
    {
      sno: 11,
      tcNo: "11/535",
      admnNo: 661,
      studentName: "Sachpreet Kaur",
      fatherName: "S. Gurpreet Singh",
      classLeft: "X",
      dateOfIssue: "01/09/2020",
    },
    {
      sno: 12,
      tcNo: "11/536",
      admnNo: 895,
      studentName: "Manavjot Singh",
      fatherName: "S. Gurpreet Singh",
      classLeft: "VIII",
      dateOfIssue: "01/09/2020",
    },
    {
      sno: 13,
      tcNo: "11/537",
      admnNo: 1896,
      studentName: "Harsimran Kaur",
      fatherName: "S. Kashmira Singh",
      classLeft: "III",
      dateOfIssue: "12/09/2020",
    },
    {
      sno: 14,
      tcNo: "11/538",
      admnNo: 1516,
      studentName: "Ajay Singh",
      fatherName: "S. Kesar Singh",
      classLeft: "IX",
      dateOfIssue: "12/09/2020",
    },
    {
      sno: 15,
      tcNo: "11/539",
      admnNo: 1224,
      studentName: "Jashandeep Singh",
      fatherName: "S. Jarnail Singh",
      classLeft: "VIII",
      dateOfIssue: "16/09/2020",
    },
    {
      sno: 16,
      tcNo: "11/540",
      admnNo: 1614,
      studentName: "Jasleen Kaur",
      fatherName: "S. Bhupinder Singh",
      classLeft: "VIII",
      dateOfIssue: "16/09/2020",
    },
    {
      sno: 17,
      tcNo: "11/541",
      admnNo: 769,
      studentName: "Vanshika Garg",
      fatherName: "Sh. Ashok Kumar",
      classLeft: "X",
      dateOfIssue: "17/09/2020",
    },
    {
      sno: 18,
      tcNo: "11/542",
      admnNo: 2001,
      studentName: "Bhupinder Singh Deol",
      fatherName: "S. Hardeep Singh",
      classLeft: "XI",
      dateOfIssue: "17/09/2020",
    },
    {
      sno: 19,
      tcNo: "11/543",
      admnNo: 2021,
      studentName: "Akashdeep Singh",
      fatherName: "S. Balvir Singh",
      classLeft: "XI",
      dateOfIssue: "21/09/2020",
    },
    {
      sno: 20,
      tcNo: "11/544",
      admnNo: 2022,
      studentName: "Ekamveer Singh",
      fatherName: "S. Ninder Singh",
      classLeft: "XI",
      dateOfIssue: "21/09/2020",
    },
    {
      sno: 21,
      tcNo: "11/546",
      admnNo: 754,
      studentName: "Harnoor Gill",
      fatherName: "L. Narinder Singh",
      classLeft: "X",
      dateOfIssue: "22/09/2020",
    },
    {
      sno: 22,
      tcNo: "11/547",
      admnNo: 1862,
      studentName: "Ramanpreet Singh",
      fatherName: "S. Kulwant Singh",
      classLeft: "XII",
      dateOfIssue: "03/10/2020",
    },
    {
      sno: 23,
      tcNo: "11/548",
      admnNo: 946,
      studentName: "Navneet Kaur",
      fatherName: "S. Pargat Singh",
      classLeft: "VII",
      dateOfIssue: "03/10/2020",
    },
    {
      sno: 24,
      tcNo: "11/550",
      admnNo: 1027,
      studentName: "Jasmeet Singh",
      fatherName: "S. Pargat Singh",
      classLeft: "V",
      dateOfIssue: "03/10/2020",
    },
    {
      sno: 25,
      tcNo: "12/551",
      admnNo: 1734,
      studentName: "Sehajpreet Kaur",
      fatherName: "S. Sandeep Singh",
      classLeft: "LKG",
      dateOfIssue: "03/10/2020",
    },
    {
      sno: 26,
      tcNo: "12/552",
      admnNo: 1325,
      studentName: "Komalpreet Kaur",
      fatherName: "S. Sandeep Singh",
      classLeft: "I",
      dateOfIssue: "03/10/2020",
    },
    {
      sno: 27,
      tcNo: "12/553",
      admnNo: 729,
      studentName: "Harshdeep Singh",
      fatherName: "S. Naginder Singh",
      classLeft: "X",
      dateOfIssue: "19/10/2020",
    },
    {
      sno: 28,
      tcNo: "12/554",
      admnNo: 1813,
      studentName: "Saibhang Singh",
      fatherName: "S. Manminder Singh",
      classLeft: "XII",
      dateOfIssue: "19/10/2020",
    },
    {
      sno: 29,
      tcNo: "12/555",
      admnNo: 1354,
      studentName: "Gurchain Singh",
      fatherName: "S. Avtar Singh",
      classLeft: "XII",
      dateOfIssue: "19/10/2020",
    },
    {
      sno: 30,
      tcNo: "12/556",
      admnNo: 1379,
      studentName: "Kamaljeet Singh",
      fatherName: "S. Ranjeet Singh",
      classLeft: "X",
      dateOfIssue: "20/10/2020",
    },
    {
      sno: 31,
      tcNo: "12/557",
      admnNo: 2017,
      studentName: "Simranjeet Singh",
      fatherName: "S. Satgur Singh",
      classLeft: "XII",
      dateOfIssue: "07/11/2020",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">TCs Issued</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 text-left">SNO.</th>
              <th className="py-3 px-4 text-left">TC No.</th>
              <th className="py-3 px-4 text-left">Admn No.</th>
              <th className="py-3 px-4 text-left">Student Name</th>
              <th className="py-3 px-4 text-left">Father's Name</th>
              <th className="py-3 px-4 text-left">Class Left</th>
              <th className="py-3 px-4 text-left">Date of Issue</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tcData.map((item) => (
              <tr key={item.sno} className="hover:bg-gray-50">
                <td className="py-3 px-4">{item.sno}</td>
                <td className="py-3 px-4">{item.tcNo}</td>
                <td className="py-3 px-4">{item.admnNo}</td>
                <td className="py-3 px-4">{item.studentName}</td>
                <td className="py-3 px-4">{item.fatherName}</td>
                <td className="py-3 px-4">{item.classLeft}</td>
                <td className="py-3 px-4">{item.dateOfIssue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransferCertifcates;
