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
    infrastructure: [
      {
        id: 1,
        name: "School Building",
        images: [
          {
            id: 1,
            image:
              "https://steelmansschool.com/wp-content/uploads/2020/11/1-2-768x309.jpg",
            title: "Main Building",
          },
          {
            id: 2,
            image:
              "https://steelmansschool.com/wp-content/uploads/2019/11/Elementary-Wing-768x296.jpg",
            title: "Elementary Wing",
          },
          {
            id: 3,
            image:
              "https://steelmansschool.com/wp-content/uploads/2019/11/PrimaryWing-768x512.jpg",
            title: "Primary Wing",
          },
          {
            id: 4,
            image:
              "https://steelmansschool.com/wp-content/uploads/2019/11/SeniorWing-1-768x512.jpg",
            title: "Main Building",
          },
        ],
      },

      {
        id: 2,
        name: "Library",
        images: [
          {
            id: 1,
            image:
              "https://steelmansschool.com/wp-content/uploads/2016/03/Library-6-768x512.jpg",
            title: "Library",
          },
          {
            id: 2,
            image:
              "https://steelmansschool.com/wp-content/uploads/2016/03/Library-2-768x512.jpg",
            title: "Library",
          },
          {
            id: 3,
            image:
              "https://steelmansschool.com/wp-content/uploads/2019/11/Library-8-768x512.jpg",
            title: "Library",
          },
          {
            id: 4,
            image:
              "https://steelmansschool.com/wp-content/uploads/2019/11/library-768x512.jpg",
            title: "Library",
          },
        ],
      },
      {
        id: 3,
        name: "School Labs",
        images: [
          {
            id: 1,
            image:
              "https://steelmansschool.com/wp-content/uploads/2019/11/Bio_Lab-1-768x512.jpg",
            title: "Biology Lab",
          },
          {
            id: 2,
            image:
              "https://steelmansschool.com/wp-content/uploads/2019/11/Chemistry_Lab-2-768x392.jpg",
            title: "Chemistry Lab",
          },
          {
            id: 3,
            image:
              "https://steelmansschool.com/wp-content/uploads/2019/11/Physics_Lab-2-768x512.jpg",
            title: "Physics Lab",
          },
          {
            id: 4,
            image:
              "https://steelmansschool.com/wp-content/uploads/2019/11/ComputerLabs-768x512.jpg",
            title: "Computer Lab",
          },
        ],
      },
      {
        id: 4,
        name: "Playground",
        images: [
          {
            id: 1,
            image:
              "https://steelmansschool.com/wp-content/uploads/2019/11/Yoga-768x512.jpg",
            title: "Playground",
          },
          {
            id: 2,
            image:
              "https://steelmansschool.com/wp-content/uploads/2019/03/Playgrounds-3-768x512.jpg",
            title: "Playground",
          },
          {
            id: 3,
            image:
              "https://steelmansschool.com/wp-content/uploads/2019/03/Playgrounds-1-768x512.jpg",
            title: "Playground",
          },
          {
            id: 4,
            image:
              "https://steelmansschool.com/wp-content/uploads/2019/03/Playgrounds-2-768x512.jpg",
            title: "Playground",
          },
        ],
      },
    ],
    sports: [
      {
        id: 1,
        name: "Lawn Tennis",
        images: [
          {
            id: 1,
            image:
              "https://steelmansschool.com/wp-content/uploads/2019/11/Tennis-1024x683.jpg",
            title: "Lawn Tennis Court",
          },
        ],
      },
      {
        id: 2,
        name: "Basket Ball",
        images: [
          {
            id: 1,
            image:
              "https://steelmansschool.com/wp-content/uploads/2019/11/BasketBall-1024x683.jpg",
            title: "Basket Ball Court",
          },
        ],
      },
      {
        id: 3,
        name: "Volley Ball",
        images: [
          {
            id: 1,
            image:
              "https://steelmansschool.com/wp-content/uploads/2019/11/VolleyBall.jpg",
            title: "Volley Ball Court",
          },
        ],
      },
      {
        id: 4,
        name: "Badminton",
        images: [
          {
            id: 1,
            image:
              "https://steelmansschool.com/wp-content/uploads/2019/11/Badminton-1024x683.jpg",
            title: "Badminton Court",
          },
        ],
      },
      {
        id: 5,
        name: "Table Tennis",
        images: [
          {
            id: 1,
            image:
              "https://steelmansschool.com/wp-content/uploads/2019/11/TableTennis-1024x683.jpg",
            title: "Table Tennis Court",
          },
        ],
      },
      {
        id: 6,
        name: "Yoga",
        images: [
          {
            id: 1,
            image:
              "https://steelmansschool.com/wp-content/uploads/2019/11/Yoga-1024x683.jpg",
            title: "Yoga Session 1",
          },
          {
            id: 2,
            image:
              "https://steelmansschool.com/wp-content/uploads/2024/07/sp-1.jpeg",
            title: "Yoga Session 2",
          },
          {
            id: 3,
            image:
              "https://steelmansschool.com/wp-content/uploads/2024/07/sp-3.jpeg",
            title: "Yoga Session 3",
          },
          {
            id: 4,
            image:
              "https://steelmansschool.com/wp-content/uploads/2024/07/sp-4.jpeg",
            title: "Yoga Session 4",
          },
          {
            id: 5,
            image:
              "https://steelmansschool.com/wp-content/uploads/2024/07/sp-5.jpeg",
            title: "Yoga Session 5",
          },
          {
            id: 6,
            image:
              "https://steelmansschool.com/wp-content/uploads/2024/07/sp-2.jpeg",
            title: "Yoga Session 6",
          },
        ],
      },
      {
        id: 7,
        name: "Swimming",
        images: [
          {
            id: 1,
            image:
              "https://steelmansschool.com/wp-content/uploads/2024/07/sw-2-scaled.jpeg",
            title: "Swimming Pool 1",
          },
          {
            id: 2,
            image:
              "https://steelmansschool.com/wp-content/uploads/2024/07/sw-1-scaled.jpeg",
            title: "Swimming Pool 2",
          },
          {
            id: 3,
            image:
              "https://steelmansschool.com/wp-content/uploads/2024/07/sw-3-scaled.jpeg",
            title: "Swimming Pool 3",
          },
        ],
      },
    ],
    elementaryWing: [
      {
        id: 0.2,
        heading: "Graduation Day (2025-26)",
        images: [
         "/graduation-images/IMG-20250417-WA0052.jpg",
"/graduation-images/IMG-20250417-WA0153.jpg",
"/graduation-images/IMG-20250417-WA0154.jpg",
"/graduation-images/IMG-20250417-WA0162.jpg",
"/graduation-images/IMG-20250417-WA0165.jpg",
"/graduation-images/IMG-20250417-WA0173.jpg",
"/graduation-images/IMG-20250417-WA0303.jpg",
"/graduation-images/IMG-20250417-WA0305.jpg",
"/graduation-images/IMG-20250417-WA0309.jpg",
"/graduation-images/IMG-20250417-WA0310.jpg",
"/graduation-images/IMG-20250417-WA0311.jpg",
"/graduation-images/IMG-20250417-WA0312.jpg",
"/graduation-images/IMG-20250417-WA0315.jpg",
"/graduation-images/IMG-20250417-WA0316.jpg",
"/graduation-images/IMG-20250417-WA0317.jpg",
"/graduation-images/IMG-20250417-WA0318.jpg",
"/graduation-images/IMG-20250417-WA0319.jpg",
"/graduation-images/IMG-20250417-WA0320.jpg",
"/graduation-images/IMG-20250417-WA0321.jpg",
"/graduation-images/IMG-20250417-WA0322.jpg",
"/graduation-images/IMG-20250417-WA0324.jpg",
"/graduation-images/IMG-20250417-WA0325.jpg",
"/graduation-images/IMG-20250417-WA0327.jpg",
"/graduation-images/IMG-20250417-WA0328.jpg",
"/graduation-images/IMG-20250417-WA0329.jpg",
"/graduation-images/IMG-20250417-WA0330.jpg",
"/graduation-images/IMG-20250417-WA0331.jpg",
"/graduation-images/IMG-20250417-WA0332.jpg",
"/graduation-images/IMG-20250417-WA0333.jpg",
"/graduation-images/IMG-20250417-WA0334.jpg",
"/graduation-images/IMG-20250417-WA0336.jpg",
"/graduation-images/IMG-20250417-WA0337.jpg",
"/graduation-images/IMG-20250417-WA0338.jpg",
"/graduation-images/IMG-20250417-WA0340.jpg",
"/graduation-images/IMG-20250417-WA0341.jpg",
"/graduation-images/IMG-20250417-WA0342.jpg",
"/graduation-images/IMG-20250417-WA0343.jpg",
"/graduation-images/IMG-20250417-WA0344.jpg",
"/graduation-images/IMG-20250417-WA0345.jpg",
"/graduation-images/IMG-20250417-WA0347.jpg",
"/graduation-images/IMG-20250417-WA0348.jpg",
"/graduation-images/IMG-20250417-WA0349.jpg",
"/graduation-images/IMG-20250417-WA0351.jpg"
        
        ],
      },
      {
        id: 0,
        heading: "IST DAY IN SCHOOL (2025-26)",
        images: [
          "/Images/IMG-20250411-WA0035.jpg",
          "/Images/IMG-20250411-WA0037.jpg",
          "/Images/IMG-20250411-WA0038.jpg",
          "/Images/IMG-20250411-WA0039.jpg",
          "/Images/IMG-20250411-WA0040.jpg",
          "/Images/IMG-20250411-WA0041.jpg",
          "/Images/IMG-20250411-WA0042.jpg",
          "/Images/IMG-20250411-WA0044.jpg",
          "/Images/IMG-20250411-WA0045.jpg",
          "/Images/IMG-20250411-WA0046.jpg",
          "/Images/IMG-20250411-WA0047.jpg",
          "/Images/IMG-20250411-WA0048.jpg",
          "/Images/IMG-20250411-WA0049.jpg",
          "/Images/IMG-20250411-WA0051.jpg",
          "/Images/IMG-20250411-WA0052.jpg",
          "/Images/IMG-20250411-WA0053.jpg",
          "/Images/IMG-20250411-WA0054.jpg",
          "/Images/IMG-20250411-WA0055.jpg",
          "/Images/IMG-20250411-WA0056.jpg",
          "/Images/IMG-20250411-WA0058.jpg",
          "/Images/IMG-20250411-WA0059.jpg",
          "/Images/IMG-20250411-WA0060.jpg",
          "/Images/IMG-20250411-WA0062.jpg",
          "/Images/IMG-20250411-WA0063.jpg",
          "/Images/IMG-20250411-WA0064.jpg",
        ],
      },
      {
        id: 0.1,
        heading: "HEALTHY TIFFIN ACTIVITY (2025-26)",
        images: [
          "/Tiffin activity/IMG-20250411-WA0007.jpg",
          "/Tiffin activity/IMG-20250411-WA0008.jpg",
          "/Tiffin activity/IMG-20250411-WA0009.jpg",
          "/Tiffin activity/IMG-20250411-WA0010.jpg",
          "/Tiffin activity/IMG-20250411-WA0011.jpg",
          "/Tiffin activity/IMG-20250411-WA0012.jpg",
          "/Tiffin activity/IMG-20250411-WA0013.jpg",
          "/Tiffin activity/IMG-20250411-WA0017.jpg",
          "/Tiffin activity/IMG-20250411-WA0018.jpg",
          "/Tiffin activity/IMG-20250411-WA0020.jpg",
          "/Tiffin activity/IMG-20250411-WA0024.jpg",
          "/Tiffin activity/IMG-20250411-WA0027.jpg",
          "/Tiffin activity/IMG-20250411-WA0029.jpg",
          "/Tiffin activity/IMG-20250411-WA0032.jpg",
        ],
      },
      {
        id: 1,
        heading: "Book Mark Activity ",
        images: [
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0034-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0031-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0035-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0037-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0046-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0051-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0052-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0053-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0055-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0050-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0056-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0057-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0059-150x150.jpg",
          "http://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0061-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0062-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0063-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0064-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0065-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0067-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0068-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0070-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0047-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0048-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0050-1-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0054-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0056-1-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0058-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0062-1-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0061-1-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0059-1-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0069-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0071-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0072-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0074-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0075-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0076-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0078-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0079-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0081-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0082-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0158-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0168-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0169-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2024/07/1-scaled.jpeg",
          "https://steelmansschool.com/wp-content/uploads/2024/07/2.jpeg",
          "https://steelmansschool.com/wp-content/uploads/2024/07/3.jpeg",
          "https://steelmansschool.com/wp-content/uploads/2024/07/5.jpeg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210501-WA0005-150x150.jpg",
        ],
      },
      {
        id: 2,
        heading: "World Health Day",
        images: [
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210407-WA0067-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210407-WA0068-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210407-WA0076-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210407-WA0077-150x150.jpg",
        ],
      },
      {
        id: 3,
        heading: "Earth Day",
        images: [
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210421-WA0052-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210421-WA0051-150x150.jpg",
          "http://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210421-WA0050-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210421-WA0049-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210421-WA0048-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210421-WA0047-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210421-WA0046-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210421-WA0044-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210421-WA0043-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210421-WA0042-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210421-WA0038-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210421-WA0037-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210421-WA0035-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210421-WA0034-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210421-WA0033-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210421-WA0031-150x150.jpg",
        ],
      },
      {
        id: 4,
        heading: "Basant Panchmi Pictures ",
        images: [
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG_3687-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG_3690-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG_3674-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG_3677-150x150.jpg",
        ],
      },
      {
        id: 5,
        heading: "Adhi Chutti Saari (Program at MH1)",
        images: [
          "https://steelmansschool.com/wp-content/uploads/2019/11/WhatsApp-Image-2021-01-30-at-4.01.33-PM-150x150.jpeg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/WhatsApp-Image-2021-01-31-at-1.33.25-PM-2-150x150.jpeg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/WhatsApp-Image-2021-01-31-at-1.33.25-PM-150x150.jpeg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/WhatsApp-Image-2021-01-31-at-1.33.26-PM-2-150x150.jpeg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/WhatsApp-Image-2021-01-31-at-1.33.26-PM-150x150.jpeg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/WhatsApp-Image-2021-01-31-at-1.33.28-PM-2-150x150.jpeg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/WhatsApp-Image-2021-01-31-at-1.33.28-PM-150x150.jpeg",
        ],
      },
      {
        id: 6,
        heading: "Republic Day ",
        images: [
          "https://steelmansschool.com/wp-content/uploads/2019/11/Class5_Incharge_ManjuSharma-15-180x180.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/ClassPrep_Incharge_HarmanjeetKaur-3-180x180.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/Class5_Incharge_ManjuSharma-10-180x180.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/Class_IST_nightingale_INcharge_RamandeepKaur-3-180x180.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210407-WA0077-150x150.jpg",
        ],
      },
      {
        id: 7,
        heading: "Mother Day ",
        images: [
          "https://steelmansschool.com/wp-content/uploads/2024/07/m-1.jpeg",
          "https://steelmansschool.com/wp-content/uploads/2024/07/m-2.jpeg",
          "https://steelmansschool.com/wp-content/uploads/2024/07/m-3.jpeg",
          "https://steelmansschool.com/wp-content/uploads/2024/07/m-4.jpeg",
        ],
      },
    ],
    primaryWing: [
      {
        id: 1,
        heading: "World Health Day (2025-26)",
        images: [
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210407-WA0067-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210407-WA0065-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210407-WA0063-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210407-WA0076-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210407-WA0072-150x150.jpg",
          "http://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210407-WA0061-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210407-WA0068-150x150.jpg",
        ],
      },
      {
        id: 2,
        heading: "Basant Panchmi Pictures (2025-26)",
        images: [
          "https://steelmansschool.com/wp-content/uploads/2020/12/IMG_3685-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2020/12/WhatsApp-Image-2021-02-17-at-10.07.03-AM-150x150.jpeg",
          "https://steelmansschool.com/wp-content/uploads/2020/12/WhatsApp-Image-2021-02-17-at-10.07.06-AM-150x150.jpeg",
          "https://steelmansschool.com/wp-content/uploads/2020/12/IMG_3680-150x150.jpg",
        ],
      },
      {
        id: 3,
        heading: "Christmas Activity (2020-21)",
        quote: "Christmas Activity performed by our students.",
        images: [
          "https://steelmansschool.com/wp-content/uploads/2020/12/christmas5.jpg",
          "https://steelmansschool.com/wp-content/uploads/2020/12/christmas4.jpg",
          "https://steelmansschool.com/wp-content/uploads/2020/12/christmas3.jpg",
          "https://steelmansschool.com/wp-content/uploads/2020/12/christmas2.jpg",
          "https://steelmansschool.com/wp-content/uploads/2020/12/christmas6.jpg",
          "https://steelmansschool.com/wp-content/uploads/2020/12/christmas7.jpg",
          "https://steelmansschool.com/wp-content/uploads/2020/12/christmas8.jpg",
          "https://steelmansschool.com/wp-content/uploads/2020/12/christmas1.jpg",
        ],
      },
      {
        id: 4,
        heading: "Diwali Activities (2020-21)",
        quote: "Diwali Activities performed by our students.",
        images: [
          "https://steelmansschool.com/wp-content/uploads/2016/03/IMG_20201113_215612.jpg",
          "https://steelmansschool.com/wp-content/uploads/2016/03/IMG_20201113_215722.jpg",
          "https://steelmansschool.com/wp-content/uploads/2016/03/IMG-20201116-WA0016.jpg",
          "https://steelmansschool.com/wp-content/uploads/2016/03/SukhmanpreetKaur_8_DIVYA_STAND_MAKING_KulwinderMam.jpg",
          "https://steelmansschool.com/wp-content/uploads/2016/03/HarmanpreetKaur_8_DIVYA_STAND_MAKING_KulwinderMam.jpg",
          "https://steelmansschool.com/wp-content/uploads/2016/03/20201117_181841.jpg",
        ],
      },
      {
        id: 5,
        heading: "Mother's Day Activities (2020-21)",
        quote: "Mother's Day Activities performed by our students.",
        images: [
          "https://steelmansschool.com/wp-content/uploads/2016/03/m1.jpg",
          "https://steelmansschool.com/wp-content/uploads/2016/03/m2.jpg",
          "https://steelmansschool.com/wp-content/uploads/2016/03/m6.jpg",
          "https://steelmansschool.com/wp-content/uploads/2016/03/m5.jpg",
          "https://steelmansschool.com/wp-content/uploads/2016/03/m4.jpg",
          "https://steelmansschool.com/wp-content/uploads/2016/03/m3.jpg",
        ],
      },
    ],
  };
  return <Information.Provider value={data}>{children}</Information.Provider>;
}

export default Information;
