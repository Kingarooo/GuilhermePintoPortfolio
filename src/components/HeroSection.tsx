const HeroSection = () => {
  return (
    <section className="min-h-50 flex items-center justify-center px-6 md:px-12 text-center">
      <div className="max-w-7xl mx-auto animate-fade-in">
        <h1 className="text-hero text-foreground leading-tight">
          I don't need to show much,{" "}
          <br />
          <span className="text-primary">my work does the talking.</span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;