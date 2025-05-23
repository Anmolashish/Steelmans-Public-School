import Header from "@/app/Componenets/Header";
import MorePhotos from "@/app/OnePageComponent/MorePhotos";
import React from "react";

export default function page() {
    const data = [
        {
           src: "/INVESTITURE CEREMONY/1,.jpg",
          alt: " Investiture Ceremony on 3rd May",
        },
        {
           src: "/INVESTITURE CEREMONY/1.jpeg",
          alt: " Investiture Ceremony on 3rd May",
        },
         {
           src: "/INVESTITURE CEREMONY/2.jpeg",
          alt: " Investiture Ceremony on 3rd May",
        },
         {
           src: "/INVESTITURE CEREMONY/3.jpeg",
          alt: " Investiture Ceremony on 3rd May",
        },
         {
           src: "/INVESTITURE CEREMONY/4..jpg",
          alt: " Investiture Ceremony on 3rd May",
        },
         {
           src: "/INVESTITURE CEREMONY/5,.jpg",
          alt: " Investiture Ceremony on 3rd May",
        },
         
         {
           src: "/INVESTITURE CEREMONY/6..jpeg",
          alt: " Investiture Ceremony on 3rd May",
        }, {
           src: "/INVESTITURE CEREMONY/7..jpeg",
          alt: " Investiture Ceremony on 3rd May",
        },
         {
           src: "/INVESTITURE CEREMONY/8.jpeg",
          alt: " Investiture Ceremony on 3rd May",
        },
          {
           src: "/INVESTITURE CEREMONY/9.jpeg",
          alt: " Investiture Ceremony on 3rd May",
        },  {
           src: "/INVESTITURE CEREMONY/10.jpeg",
          alt: " Investiture Ceremony on 3rd May",
        },  {
           src: "/INVESTITURE CEREMONY/11.jpeg",
          alt: " Investiture Ceremony on 3rd May",
        },  {
           src: "/INVESTITURE CEREMONY/12.jpg",
          alt: " Investiture Ceremony on 3rd May",
        },  {
           src: "/INVESTITURE CEREMONY/13.jpeg",
          alt: " Investiture Ceremony on 3rd May",
        },  {
           src: "/INVESTITURE CEREMONY/14.jpeg",
          alt: " Investiture Ceremony on 3rd May",
        },  {
           src: "/INVESTITURE CEREMONY/15.jpeg",
          alt: " Investiture Ceremony on 3rd May",
        },  {
           src: "/INVESTITURE CEREMONY/16.jpeg",
          alt: " Investiture Ceremony on 3rd May",
        },  {
           src: "/INVESTITURE CEREMONY/17.jpeg",
          alt: " Investiture Ceremony on 3rd May",
        },  {
           src: "/INVESTITURE CEREMONY/18.jpg",
          alt: " Investiture Ceremony on 3rd May",
        },  {
           src: "/INVESTITURE CEREMONY/19.jpg",
          alt: " Investiture Ceremony on 3rd May",
        },  {
           src: "/INVESTITURE CEREMONY/20.jpg",
          alt: " Investiture Ceremony on 3rd May",
        },  {
           src: "/INVESTITURE CEREMONY/21.jpg",
          alt: " Investiture Ceremony on 3rd May",
        },  {
           src: "/INVESTITURE CEREMONY/22.jpg",
          alt: " Investiture Ceremony on 3rd May",
        },  {
           src: "/INVESTITURE CEREMONY/23.jpg",
          alt: " Investiture Ceremony on 3rd May",
        },     {
           src: "/INVESTITURE CEREMONY/25.jpg",
          alt: " Investiture Ceremony on 3rd May",
        }, 
        
      
     
      ];
      
  return (
    <>
      <Header heading={" Investiture Ceremony on 3rd May"} />
      <MorePhotos
        data={data}
        heading=" Investiture Ceremony on 3rd May"
        description=" Investiture Ceremony on 3rd May"
      />
    </>
  );
}
