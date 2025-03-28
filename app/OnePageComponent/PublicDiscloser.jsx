"use client";
import React from "react";

export default function PublicDiscloser() {
  const pdfData = [
    {
      name: "Water-Testing-Report",
      link: "http://steelmansschool.com/wp-content/uploads/2025/02/Water-Testing-Report-1-8.pdf",
    },
    {
      name: "Fire-safety-certificate",
      link: "https://steelmansschool.com/wp-content/uploads/2025/02/Fire-safety-certificate.pdf",
    },
    {
      name: "Building-Safety-certificate",
      link: "https://steelmansschool.com/wp-content/uploads/2025/02/Building-Safety-certificate.pdf",
    },
    {
      name: "RTE RECOGNITION CERTIFICATE",
      link: "https://steelmansschool.com/wp-content/uploads/2025/02/RTE-RECOGNITION-CERTIFICATE.pdf",
    },
    {
      name: "CERTIFICATE OF REGISTRATION OF SOCIETIES",
      link: "https://steelmansschool.com/wp-content/uploads/2025/02/CERTIFICATE-OF-REGISTRATION-OF-SOCIETIES.pdf",
    },
    {
      name: "RTE CERTIFICATE",
      link: "https://steelmansschool.com/wp-content/uploads/2025/02/RTE-CERTIFICATE.pdf",
    },
    {
      name: "Fee Structure",
      link: "https://steelmansschool.com/wp-content/uploads/2025/02/FEE-STRUCTURE.pdf",
    },
    {
      name: "AFFILIATION EXTENSION LETTER",
      link: " https://steelmansschool.com/wp-content/uploads/2025/02/AFFILIATION-EXTENSION-LEETER.pdf",
    },
    {
      name: "ACADEMIC CALENDER",
      link: "https://steelmansschool.com/wp-content/uploads/2025/02/ACADEMIC-CALENDER.pdf",
    },
    {
      name: "NOC Certificate",
      link: "https://steelmansschool.com/wp-content/uploads/2025/02/NOC-CERTIFICATE.pdf",
    },
    {
      name: "List of PTA",
      link: "https://steelmansschool.com/wp-content/uploads/2025/02/List-of-PTA.pdf",
    },
    {
      name: "Last Three Years Result",
      link: "https://steelmansschool.com/wp-content/uploads/2025/02/Last-Three-Years-Result.pdf",
    },
    {
      name: "SCHOOL MANAGING COMMITTEE",
      link: "https://steelmansschool.com/wp-content/uploads/2025/03/SCHOOL-MANAGING-COMMITTEE-2.pdf",
    },
    {
      name: "MANDATORY DISCLOSURE",
      link: "https://steelmansschool.com/wp-content/uploads/2025/03/MENDATORY-DISCLOSURE-2.docx",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-10">
      <div className="container max-w-4xl bg-white shadow-lg rounded-lg p-8">
        {/* Header */}
        <div className="text-center bg-blue-500 text-white font-bold text-xl py-4 rounded-t-md">
          Download Pdf
        </div>

        {/* PDF List */}
        <div className="divide-y divide-gray-300">
          {pdfData.map((pdf, index) => (
            <div key={index} className="flex justify-between items-center py-6">
              <a
                href={pdf.link}
                download
                className="text-blue-600 font-bold hover:underline"
              >
                {pdf.name}
              </a>

              <a
                href={pdf.link}
                target="_blank"
                className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
