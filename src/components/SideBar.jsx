import React from "react";
import { Stack } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SchoolIcon from "@mui/icons-material/School";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import PersonIcon from "@mui/icons-material/Person";



export const categories = [
  { name: "New", icon: <HomeIcon /> },
  { name: "AL Drake", icon: <PersonIcon /> },
  { name: "Lily Ogini", icon: <PersonIcon /> },
  { name: "Music", icon: <MusicNoteIcon /> },
  { name: "Wode Maya", icon: <PersonIcon /> },
  { name: "Education", icon: <SchoolIcon /> },
  { name: "Coding", icon: <CodeIcon /> },
  { name: "Podcast", icon: <GraphicEqIcon /> },
  { name: "Movie", icon: <OndemandVideoIcon /> },
  { name: "ReactJS", icon: <CodeIcon /> },
  { name: "Gaming", icon: <SportsEsportsIcon /> },
  { name: "Live", icon: <LiveTvIcon /> },
  { name: "Sport", icon: <FitnessCenterIcon /> },
  { name: "Fashion", icon: <CheckroomIcon /> },
  { name: "Beauty", icon: <FaceRetouchingNaturalIcon /> },
  { name: "Comedy", icon: <TheaterComedyIcon /> },
  { name: "Gym", icon: <FitnessCenterIcon /> },
];

const selectedCategory = 'New'

const SideBar = () => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}>
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#FC1503",
          color: "#000",
        }}
        key={category.name}>
        <span
          style={{
            color: category.name === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}>
          {category.icon}
        </span>
        <span
          style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default SideBar;