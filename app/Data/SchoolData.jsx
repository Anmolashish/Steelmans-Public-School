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
          "There is nothing that gives me more pleasure than seeing the dreams, the goals and the aspirations we’ve had for Steelmans come true. In  2001   years back we saw a dream. A dream to create a school where leaders are raised and turned into reality by actions. We were sure of our destination and knew what was needed to reach there : hard work, commitment and relentless actions",
          "  Today, marching with us is an army of students who live their dreams everyday and act upon them",
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
          "As we stand on the threshold of a new academic session, I extend a hearty and warm welcome to all my students, staff and parents. Each academic year is a new height scaled, another dream realized with new targets set for the future. Each member of this institution is devoted to turning dreams & aspirations into reality through sincerity & perseverance.",
          "We as Steelmanians always try to maintain the highest quality in academic standards and provide the most conducive environment for our student’s holistic growth and development. We also strive to instill the core values of Respect, Integrity, Compassion and Excellence in our students so they can meet the ever-changing global challenges. Our dedicated and highly qualified staff stand as exemplary role models for our students thereby keeping the ethos of our school shining bright.",
          "Nelson Mandela rightly said, “Education is the most powerful weapon you can use to change the world.” If there is one thing that can change the world, it is education and Steelmans Public School  is the pillar of formal education. Along with providing academics, we aspire to instill values, life skills and habits that make our students stand out and make a difference in society. We provide our students with ample opportunities to develop 21st-century skills such as collaboration, teamwork, critical thinking, emotional balance, time management and much more.",
          "“Education is a shared commitment between dedicated teachers, motivated students and enthusiastic parents with high expectations.” We wish to thank all the parents for their faith in Steelmans Public School. Let’s partner together, so that we can see children being successful in whatever path they choose to tread."
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
              "/INFRASTRUCTURE/GYM.jpeg",
            title: "Gym",
          },
          {
            id: 4,
            image:

              "/INFRASTRUCTURE/IMG_7766.jpeg",
          },
          {
            id: 5,
            image: "/INFRASTRUCTURE/IMG_7773.jpeg ",
          },
          {
            id: 6,
            image: "/INFRASTRUCTURE/IMG_7774.jpeg ",

          },

          {
            id: 10,
            image: "/INFRASTRUCTURE/IMG_7791.jpeg ",
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

          },
          {
            id: 2,
            image:
              "https://steelmansschool.com/wp-content/uploads/2016/03/Library-2-768x512.jpg",

          },
          {
            id: 3,
            image:
              "https://steelmansschool.com/wp-content/uploads/2019/11/Library-8-768x512.jpg",

          },
          {
            id: 4,
            image:
              "https://steelmansschool.com/wp-content/uploads/2019/11/library-768x512.jpg",

          }, {
            id: 5,
            image:
              "/LIABRARY/IMG_7315.jpeg",

          }, {
            id: 6,
            image:
              "/LIABRARY/IMG_7316.jpeg",

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

          },
          {
            id: 2,
            image:
              "https://steelmansschool.com/wp-content/uploads/2019/03/Playgrounds-3-768x512.jpg",

          },
          {
            id: 3,
            image:
              "https://steelmansschool.com/wp-content/uploads/2019/03/Playgrounds-1-768x512.jpg",

          },
          {
            id: 4,
            image:
              "https://steelmansschool.com/wp-content/uploads/2019/03/Playgrounds-2-768x512.jpg",

          },
          {
            id: 5,
            image:
              "/new_sports/playground/playground 2.jpg ",

          },
          {
            id: 6,
            image:
              "/new_sports/playground/Playground.jpg",

          },
          {
            id: 7,

            image:
              "/new_sports/playground/PLAYGROUND1.jpg",

          },
          {
            id: 8,
            image:
              "/new_sports/playground/Playground11.jpg",
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
          {
            id:233232,
            image:
              "/LAWN-TENNIS/WhatsApp Image 2025-05-23 at 11.48.28_5a1216bf.jpg",
            title: "Lawn Tennis Court",
          },
            {
            id: 99,
            image:
              "/LAWN-TENNIS/WhatsApp Image 2025-05-23 at 11.48.34_9dd68ee5.jpg",
            title: "Lawn Tennis Court",
          },
            {
            id: 211,
            image:
              "/LAWN-TENNIS/WhatsApp Image 2025-05-23 at 11.53.08_86e43cd7.jpg",
            title: "Lawn Tennis Court",
          },
        ],
      },
      {
        id: 89,
        name: "Swimming pool ",
        images: [
          // {
          //   id: 1,
          //   image:
          //     "/new_sports/swimming pool/WhatsApp Image 2024-07-03 at 12.09.14 PM (3).jpeg ",
          //   title: " Swimming pool ",
          // },
          {
            id: 2,
            image:
              "/new_sports/swimming pool/WhatsApp Image 2024-07-03 at 12.09.14 PM (4).jpeg",
            title: "Swimming pool",
          },
          {
            id: 211,
            image:
              "/new_sports/swimming pool/WhatsApp Image 2025-05-17 at 13.06.43_49a91835.jpg  ",
            title: "Swimming pool",
          },
          {
            id: 222,
            image:
              "/new_sports/swimming pool/WhatsApp Image 2025-05-17 at 13.06.43_84d9d26f.jpg ",
            title: "Swimming pool",
          },
        ],
      },
      {
        id: 111,
        name: "THROW BALL",
        images: [
          {
            id: 1,
            image:
              "/new_sports/THROW-BALL/IMG-20250517-WA0214.jpg ",
            title: "THROW BALL",
          },
          {
            id: 2,
            image:
              "/new_sports/THROW-BALL/IMG-20250517-WA0215.jpg ",

            title: "THROW BALL",
          },
        ],
      },
      {
        id: 101,
        name: "HAND BALL",
        images: [
          {
            id: 1,
            image:
              "/new_sports/HANDBALL/HANDBALL.jpg",
            title: " HAND BALL",
          },
          {
            id: 2,
            image:
              "/new_sports/HANDBALL/WhatsApp Image 2025-05-17 at 13.06.43_ad84d6df.jpg",
            title: "HAND BALL",
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
              "/sports heading/BASKET BALL1.jpg",
            title: "Basket Ball Court",
          },
          {
            id: 8,
            image:
              "/sports heading/BASKET BALL 5.jpg",
            title: "Basket Ball Court",
          },
          {
            id: 3,
            image:
              "/sports heading/BASKET BALL 4.jpg",
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

            image: "/new_sports/VELLEY BALL/1VOLLEY-BALL.jpg",
            title: "Volley Ball Court",
          },
          {
            id: 2,
            image: "/new_sports/VELLEY BALL/IMG-20250517-WA0219.jpg",
            title: "Volley Ball Court",
          },
          {
            id: 123,
            image: "/new_sports/VELLEY BALL/VOLLEY BALL.jpg",
            title: "Volley Ball Court",
          },
          {
            id: 113,
            image:
              "/new_sports/VELLEY BALL/VOLLEY BALL3.jpg",
            title: "Volley Ball Court",
          },
          {
            id: 613,

            image: "/new_sports/VELLEY BALL/VOLLEYBALL-6.jpg",

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
          {
            id: 9,
            image:
              "/new_sports/BADMINTON/BADMINTON 3.jpg",
            title: "Badminton Court",
          },
          {
            id: 10,
            image:
              "/sports heading/BADMINTON.jpg",
            title: "Badminton Court",
          },
          {
            id: 101,
            image:
              "/new_sports/BADMINTON/IMG-20250507-WA0180.jpg",
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
          {
            id: 11,
            image:
              "/sports heading/TANNIS.jpg",
            title: "Table Tennis Court",
          },
          {
            id: 21,
            image:
              "/sports heading/TENNIS.jpg",
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

          },
          {
            id: 2,
            image:
              "https://steelmansschool.com/wp-content/uploads/2024/07/sp-1.jpeg",

          },
          {
            id: 3,
            image:
              "https://steelmansschool.com/wp-content/uploads/2024/07/sp-3.jpeg",

          },
          {
            id: 4,
            image:
              "https://steelmansschool.com/wp-content/uploads/2024/07/sp-4.jpeg",

          },
          {
            id: 5,
            image:
              "https://steelmansschool.com/wp-content/uploads/2024/07/sp-5.jpeg",

          },
          {
            id: 6,
            image:
              "https://steelmansschool.com/wp-content/uploads/2024/07/sp-2.jpeg",

          },
        ],
      },

    ],
    elementaryWing: [
      {
        id: 0.2,
        heading: "Graduation day:-27th March 2025",
        images: [
          "/graduation-images/IMG-20250417-WA0403.jpg",
          "/graduation-images/IMG-20250417-WA0404.jpg",
          "/graduation-images/IMG-20250417-WA0405.jpg",
          "/graduation-images/IMG-20250417-WA0408.jpg",
          "/graduation-images/IMG-20250417-WA0409.jpg",
          "/graduation-images/IMG-20250417-WA0411.jpg",
          "/graduation-images/IMG-20250417-WA0412.jpg",
          "/graduation-images/IMG-20250417-WA0413.jpg",
          "/graduation-images/IMG-20250417-WA0414.jpg",
          "/graduation-images/IMG-20250417-WA0415.jpg",
          "/graduation-images/IMG-20250417-WA0416.jpg",
          "/graduation-images/IMG-20250417-WA0417.jpg",
          "/graduation-images/IMG-20250417-WA0419.jpg",
          "/graduation-images/IMG-20250417-WA0420.jpg",
          "/graduation-images/IMG-20250417-WA0421.jpg",
          "/graduation-images/IMG-20250417-WA0424.jpg",
          "/graduation-images/IMG-20250417-WA0425.jpg",
          "/graduation-images/IMG-20250417-WA0426.jpg",
          "/graduation-images/IMG-20250417-WA0427.jpg",
          "/graduation-images/IMG-20250417-WA0428.jpg",
          "/graduation-images/IMG-20250417-WA0430.jpg",
          "/graduation-images/IMG-20250417-WA0432.jpg",
          "/graduation-images/IMG-20250417-WA0433.jpg",
          "/graduation-images/IMG-20250417-WA0434.jpg",
          "/graduation-images/IMG-20250417-WA0435.jpg",
          "/graduation-images/IMG-20250417-WA0436.jpg",
          "/graduation-images/IMG-20250417-WA0437.jpg",
          "/graduation-images/IMG-20250417-WA0438.jpg",
          "/graduation-images/IMG-20250417-WA0439.jpg",
          "/graduation-images/IMG-20250417-WA0440.jpg",
          "/graduation-images/IMG-20250417-WA0441.jpg",
          "/graduation-images/IMG-20250417-WA0442.jpg",
          "/graduation-images/IMG-20250417-WA0443.jpg",
          "/graduation-images/IMG-20250417-WA0444.jpg",
          "/graduation-images/IMG-20250417-WA0445.jpg",
          "/graduation-images/IMG-20250417-WA0446.jpg",
          "/graduation-images/IMG-20250417-WA0447.jpg"
        ]
        ,
      },
      {
        id: 0,
        heading: "Ist  Day  In School: 1st April 2025",
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
        heading: "Healthy Tiffin Activity: 7th April 2025",
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
        heading: "Tear and Paste Activity ( 19th April 2025)",
        images: [
          "/Tear And Paste Activity FOR ELEMENTARY WING/IMG-20250506-WA0123.jpg",
          " /Tear And Paste Activity FOR ELEMENTARY WING/IMG-20250506-WA0124.jpg",
          "/Tear And Paste Activity FOR ELEMENTARY WING/IMG-20250506-WA0125.jpg",
          "/Tear And Paste Activity FOR ELEMENTARY WING/IMG-20250506-WA0126.jpg",
          "/Tear And Paste Activity FOR ELEMENTARY WING/IMG-20250506-WA0127.jpg",
        ],
      },
      {
        id: 7,
        heading: " Leaf Printing ( 22th April 2025)",
        images: [
          "/LEAF PAINTING FOR ELEMENTARY WING/IMG-20250426-WA0082.jpg",
          "/LEAF PAINTING FOR ELEMENTARY WING/IMG-20250506-WA0028.jpg",
          "/LEAF PAINTING FOR ELEMENTARY WING/IMG-20250506-WA0029.jpg",
          "/LEAF PAINTING FOR ELEMENTARY WING/IMG-20250506-WA0031.jpg",
          "/LEAF PAINTING FOR ELEMENTARY WING/IMG-20250506-WA0033.jpg",
          "/LEAF PAINTING FOR ELEMENTARY WING/IMG-20250506-WA0039.jpg",
        ],
      },
      {
        id: 8,
        heading: " Thumb Painting ( 3rd May 2025)",
        images: [
          "/THUMB PAINTING FOR ELEMENTARY WING/1.jpeg",
          "/THUMB PAINTING FOR ELEMENTARY WING/2.jpeg ",
          "/THUMB PAINTING FOR ELEMENTARY WING/3.jpeg",
          "/THUMB PAINTING FOR ELEMENTARY WING/IMG-20250506-WA0021.jpg",
          "/THUMB PAINTING FOR ELEMENTARY WING/IMG-20250506-WA0023.jpg",
          "/THUMB PAINTING FOR ELEMENTARY WING/IMG-20250506-WA0024.jpg",
          "/THUMB PAINTING FOR ELEMENTARY WING/IMG-20250506-WA0025.jpg",
          "/THUMB PAINTING FOR ELEMENTARY WING/IMG-20250506-WA0026.jpg",
          "/THUMB PAINTING FOR ELEMENTARY WING/IMG-20250506-WA0037.jpg",
          "/THUMB PAINTING FOR ELEMENTARY WING/IMG-20250506-WA0040.jpg",
          "/THUMB PAINTING FOR ELEMENTARY WING/IMG-20250506-WA0045.jpg",
          "/THUMB PAINTING FOR ELEMENTARY WING/IMG-20250506-WA0047.jpg",
          "/THUMB PAINTING FOR ELEMENTARY WING/IMG-20250506-WA0048.jpg",
        ],
      }, {
        id: 18,
        heading: " Mother day Activity(17 May 2025)",
        images: [

          "/mother-day/IMG-20250517-WA0035.jpg",
          "/mother-day/IMG-20250517-WA0036.jpg",
          "/mother-day/IMG-20250517-WA0037.jpg",
          "/mother-day/IMG-20250517-WA0038.jpg",
          "/mother-day/IMG-20250517-WA0039.jpg",
          "/mother-day/IMG-20250517-WA0041.jpg",
          "/mother-day/IMG-20250517-WA0043.jpg",
          "/mother-day/IMG-20250517-WA0045.jpg",
          "/mother-day/IMG-20250517-WA0046.jpg",
          "/mother-day/IMG-20250517-WA0047.jpg",
          "/mother-day/IMG-20250517-WA0049.jpg",
          "/mother-day/WhatsApp Image 2025-05-13 at 15.29.32_5d6b29e3.jpg",

          "/mother-day/WhatsApp Image 2025-05-13 at 15.29.26_3096e50e.jpg",
 

        ],
      },



    ],
    primaryWing: [
      {
        id: 1,
        heading: "Healthy Tiffin Activities  on (7th April 2025)",
        images: [

          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210407-WA0067-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210407-WA0065-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210407-WA0063-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210407-WA0076-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210407-WA0072-150x150.jpg",
          "http://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210407-WA0061-150x150.jpg",
          "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210407-WA0068-150x150.jpg",
          "HEALTHY TIFFIN ACTIVITY FOR Primary Wing/IMG-20250411-WA0019.jpg",
          "HEALTHY TIFFIN ACTIVITY FOR Primary Wing/IMG-20250411-WA0020.jpg",
          "HEALTHY TIFFIN ACTIVITY FOR Primary Wing/IMG-20250411-WA0022.jpg",
          "HEALTHY TIFFIN ACTIVITY FOR Primary Wing/IMG-20250411-WA0024.jpg",
          "HEALTHY TIFFIN ACTIVITY FOR Primary Wing/IMG-20250411-WA0029.jpg",

        ],
      },
      {
        id: 2,
        heading: "Best Folk Dress Competition on 12th April 2025",
        images: [

          "/best folk dress/IMG-20250417-WA0162.jpg",
          "/best folk dress/IMG-20250417-WA0303.jpg",
          "/best folk dress/IMG-20250417-WA0308.jpg",
          "/best folk dress/IMG-20250417-WA0311.jpg ",
          "/best folk dress/IMG-20250417-WA0312.jpg ",
          "/best folk dress/IMG-20250417-WA0318.jpg ",
          "/best folk dress/IMG-20250417-WA0319.jpg ",
          "/best folk dress/IMG-20250417-WA0321.jpg ",
          "/best folk dress/IMG-20250417-WA0322.jpg ",
          "/best folk dress/IMG-20250417-WA0326.jpg ",
          "/best folk dress/IMG-20250417-WA0328.jpg ",


        ],
      },


    ],
  };
  return <Information.Provider value={data}>{children}</Information.Provider>;
}

export default Information;
