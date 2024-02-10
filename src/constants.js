import {
  faArrowRight,
  faClipboardList,
  faGraduationCap,
  faSignsPost,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

import phdIcon from "./assets/img/icons8-phd-64.png";
import btech from "./assets/img/btech.png";
import mba from "./assets/img/mba.png";
import bca from "./assets/img/bca.png";
import Mtech from "./assets/img/mtech.png";
import msc from "./assets/img/msc.png";
import ba from "./assets/img/ba.png";

export const WhatToGetWidgetData = [
  {
    title: "Study Abroad Roadmap",
    description: "Understand the process of applying to universties in UK",
    icon: faSignsPost,
  },
  {
    title: "Profile Evaluation",
    description: "Check your eligiblity for studying in UK",
    icon: faGraduationCap,
  },
  {
    title: "University Shortlist",
    description:
      "Get a list of universities you should target for your desired course based on your academic profile",
    icon: faClipboardList,
  },
  {
    title: "Course Recommendations",
    description:
      "Unsure of what to study? Our expert will help you decide the best course to pursue in UK",
    icon: faThumbsUp,
  },
];

export const COUNTRIES = [
  {
    name: "Canada",
    flag: "ca",
  },
  {
    name: "UK",
    flag: "gb",
  },
  {
    name: "US",
    flag: "us",
  },
  {
    name: "Mexico",
    flag: "mx",
  },
  {
    name: "India",
    flag: "in",
  },
  {
    name: "Brazil",
    flag: "br",
  },
  {
    name: "Spain",
    flag: "es",
  },
];

export const COURSES = [
  {
    name: "MBA",
    image: mba,
  },
  {
    name: "BTECH",
    image: btech,
  },
  {
    name: "MTECH",
    image: Mtech,
  },
  {
    name: "BSC",
    image: bca,
  },
  {
    name: "PHD",
    image: phdIcon,
  },
  {
    name: "MSC",
    image: msc,
  },
  {
    name: "BA",
    image: ba,
  },
];

export const FORM_OPTIONS = [
  {},
  {},
  {
    title: "Have you completed your class 12th?",
    options: [{ title: "Yes" }, { title: "No" }],
  },
  {
    title: "What's your year of graduation?",
    options: [
      { title: "2023 or later" },
      { title: "2022" },
      { title: "2021" },
      { title: "2020" },
      { title: "2019" },
      { title: "Befor 2019" },
    ],
  },
  {
    title: "Do you have a valid passport?",
    options: [
      { title: "Yes", icon: faThumbsUp },
      { title: "No", icon: faThumbsDown },
      { title: "Applied" },
    ],
  },
  {
    title: "Your English exam status?",
    options: [
      { title: "Not decided", icon: faArrowRight },
      { title: "Already gave the exam", icon: faArrowRight },
      { title: "Booked my exam", icon: faArrowRight },
      { title: "Planning to give in 2 months", icon: faArrowRight },
    ],
  },
  {
    title: "Do you already have an university admit?",
    options: [
      { title: "Yes", icon: faThumbsUp },
      { title: "No", icon: faThumbsDown },
    ],
  },
];
