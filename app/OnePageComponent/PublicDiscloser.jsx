"use client";
import React from "react";

export default function PublicDiscloser() {
  // Sample PDF data
  const pdfData = [
    { name: "Water-Testing-Report", link: "/pdfs/water-testing.pdf" },
    { name: "Fire-safety-certificate", link: "/pdfs/fire-safety.pdf" },
    { name: "Building-Safety-certificate", link: "/pdfs/building-safety.pdf" },
    { name: "RTE RECOGNITION CERTIFICATE", link: "/pdfs/rte-recognition.pdf" },
    {
      name: "CERTIFICATE OF REGISTRATION OF SOCIETIES",
      link: "/pdfs/registration-of-societies.pdf",
    },
    { name: "RTE CERTIFICATE", link: "/pdfs/rte-certificate.pdf" },
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
                download
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
