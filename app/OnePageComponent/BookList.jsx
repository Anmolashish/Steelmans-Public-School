"use client";
import React from "react";

const BookList = () => {
  const classData = [
    {
      className: "NURSERY (PRE-PREP)",
      books: [
        { sno: 1, name: "A FOR ALPHABET", publisher: "ERA" },
        { sno: 2, name: "HELLO MY NUMBER BOOK 1-20", publisher: "SMILE SEL" },
        { sno: 3, name: "MY LIL PICTURE BOOK", publisher: "ERA" },
        { sno: 4, name: "CRAFT & ACTIVITY", publisher: "SMILING WORLD" },
      ],
    },
    {
      className: "NURSERY (PREP)",
      books: [
        {
          sno: 1,
          name: "SMART KIDS WRITING SKILLS 1-20",
          publisher: "EVERGREEN",
        },
        { sno: 2, name: "PIC DICTIONARY BOOK A", publisher: "TUK PU." },
        { sno: 3, name: "THE SPIRIT OF ART A", publisher: "O.P PUBLISHERS" },
        { sno: 4, name: "WORD BOOK", publisher: "ERA" },
        { sno: 5, name: "ENGLISH WRITING CAPITAL LETTERS", publisher: "ERA" },
        { sno: 6, name: "AKHAR GIAN", publisher: "SMILING WORLD" },
        { sno: 7, name: "SING A SONG RHYMES A", publisher: "SKYKIDZ" },
      ],
    },
    {
      className: "LKG",
      books: [
        { sno: 1, name: "GO FOR WORDS", publisher: "EVERGREEN" },
        { sno: 2, name: "WRITING SKILLS C", publisher: "EVERGREEN" },
        { sno: 3, name: "WRITING SKILLS (1-50)", publisher: "EVERGREEN" },
        { sno: 4, name: "AKHAR GIAN", publisher: "ERA" },
        { sno: 5, name: "AKHAR RACHNA", publisher: "SUMIT" },
        { sno: 6, name: "AKSHAR GIAN", publisher: "ERA" },
        { sno: 7, name: "SING A SONG RHYMES B", publisher: "SKY KIDZ" },
        { sno: 8, name: "PIC BOOK", publisher: "ERA" },
        { sno: 9, name: "THE SPIRIT OF ART B", publisher: "O.P. PUBLISHERS" },
      ],
    },
    {
      className: "UKG",
      books: [
        { sno: 1, name: "ENGLISH WITH PHONICS (PRE PRIMER)", publisher: "TUK" },
        { sno: 2, name: "SMALL CURSIVE LETTER", publisher: "SMILING WORLD" },
        {
          sno: 3,
          name: "SMART KIDS WRITING SKILLS (1-100)",
          publisher: "EVERGREEN",
        },
        { sno: 4, name: "AAO SHABAD PADHIYE", publisher: "ERA" },
        { sno: 5, name: "ACTIVITY BOOK SHABAD RACHNA", publisher: "SUMIT" },
        { sno: 6, name: "HINDI SHABAD GIAN", publisher: "ERA" },
        {
          sno: 7,
          name: "WRITING SKILLS SHABAD LEKHAN",
          publisher: "EVERGREEN",
        },
        { sno: 8, name: "PICTURE SAFARI B", publisher: "SPARSH" },
        { sno: 9, name: "SING A SONG RHYMES B", publisher: "SKY KIDZ" },
        { sno: 10, name: "THE SPIRIT OF ART C", publisher: "O.P. PUBLISHERS" },
      ],
    },
    {
      className: "1ST",
      books: [
        { sno: 1, name: "ENGLISH READER", publisher: "SOUVENIR" },
        { sno: 2, name: "ENGLISH GRAMMAR", publisher: "SOUVENIR" },
        { sno: 3, name: "KIRAT PARVESHIKA", publisher: "M C PUB." },
        { sno: 4, name: "NAYI KIRAN", publisher: "FRANKLIN" },
        { sno: 5, name: "MATHS", publisher: "P. PUB" },
        { sno: 6, name: "EVS", publisher: "CORDOVA" },
        { sno: 7, name: "GENERAL KNOWLEDGE", publisher: "SHARMAN" },
        { sno: 8, name: "I LOVE TO DRAW", publisher: "S WORLD PUB." },
        { sno: 9, name: "GROW WITH INFORMATION", publisher: "HEADWORD" },
      ],
    },
    {
      className: "2ND",
      books: [
        { sno: 1, name: "ENGLISH READER", publisher: "SOUVENIR" },
        { sno: 2, name: "ENGLISH GRAMMAR", publisher: "SOUVENIR" },
        { sno: 3, name: "MOH DIYAN TANDAN", publisher: "GLOBAL" },
        { sno: 4, name: "NAYI KIRAN", publisher: "FRANKLIN" },
        { sno: 5, name: "HINDI VYAKARAN", publisher: "S. MINDS" },
        { sno: 6, name: "EVS", publisher: "CORDOVA" },
        { sno: 7, name: "GENERAL KNOWLEDGE", publisher: "SHARMAN" },
        { sno: 8, name: "I LOVE TO DRAW", publisher: "S WORLD PUB." },
        { sno: 9, name: "GROW WITH INFORMATION", publisher: "HEADWORD" },
        { sno: 10, name: "MATHS", publisher: "P. PUB" },
      ],
    },
    {
      className: "3RD",
      books: [
        { sno: 1, name: "ENGLISH READER", publisher: "SOUVENIR" },
        { sno: 2, name: "ENGLISH GRAMMAR", publisher: "SOUVENIR" },
        { sno: 3, name: "MOH DIYAN TANDAN", publisher: "GLOBAL" },
        { sno: 4, name: "PUNJABI GRAMMAR", publisher: "SUPER" },
        { sno: 5, name: "NAYI KIRAN HINDI", publisher: "FRANKLIN" },
        { sno: 6, name: "HINDI VYAKARAN", publisher: "SUPER" },
        { sno: 7, name: "MATHS", publisher: "P. PUB" },
        { sno: 8, name: "EVS", publisher: "CORDOVA" },
        { sno: 9, name: "GENERAL KNOWLEDGE", publisher: "SHARMAN" },
        { sno: 10, name: "I LOVE TO DRAW", publisher: "S WORLD PUB." },
        { sno: 11, name: "GROW WITH INFORMATION", publisher: "HEADWORD" },
      ],
    },
    {
      className: "4TH",
      books: [
        { sno: 1, name: "ENGLISH READER", publisher: "SOUVENIR" },
        { sno: 2, name: "ENGLISH GRAMMAR", publisher: "SOUVENIR" },
        { sno: 3, name: "MOH DIYAN TANDAN", publisher: "GLOBAL" },
        { sno: 4, name: "PUNJABI GRAMMAR", publisher: "SUPER" },
        { sno: 5, name: "NAYI KIRAN", publisher: "FRANKLIN" },
        { sno: 6, name: "HINDI VYAKARAN", publisher: "SUPER" },
        { sno: 7, name: "MATHS", publisher: "P. PUB" },
        { sno: 8, name: "S.S.T. (GROW WITH SOCIAL)", publisher: "HEADWORD" },
        { sno: 9, name: "SCIENCE IN LIFE TODAY", publisher: "P.P. PUB." },
        { sno: 10, name: "GENERAL KNOWLEDGE", publisher: "SHARMAN" },
        { sno: 11, name: "I LOVE TO DRAW", publisher: "S WORLD PUB." },
        { sno: 12, name: "GROW WITH INFORMATION", publisher: "HEADWORD" },
      ],
    },
    {
      className: "5TH",
      books: [
        { sno: 1, name: "ENGLISH READER", publisher: "SOUVENIR" },
        { sno: 2, name: "ENGLISH GRAMMAR", publisher: "SOUVENIR" },
        { sno: 3, name: "MOH DIYAN TANDAN", publisher: "GLOBAL" },
        { sno: 4, name: "PUNJABI GRAMMAR", publisher: "SUPER" },
        { sno: 5, name: "NAYI KIRAN", publisher: "FRANKLIN" },
        { sno: 6, name: "HINDI VYAKARAN", publisher: "SUPER" },
        { sno: 7, name: "MATHS", publisher: "P. PUB" },
        { sno: 8, name: "S.S.T. (GROW WITH SOCIAL)", publisher: "HEADWORD" },
        { sno: 9, name: "SCIENCE IN LIFE TODAY", publisher: "P.P. PUB." },
        { sno: 10, name: "GENERAL KNOWLEDGE", publisher: "SHARMAN" },
        { sno: 11, name: "I LOVE TO DRAW", publisher: "S WORLD PUB." },
        { sno: 12, name: "GROW WITH INFORMATION", publisher: "HEADWORD" },
      ],
    },
    {
      className: "6TH",
      books: [
        { sno: 1, name: "ENGLISH READER", publisher: "SOUVENIR" },
        { sno: 2, name: "ENGLISH GRAMMAR", publisher: "SOUVENIR" },
        { sno: 3, name: "GUNTAS KIRNA", publisher: "GUNTAS" },
        { sno: 4, name: "PUNJABI GRAMMAR", publisher: "SUPER" },
        { sno: 5, name: "NAYI KIRAN", publisher: "FRANKLIN" },
        { sno: 6, name: "HINDI VYAKARAN", publisher: "SUPER" },
        { sno: 7, name: "MATHS", publisher: "NCERT" },
        { sno: 8, name: "S.S.T.", publisher: "NCERT" },
        { sno: 9, name: "SCIENCE", publisher: "P.P. PUB." },
        { sno: 10, name: "GENERAL KNOWLEDGE", publisher: "SHARMAN" },
        { sno: 11, name: "MASTER ART", publisher: "P.P. PUB." },
        { sno: 12, name: "GROW WITH INFORMATION", publisher: "HEADWORD" },
        {
          sno: 13,
          name: "ARTIFICIAL INTELLIGENCE CONNECT",
          publisher: "HEADWORD",
        },
      ],
    },
    {
      className: "7TH",
      books: [
        { sno: 1, name: "ENGLISH READER", publisher: "SOUVENIR" },
        { sno: 2, name: "ENGLISH GRAMMAR", publisher: "SOUVENIR" },
        { sno: 3, name: "GUNTAS KIRNA", publisher: "GUNTAS" },
        { sno: 4, name: "PUNJABI GRAMMAR", publisher: "SUPER" },
        { sno: 5, name: "NAYI KIRAN", publisher: "FRANKLIN" },
        { sno: 6, name: "HINDI VYAKARAN", publisher: "SUPER" },
        { sno: 7, name: "MATHS", publisher: "NCERT" },
        { sno: 8, name: "S.S.T. (ECONOMICS)", publisher: "NCERT" },
        { sno: 9, name: "S.S.T. (HISTORY)", publisher: "NCERT" },
        { sno: 10, name: "S.S.T. (GEOGRAPHY)", publisher: "NCERT" },
        { sno: 11, name: "SCIENCE", publisher: "P.P. PUB." },
        { sno: 12, name: "GENERAL KNOWLEDGE", publisher: "SHARMAN" },
        { sno: 13, name: "MASTER ART", publisher: "P.P. PUB." },
        { sno: 14, name: "GROW WITH INFORMATION", publisher: "HEADWORD" },
      ],
    },
    {
      className: "8TH",
      books: [
        { sno: 1, name: "ENGLISH READER", publisher: "SOUVENIR" },
        { sno: 2, name: "ENGLISH GRAMMAR", publisher: "SOUVENIR" },
        { sno: 3, name: "GUNTAS KIRNA", publisher: "GUNTAS" },
        { sno: 4, name: "PUNJABI GRAMMAR", publisher: "SUPER" },
        { sno: 5, name: "NAYI KIRAN", publisher: "FRANKLIN" },
        { sno: 6, name: "HINDI VYAKARAN", publisher: "SUPER" },
        { sno: 7, name: "MATHS", publisher: "NCERT" },
        { sno: 8, name: "S.S.T. (ECONOMICS)", publisher: "NCERT" },
        { sno: 9, name: "S.S.T. (HISTORY)", publisher: "NCERT" },
        { sno: 10, name: "S.S.T. (GEOGRAPHY)", publisher: "NCERT" },
        { sno: 11, name: "SCIENCE", publisher: "P.P. PUB." },
        { sno: 12, name: "GENERAL KNOWLEDGE", publisher: "SHARMAN" },
        { sno: 13, name: "MASTER ART", publisher: "P.P. PUB." },
        { sno: 14, name: "GROW WITH INFORMATION", publisher: "HEADWORD" },
        { sno: 15, name: "ARTIFICIAL INTELLIGENCE", publisher: "BLUEPRINT" },
      ],
    },
    {
      className: "9TH",
      books: [
        { sno: 1, name: "SPARSH", publisher: "NCERT" },
        { sno: 2, name: "SANCYAN", publisher: "NCERT" },
        {
          sno: 3,
          name: "HINDI GRAMMAR COURSE B",
          publisher: "S. PUBLICATIONS",
        },
        { sno: 4, name: "BEHIEVE", publisher: "NCERT" },
        { sno: 5, name: "MOMENTS", publisher: "NCERT" },
        { sno: 6, name: "MATHS", publisher: "NCERT" },
        { sno: 7, name: "MATHS LAB", publisher: "ANAYA" },
        { sno: 8, name: "SCIENCE", publisher: "NCERT" },
        { sno: 9, name: "SCIENCE LAB", publisher: "ANAYA" },
        { sno: 10, name: "VANGI", publisher: "GUNTAS" },
        { sno: 11, name: "SAHIT MALA", publisher: "GUNTAS" },
        { sno: 12, name: "PUNJABI GRAMMAR", publisher: "GUNTAS" },
        { sno: 13, name: "HISTORY", publisher: "NCERT" },
        { sno: 14, name: "GEOGRAPHY", publisher: "NCERT" },
        { sno: 15, name: "POLITICAL SCIENCE", publisher: "NCERT" },
        { sno: 16, name: "ECONOMICS", publisher: "NCERT" },
        { sno: 17, name: "GROW WITH INFORMATION 10", publisher: "HEADWORD" },
        { sno: 18, name: "MATHS", publisher: "VK PUB." },
      ],
    },
    {
      className: "10TH",
      books: [
        { sno: 1, name: "SPARSH", publisher: "NCERT" },
        { sno: 2, name: "SANCYAN", publisher: "NCERT" },
        {
          sno: 3,
          name: "HINDI GRAMMAR COURSE B",
          publisher: "S. PUBLICATIONS",
        },
        { sno: 4, name: "FIRST FLIGHT", publisher: "NCERT" },
        { sno: 5, name: "FOOT PRINTS", publisher: "NCERT" },
        { sno: 6, name: "MATHS", publisher: "NCERT" },
        { sno: 7, name: "MATHS LAB", publisher: "ANAYA" },
        { sno: 8, name: "SCIENCE", publisher: "NCERT" },
        { sno: 9, name: "SCIENCE LAB", publisher: "ANAYA" },
        { sno: 10, name: "VANGI", publisher: "METRO" },
        { sno: 11, name: "SAHIT MALA", publisher: "METRO" },
        { sno: 12, name: "PUNJABI GRAMMAR", publisher: "NEW BOOK CO." },
        { sno: 13, name: "HISTORY", publisher: "NCERT" },
        { sno: 14, name: "GEOGRAPHY", publisher: "NCERT" },
        { sno: 15, name: "POLITICAL SCIENCE", publisher: "NCERT" },
        { sno: 16, name: "ECONOMICS", publisher: "NCERT" },
        { sno: 17, name: "MATHS", publisher: "V.K PUBLISHERS" },
      ],
    },
  ];

  const bookShops = [
    "ADARSH BOOK DEPOT",
    "PEPSU BOOK DEPOT",
    "SURESH BOOK DEPOT",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">School Book List</h1>

      {/* Class-wise Book Tables */}
      {classData.map((classInfo) => (
        <div key={classInfo.className} className="mb-12">
          <h2 className="text-xl font-semibold mb-4 bg-blue-100 p-3 rounded-lg">
            CLASS {classInfo.className}
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-3 px-4 text-left w-16">S. NO.</th>
                  <th className="py-3 px-4 text-left">NAME OF BOOK</th>
                  <th className="py-3 px-4 text-left">PUBLISHER</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {classInfo.books.map((book) => (
                  <tr
                    key={`${classInfo.className}-${book.sno}`}
                    className="hover:bg-gray-50"
                  >
                    <td className="py-3 px-4">{book.sno}</td>
                    <td className="py-3 px-4">{book.name}</td>
                    <td className="py-3 px-4">{book.publisher}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {/* Book Shops Information */}
      <div className="mt-10 p-6 bg-gray-100 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">
          THE BOOKS ARE AVAILABLE IN ANY SHOP FROM PATIALA OR ON ANY OF THE
          FOLLOWING SHOPS:
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          {bookShops.map((shop) => (
            <li key={shop} className="text-lg">
              {shop}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookList;
