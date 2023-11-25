import anil from "../Assests/anil.png";
import josef from "../Assests/kittler.png";
import umapda from "../Assests/UmapadaPal.png";
import rema from "../Assests/rama.png";
import apo from "../Assests/Antonacopoulos.png";
import chngling from "../Assests/Cheng.png";
import subhasis from "../Assests/Subhasis.png";
import React, { useState } from "react";

export function chairdata() {
  const chair = [
    {
      chair: "Workshop Chairs",
      details: [
        { name: "Edwin Hancock", country: "UK" },
        { name: "P. Shivakumara", country: " Malaysia" },
        { name: "Stephanie Schuckers", country: "USA" },
        { name: "Jean-Marc Ogier", country: "France" },
      ],
    },
    {
      chair: "Tutorial Chairs",
      details: [
        { name: "B. B. Chaudhuri", country: "India" },
        { name: "Michael R. Jenkin", country: "Canada" },
        { name: "Guoying Zhao", country: "Finland" },
      ],
    },
    {
      chair: "Competition Chairs",
      details: [
        { name: "Richard Zanibbi", country: "USA" },
        { name: "Lianwen Jin", country: "China" },
        { name: "Laurence Likforman-Sulem", country: "France" },
      ],
    },
    {
      chair: "Doctoral Consortium Chairs",
      details: [
        { name: "Véronique Eglin", country: "India" },
        { name: "Dan Lopresti", country: "USA" },
        { name: "Guoying Zhao", country: "India" },
      ],
    },
    {
      chair: "Publicity Chairs",
      details: [
        { name: "Dipti Prasad Mukherjee", country: "India" },
        { name: "Bob Fisher", country: "UK" },
        { name: "Xiaojun Wu", country: "China" },
      ],
    },
    {
      chair: "Publications Chairs",
      details: [
        { name: "Wataru Ohyama", country: "Japan" },
        { name: "Ananda S. Chowdhury", country: "India" },
      ],
    },
    {
      chair: "Awards Committee Chair",
      details: [{ name: "Arpan Pal", country: "India" }],
    },

    {
      chair: "International Liaison/Visa Chairs",
      details: [
        { name: "Balasubramanian Raman", country: "India" },
        { name: "Yue Lu", country: "China" },
      ],
    },
    {
      chair: "Finance Chairs",
      details: [
        { name: "Kaushik Roy", country: "India" },
        { name: "Michael Blumenstein", country: "Australia" },
      ],
    },
    {
      chair: "Organizing Chairs",
      details: [
        { name: "Saumik Bhattacharya", country: "India" },
        { name: "Sk Md Obaidullah", country: "India" },
        { name: "Palash Ghosal", country: "India" },
      ],
    },
    {
      chair: "Women in ICPR Chairs",
      details: [
        { name: "Ingela Nystrom", country: "Sweden" },
        { name: "Alexandra B. Albu", country: "Canada" },
        { name: "Jing Dong", country: "China" },
        { name: "Sarbani Palit", country: "India" },
      ],
    },
    {
      chair: "Sponsorship Chairs",
      details: [
        { name: "P.J. Narayanan", country: "India" },
        { name: "Yasushi Yagi", country: "Japan" },
        { name: "Venu Govindaraju", country: "USA" },
        { name: "Alberto Bel Bimbo", country: "Italy" },
      ],
    },
  ];
  return chair;
}
export function trackdata() {
  const data = [
    {
      chair: "Artificial Intelligence, Machine Learning for Pattern Analysis",
      details: [
        { name: "Larry O'Gorman", country: "USA" },
        { name: "Dacheng Tao", country: " Australia" },
        { name: "Petia Radeva", country: "Spain" },
        { name: "Susmita Mitra", country: "India" },
        { name: "Jiliang Tang", country: "USA" },
      ],
    },
    {
      chair: "Computer and Robot Vision",
      details: [
        { name: "C. V. Jawahar", country: "India" },
        { name: "João Paulo Papa", country: " Brazil" },
        { name: "Maja Pantic", country: "UK" },
        { name: "Gang Hua", country: "USA" },
        { name: "Junwei Han", country: "China" },
      ],
    },
    {
      chair: "Image, Speech, Signal and Video processing",
      details: [
        { name: "P. K. Biswas", country: "India" },
        { name: "Shang-Hong Lai", country: " Taiwan" },
        { name: "Hugo Jair Escalante", country: "Mexico" },
        { name: "Sergio Escalera", country: "Spain" },
        { name: "Prem Natarajan", country: "USA" },
      ],
    },
    {
      chair: "Biometrics and Human Computer Interaction",
      details: [
        { name: "Richa Singh", country: "India" },
        { name: "Massimo Tistarelli", country: " Italy" },
        { name: "Vishal Patel", country: "USA" },
        { name: "Wei-Shi Zheng", country: "China" },
        { name: "Jian Wang", country: "USA" },
      ],
    },
    {
      chair: "Document Analysis and Recognition",
      details: [
        { name: "Xiang Bai", country: "China" },
        { name: "David Doermann", country: " USA" },
        { name: "Josep Llados", country: "Spain" },
        { name: "Mita Nasipuri", country: "India" },
      ],
    },
    {
      chair: "Biomedical Imaging and Bioinformatics",
      details: [
        { name: "Jayanta Mukhopadhyay", country: "India" },
        { name: "Xiaoyi Jiang", country: " Germany" },
        { name: "Seong-Whan Lee", country: "Korea" },
      ],
    },
  ];
  return data;
}
export const newData = "halow";
export function generalChair() {
  const data = [
    {
      chair: "General Chair",
      details: [
        {
          name: "Umapada Pal",
          country: "India",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse porta dolor et ligula tincidunt",
          link: "",
          img: umapda,
        },
      ],
    },
    {
      chair: "General Chair",
      details: [
        {
          name: "Anil Jain",
          country: "USA",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse porta dolor et ligula tincidunt",
          link: "",
          img: anil,
        },
      ],
    },
    {
      chair: "General Chair",
      details: [
        {
          name: "Josef Kittler",
          country: "UK",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse porta dolor et ligula tincidunt",
          link: "",
          img: josef,
        },
      ],
    },
  ];
  return data;
}
export function programChair() {
  const data = [
    {
      chair: "Program Chair",
      details: [
        {
          name: "Rama Chellappa",
          country: "USA",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse porta dolor et ligula tincidunt",
          link: "",
          img: rema,
        },
      ],
    },
    {
      chair: "Program Chair",
      details: [
        {
          name: "Apostolos Antonacopoulos",
          country: "UK",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse porta dolor et ligula tincidunt",
          link: "",
          img: apo,
        },
      ],
    },
    {
      chair: "Program Chair",
      details: [
        {
          name: "Cheng-Lin Liu",
          country: "China",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse porta dolor et ligula tincidunt",
          link: "",
          img: chngling,
        },
      ],
    },
    {
      chair: "Program Chair",
      details: [
        {
          name: "Subhasis Chaudhuri",
          country: "India",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse porta dolor et ligula tincidunt",
          link: "",
          img: subhasis,
        },
      ],
    },
  ];
  return data;
}
export function otherChair() {
  const data = [
    {
      chair: "Organizing Committee",
      details: [
        { name: "Himadri Mukherjee", country: "India" },
        { name: "Santanu Phadikar", country: " India" },
        { name: "Nilamadhaba Tripathy", country: "USA" },
      ],
    },
    {
      chair: "Program Committee",
      details: [
        {
          name: "Comming soon...",
          country: "",
        },
      ],
    },
  ];
  return data;
}
export function importantDate() {
  const data = [
    { event: "First call for papers", date: "2022-08-01" },
    { event: "Second call for papers", date: "2023-08-01" },
    { event: "Paper submission open", date: "2024-01-20" },
    { event: "Paper submission deadline", date: "2024-03-20" },
    {
      event: "Reviews sent to authors",
      date: "2024-06-20",
    },
    { event: "Revision/rebuttal submission deadline", date: "2024-07-10" },
    { event: "Final Acceptance notification", date: "2024-08-05" },
    { event: "Camera-ready submission", date: "2024-08-31" },
  ];
  return data;
}

export const tabVariable = "";
export function tabHandle() {
  const data = "ImportantDates";
  console.log("TabData: ", data);
  return data;
}
