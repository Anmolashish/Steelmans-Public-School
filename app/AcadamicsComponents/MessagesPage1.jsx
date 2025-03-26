"use client";
import React, { useContext } from "react";
import Information from "../Data/SchoolData";

export default function MessagesPage1() {
  const data = useContext(Information);
  return (
    <div className="w-full min-h-screen flex justify-center flex-col items-center">
      <div className="main w-[90%] gap-5 p4 flex min-h-[70vh] h-fit max-w-[1200px] py-10">
        <div className="w-1/3  h-full ">
          <img
            src="https://steelmansschool.com/wp-content/uploads/2019/02/founder-739x1024.jpg"
            alt=""
            className="w-full rounded-xl"
          />
          <div className="text-lg font-bold text-center mt-4">
            LATE S. GURCHARAN SINGH DHINDSA
          </div>
          <div className="text-sm font-light text-center">(Founder)</div>
        </div>
        <div className="w-2/3  h-full  ">
          <div className="text-2xl font-bold ">
            “I believe that quality education is a responsibility shared by
            home, school, student and community. Schools are centres of
            community endeavour to improve the quality of living and learning
            for all citizens. This philosophy makes quality education a dynamic
            process and a collaborative effort”
          </div>
          <div className="text-2xl font-bold mt-10">
            “School must promote and maintain the ideals of democracy. The
            preservation of a free society depends upon the ability of its
            citizens to protect individual liberty, encourage social justice,
            make informed choices and develop new ways of solving problem”
          </div>
          <div className="text-2xl font-bold mt-10">
            “Students must recognize that they have a responsibility to learn
            and that there are appropriate ways of dealing with feelings and
            problems. Only as students develop confidence and trust in their own
            abilities to master skills, gain knowledge and solve problems will
            they progress to a point where there they will make larger
            contributions and be productive and responsible citizens in later
            years”
          </div>
        </div>
      </div>
      <div className="main w-[80%] gap-5 p4 flex min-h-[20vh] h-fit max-w-[1200px] py-10">
        <div className="text-3xl text-center font-bold ">
          “I believe that quality education is a responsibility shared by home,
          school, student and community. Schools are centres of community
          endeavour to improve the quality of living and learning for all
          citizens. This philosophy makes quality education a dynamic process
          and a collaborative effort”
        </div>
      </div>
    </div>
  );
}
