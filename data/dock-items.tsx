import React from "react";
import { FaUser, FaProjectDiagram, FaComments, FaGraduationCap, FaEnvelope } from "react-icons/fa";

export const dockItems = [
  { title: "About", icon: <FaUser className="h-4 w-4" />, href: "#about" },
  { title: "Projects", icon: <FaProjectDiagram className="h-4 w-4" />, href: "#projects" },
  { title: "Education", icon: <FaGraduationCap className="h-4 w-4" />, href: "#education" },
  { title: "Certifications", icon: <FaComments className="h-4 w-4" />, href: "#certifications" },
  { title: "Contact", icon: <FaEnvelope className="h-4 w-4" />, href: "#contact" },
];
