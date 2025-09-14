"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import ProjectPopup from "./ProjectPopup";
import { projectsData } from "@/constants/projectsData";

const WorkShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  // Keep state but no debug logging
  useEffect(() => {
    // state change hook retained for potential future uses
  }, [currentImageIndex]);

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

  const handleMouseMove = (e, project) => {
  // mouse move handler
    if (!project.images || project.images.length <= 1) {
  // nothing to do when single image
      return;
    }
    
    // Use the container div (currentTarget) for positioning
    const containerElement = e.currentTarget;
  if (!containerElement) return;
    
    const rect = containerElement.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const progress = Math.max(0, Math.min(1, mouseX / rect.width)); // Ensure progress is between 0 and 1
    const imageIndex = Math.floor(progress * project.images.length);
    const clampedIndex = Math.max(0, Math.min(imageIndex, project.images.length - 1));
    
    // Force update even if the index is the same to ensure reactivity
    setCurrentImageIndex(prev => {
      const oldIndex = prev[project.id] || 0;
      const newState = {
        ...prev,
        [project.id]: clampedIndex
      };
      return newState;
    });
  };

  const handleMouseEnter = (project) => {
    setHoveredProject(project.id);
    if (!currentImageIndex[project.id]) {
      setCurrentImageIndex(prev => ({
        ...prev,
        [project.id]: 0
      }));
    }
  };

  const handleMouseLeave = (project) => {
    setHoveredProject(null);
    setCurrentImageIndex(prev => ({
      ...prev,
      [project.id]: 0
    }));
  };

  const getCurrentImage = (project) => {
    const index = currentImageIndex[project.id] || 0;
  const image = project.images[index] || project.images[0];
    return image;
  };

  // ...existing code...

  return (
    <>
      <section className="py-16 md:py-16 px-6 md:px-12">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 gap-12 md:gap-16">
            {projectsData.map((project, index) => (
              <div
                key={project.id}
                className="group hover-lift cursor-pointer"
                onClick={() => handleProjectClick(project)}
                onMouseEnter={() => handleMouseEnter(project)}
                onMouseLeave={() => handleMouseLeave(project)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-card shadow-elegant">
                  <div 
                    className="aspect-[16/9] overflow-hidden relative cursor-none bg-red-100"
                  >
                    <img
                      src={getCurrentImage(project)}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-150"
                      key={`${project.id}-${currentImageIndex[project.id] || 0}`}
                      onMouseMove={(e) => handleMouseMove(e, project)}
                      onMouseEnter={() => console.log(`🎯 Mouse entering image area of project ${project.id}`)}
                      onMouseLeave={() => console.log(`🚫 Mouse leaving image area of project ${project.id}`)}
                    />
                    
                    {/* Progress bar (kept) */}
                    {project.images.length > 1 && (
                      <div className="absolute bottom-4 left-4 right-4 h-1 bg-white/30 rounded">
                        <div 
                          className="h-full bg-white rounded transition-all duration-100"
                          style={{ 
                            width: `${((currentImageIndex[project.id] || 0) + 1) / project.images.length * 100}%` 
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-white font-bold text-2xl md:text-3xl mb-4">{project.title}</h3>
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