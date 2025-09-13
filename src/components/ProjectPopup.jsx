import React, { useState, useEffect } from "react";
import { X, ExternalLink, Github, Globe, Smartphone, Database, Cloud, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectPopup = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when popup opens or project changes
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen, project]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isOpen) return;
      
      if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => 
          prev === 0 ? project.images.length - 1 : prev - 1
        );
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => 
          prev === project.images.length - 1 ? 0 : prev + 1
        );
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, project, onClose]);

  if (!isOpen || !project) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const openWebsite = () => {
    window.open(project.url, '_blank');
  };

  const openGithub = () => {
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank');
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const getTechIcon = (tech) => {
    const iconMap = {
      'React': '⚛️',
      'TypeScript': '📘',
      'JavaScript': '🟨',
      'TailwindCSS': '🎨',
      'Fastify': '⚡',
      'PostgreSQL': '🐘',
      'AWS': '☁️',
      'Vercel': '▲',
      'GSAP': '🎭',
      'CSS': '🎨',
      'GitHub Pages': '🐙'
    };
    return iconMap[tech] || '🔧';
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-background rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-muted transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Project Images Gallery */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl group">
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-300"
          />
          
          {/* Navigation Arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all duration-200 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all duration-200 opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {/* Image Counter */}
          {project.images.length > 1 && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 text-white text-sm rounded-full backdrop-blur-sm">
              {currentImageIndex + 1} / {project.images.length}
            </div>
          )}

          {/* Image Dots Navigation */}
          {project.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
            <p className="text-muted-foreground text-lg">{project.shortDescription}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Button 
              onClick={openWebsite} 
              className="gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <ExternalLink className="h-4 w-4" />
              Visit Website
            </Button>
            {project.githubUrl && (
              <Button 
                variant="outline" 
                onClick={openGithub} 
                className="gap-2 border-2 border-purple-600 text-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-105"
              >
                <Github className="h-4 w-4" />
                View Code
              </Button>
            )}
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold mb-4">About This Project</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.longDescription}
              </p>

              {/* Key Features */}
              {project.features && (
                <div>
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Technical Details */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Details</h3>
              
              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-muted rounded-full text-sm"
                    >
                      <span>{getTechIcon(tech)}</span>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Type:</span>
                  <span>{project.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Responsive:</span>
                  <span>{project.responsive ? 'Yes' : 'No'}</span>
                </div>
                {project.database && (
                  <div className="flex items-center gap-2">
                    <Database className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Database:</span>
                    <span>{project.database}</span>
                  </div>
                )}
                {project.hosting && (
                  <div className="flex items-center gap-2">
                    <Cloud className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Hosting:</span>
                    <span>{project.hosting}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;
