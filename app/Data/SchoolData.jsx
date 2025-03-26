"use client";
import { createContext } from "react";

const Information = createContext();

export function SchoolData({ children }) {
  const data = {
    messages: [
      {
        id: 1,
        name: "LATE S. GURCHARAN SINGH DHINDSA",
        position: "(Founder)",
        message: [
          "I believe that quality education is a responsibility shared by home, school, student and community. Schools are centres of community endeavour to improve the quality of living and learning for all citizens. This philosophy makes quality education a dynamic process and a collaborative effort",

          "“School must promote and maintain the ideals of democracy. The preservation of a free society depends upon the ability of its citizens to protect individual liberty, encourage social justice, make informed choices and develop new ways of solving problem”",

          "“Students must recognize that they have a responsibility to learn and that there are appropriate ways of dealing with feelings and problems. Only as students develop confidence and trust in their own abilities to master skills, gain knowledge and solve problems will they progress to a point where there they will make larger contributions and be productive and responsible citizens in later years”",
        ],
        quote:
          "I believe that quality education is a responsibility shared by home, school, student and community. Schools are centres of community endeavour to improve the quality of living and learning for all citizens. This philosophy makes quality education a dynamic process and a collaborative effort",
        slug: "founder",
        image:
          "https://steelmansschool.com/wp-content/uploads/2019/02/founder-739x1024.jpg",
      },
    ],
  };
  return <Information.Provider value={data}>{children}</Information.Provider>;
}

export default Information;
