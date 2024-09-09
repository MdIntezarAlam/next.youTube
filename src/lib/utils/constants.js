import { FaReact } from "react-icons/fa";
import { IoMusicalNoteSharp } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";

const categories = [
  { name: "Music", icons: <FaReact /> },
  { name: "New", icons: <FaReact /> },
  { name: "Education", icons: <FaReact /> },
  { name: "Movie", icons: <FaReact /> },
  { name: "Gaming", icons: <FaReact /> },
  { name: "Fashion", icons: <FaReact /> },
  { name: "Live", icons: <FaReact /> },
  { name: "All", icons: <FaReact /> },
  { name: "Comedy", icons: <FaReact /> },
  { name: "Sport", icons: <FaReact /> },
  { name: "Coding", icons: <FaReact /> },
  { name: "NextJS", icons: <SiNextdotjs /> },
  { name: "Bollywood", icons: <FaReact /> },
  { name: "Hollywood", icons: <FaReact /> },
  { name: "Tollywood", icons: <FaReact /> },
  { name: "ReactJS", icons: <FaReact /> },
  { name: "Beauty", icons: <FaReact /> },
  { name: "Gym", icons: <FaReact /> },
  { name: "Javascript", icons: <FaReact /> },
  { name: "Electroni", icons: <FaReact /> },
  { name: "Crypto", icons: <FaReact /> },
  { name: "Mixes", icons: <FaReact /> },
  { name: "Mern", icons: <FaReact /> },
  { name: "BPraak", icons: <FaReact /> },
  { name: "Adhan", icons: <FaReact /> },
  { name: "Tranding", icons: <FaReact /> },
  { name: "Song", icons: <FaReact /> },
  { name: "Podcast", icons: <FaReact /> },
  { name: "Watched", icons: <FaReact /> },
  { name: "Not", icons: <FaReact /> },
  { name: "Recently", icons: <FaReact /> },
  { name: "Case", icons: <FaReact /> },
  { name: "Study", icons: <FaReact /> },
  { name: "Cook", icons: <FaReact /> },
  { name: "Studio", icons: <FaReact /> },
  { name: "Lofi", icons: <FaReact /> },
  { name: "Tour", icons: <FaReact /> },
  { name: "Saintmartin", icons: <FaReact /> },
  { name: "Tech", icons: <FaReact /> },
  { name: "iPhone", icons: <FaReact /> },
  { name: "UI", icons: <FaReact /> },
  { name: "UX", icons: <FaReact /> },
  { name: "Computer", icons: <FaReact /> },
  { name: "Live", icons: <FaReact /> },
  { name: "Comedy", icons: <FaReact /> },
  { name: "Javascript", icons: <FaReact /> },
  { name: "Music", icons: <IoMusicalNoteSharp /> },
];

// Removing duplicates
const uniqueCategories = categories.filter(
  (category, index, self) =>
    index === self.findIndex((c) => c.name === category.name)
);

export { uniqueCategories };
