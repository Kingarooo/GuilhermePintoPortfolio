export const projectsData = [
  {
    id: 1,
    title: "Pawseum - Dog Kennel Website",
    shortDescription: "Full-stack application for dog shelters with modern features",
    longDescription: "Pawseum is a comprehensive full-stack web application designed specifically for dog kennels and shelters. Built with modern technologies, it features a responsive design that works seamlessly across all devices. The application provides an intuitive interface for both kennel administrators and potential adopters, with robust backend infrastructure powered by cloud services.",
    images: [
      "/projects/pawseum/main.png",
      "/projects/pawseum/gallery-1.jpeg",
      "/projects/pawseum/gallery-2.jpg"
    ],
    url: "https://pawseum.com",
    githubUrl: null, // Private repository - not available publicly
    type: "Full-Stack Web Application",
    technologies: ["React", "TypeScript", "Fastify", "PostgreSQL", "TailwindCSS", "AWS"],
    features: [
      "Mobile-responsive design optimized for all devices",
      "Real-time database integration with PostgreSQL",
      "Cloud infrastructure with AWS (S3, EC2, RDS)",
      "Fast and secure API with Fastify backend",
      "Modern UI/UX with TypeScript and TailwindCSS",
      "SEO optimized for better search visibility"
    ],
    responsive: true,
    database: "PostgreSQL",
    hosting: "AWS (EC2, S3, RDS)"
  },
  {
    id: 2,
    title: "NFKTraining Center - Gym Website",
    shortDescription: "Frontend web application for a kickboxing gym",
    longDescription: "NFKTraining Center is a modern, responsive website built for a kickboxing gym. The project showcases excellent frontend development skills with a focus on user experience and mobile responsiveness. The site features smooth animations, intuitive navigation, and is optimized for search engines to help the gym attract new members.",
    images: [
      "/projects/nfk-training/main.png",
      "/projects/nfk-training/gallery-1.jpeg",
      "/projects/nfk-training/gallery-2.jpg"
    ],
    url: "https://kingarooo.github.io",
    githubUrl: "https://github.com/kingarooo/nfk-training", // Add your actual GitHub URL
    type: "Frontend Web Application",
    technologies: ["React", "TailwindCSS", "JavaScript", "GitHub Pages"],
    features: [
      "Fully responsive design for mobile and desktop",
      "SEO optimization for better search rankings",
      "Smooth scrolling and modern animations",
      "Contact forms and location integration",
      "Fast loading times and performance optimization",
      "Cross-browser compatibility"
    ],
    responsive: true,
    database: null,
    hosting: "GitHub Pages"
  },
  {
    id: 3,
    title: "Graphic Designer Portfolio",
    shortDescription: "Portfolio website with CSS and GSAP animations",
    longDescription: "A visually stunning portfolio website that demonstrates advanced CSS techniques and GSAP animations. This project showcases the power of interactive web design, featuring smooth transitions, engaging hover effects, and creative layouts. Built with modern frontend technologies and deployed on Vercel for optimal performance.",
    images: [
      "/projects/graphic-designer-portfolio/main.png",
      "/projects/graphic-designer-portfolio/gallery-1.jpeg",
      "/projects/graphic-designer-portfolio/gallery-2.jpg"
    ],
    url: "https://graphic-designer-portfolio-eight.vercel.app/",
    githubUrl: "https://github.com/kingarooo/graphic-designer-portfolio", // Add your actual GitHub URL
    type: "Portfolio Website",
    technologies: ["React", "CSS", "GSAP", "JavaScript", "Vercel"],
    features: [
      "Advanced CSS animations and transitions",
      "GSAP-powered interactive elements",
      "Responsive grid layouts",
      "Smooth scrolling and parallax effects",
      "Optimized image loading and performance",
      "Modern design with engaging user experience"
    ],
    responsive: true,
    database: null,
    hosting: "Vercel"
  }
];

export default projectsData;
