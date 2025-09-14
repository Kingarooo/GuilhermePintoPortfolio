import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import Author from "./Author";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Theme toggle in top-left */}
      <div className="fixed top-0 left-0 z-50 p-6 md:p-8">
        <ThemeToggle />
      </div>
      <Author />
      {/* About button in top-right */}
      <header className="fixed top-0 right-0 z-50 p-6 md:p-8">
        <Button
          variant="outline"
          onClick={() => navigate("/about")}
          className="bg-background/80 backdrop-blur-md border-border/50 hover:bg-muted/80 font-medium"
        >
          About Me
        </Button>
      </header>
    </>
  );
};

export default Header;