"use client";
import { createContext } from "react";

const Information = createContext();

export function SchoolData({ children }) {
  const data = {
    messages: [
      {
        id: 1,
        name: "LATE S. GURCHARAN SINGH DHINDSA",
        heading: "Founder",
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
      {
        id: 2,
        name: "JASBIR SINGH DHINDSA",
        heading: "President",

        position: "(President)",
        message: [
          "Write down all the great things about everyone you know. Make a huge list of all the wonderful things about you. Compliment people wherever you go. Praise every single thing you see. Be a ray of sunshine to everyone you meet, and make their day better for having seen you. Say “Thank you” at every turn. Walk, talk, think and breathe appreciation and gratitude.",
          "To change your world all you have to do is manage your thoughts and feelings on the inside of you, and then your whole world changes",
          "When you do this, your outer life will change to reflect your inner state of being",
        ],

        quote: "CHANGE INSIDE OF YOU BE A RAY OF SUNSHINE TO EVERYONE YOU MEET",
        slug: "president",
        image:
          "https://steelmansschool.com/wp-content/uploads/2019/02/president-768x604.jpg ",
      },

      {
        id: 3,
        name: "SEHEZ DHINDSA",
        heading: "Vice President",

        position: " (Vice-President)",
        message: [
          "There is nothing that gives me more pleasure than seeing the dreams, the goals and the aspirations we’ve had for Steelmans come true. Nineteen years back we saw a dream. A dream to create a school where leaders are raised and turned into reality by actions. We were sure of our destination and knew what was needed to reach there : hard work, commitment and relentless actions",
          "What you are holding in your hands is more than a magazine: it’s a record of the milestones we have crossed in this great journey. It’s also a chronicle of our efforts to transform our students into future leaders. Today, marching with us is an army of students who live their dreams everyday and act upon them",
          "Steelmanians standing out and excelling in competitions, examinations, talent searches and Sports Meets at National and States Levels is very much satisfying. We feel proud to affirm that Steelmans has gone way beyond being a school.",
        ],
        quote:
          "THERE ARE VERY FEW PEOPLE WHO CAN DREAM BIG,AND EVEN FEWER, WHO ACT UPON IT",
        slug: "vice-president",
        image:
          "https://steelmansschool.com/wp-content/uploads/2019/02/vice-president-768x582.jpg",
      },
      {
        id: 4,
        name: "ANJALI GAUR ",
        heading: "Principal",

        position: "(Principal)",
        message: [
          "“Develop a passion for learning if you do, you will never cease to grow”. – Anthony J.D. AngeloEducation plays an important role in enabling a person to face a real life situation with adequate knowledge. School is a temple of learning and in S.P.S we are making our best efforts to give quality education to our students.Steelmans Public School is synonymous with excellence. It envisages imparting the best of education along with moulding of child’s personality and equipping him with all necessary skills to lead a happy, disciplined and successful life.The culture of rural background and the technology of modern world are mixed judiciously at Steelmans Public School to create conducive academic atmosphere, nice ambience for effective, pleasure and better learning and for transforming students into brilliant human beings",
          "I convey my heartiest gratitude to management for entrusting me with the responsibility of spear-heading Steelmans Public School towards excellence. I firmly believe that together with the support of the management, staff and parents we can pave on the path of success",
          "“Challenges make you more responsible. Always remember that life without struggle is a life without success. Don’t give up and learn not to quit”.",
        ],
        quote:
          "SUCCESS COMES TO THOSE WHO WORK HARD AND STAYS WITH THOSE, WHO DON’T REST ON THE LAURELS OF THE PAST",
        slug: "principal",
        image:
          "https://steelmansschool.com/wp-content/uploads/2019/02/From-the-desk-of-Principal-ANJALI-GAUR-768x512.jpg",
      },
    ],
  };
  return <Information.Provider value={data}>{children}</Information.Provider>;
}

export default Information;
