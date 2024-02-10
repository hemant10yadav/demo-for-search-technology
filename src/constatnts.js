import {
  faArrowRight,
  faClipboardList,
  faGraduationCap,
  faSignsPost,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

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
    flag: "none",
  },
  {
    name: "UK",
    flag: "none",
  },
  {
    name: "US",
    flag: "none",
  },
  {
    name: "Mexico",
    flag: "none",
  },
  {
    name: "India",
    flag: "none",
  },
  {
    name: "Brazil",
    flag: "none",
  },
  {
    name: "Spain",
    flag: "none",
  },
];

export const COURSES = [
  {
    name: "MBA",
  },
  {
    name: "BTECH",
  },
  {
    name: "MTECH",
  },
  {
    name: "BSC",
  },
  {
    name: "PHD",
  },
  {
    name: "MSC",
  },
  {
    name: "BA",
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
    title: "Yorr English exam status?",
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
