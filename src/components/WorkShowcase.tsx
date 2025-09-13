"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import ProjectPopup from "./ProjectPopup";
import { projectsData } from "@/constants/projectsData";

const WorkShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedProject(null);
  };

  const handleVisitWebsite = (e, url) => {
    e.stopPropagation();
    window.open(url, '_blank');
  };

  return (
    <>
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projectsData.map((project, index) => (
              <div
                key={project.id}
                className="group animate-slide-up hover-lift cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-card shadow-elegant">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-white font-bold text-xl mb-4">{project.title}</h3>
                    <Button
                      size="sm"
                      className="w-max text-white shadow-sm hover:shadow-md bg-background/70 backdrop-blur-sm border border-border/30 hover:bg-background/80"
                      onClick={(e) => handleVisitWebsite(e, project.url)}
                    >
                      Visit Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectPopup
        project={selectedProject}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />
    </>
  );
};

export default WorkShowcase;