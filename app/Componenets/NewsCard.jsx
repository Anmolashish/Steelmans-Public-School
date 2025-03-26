import React from "react";

export default function NewsCard(props) {
  return (
    <div className="bg-white rounded-3xl p-2 w-[300px] h-[350px] border-1 ">
      <img
        src={props.image}
        alt=""
        className="h-full w-full object-cover rounded-2xl"
      />
    </div>
  );
}
// https://steelmansschool.com/wp-content/uploads/2024/07/FOUNDATION-DAY-CELEBRATION-1-scaled.jpeg
