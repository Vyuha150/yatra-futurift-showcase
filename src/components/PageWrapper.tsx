import { ReactNode } from "react";
import { PageLoadWrapper } from "./AnimatedComponents";
import CustomCursor from "./CustomCursor";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface PageWrapperProps {
  children: ReactNode;
  showNavigation?: boolean;
  showFooter?: boolean;
}

const PageWrapper = ({ 
  children, 
  showNavigation = true, 
  showFooter = true 
}: PageWrapperProps) => {
  return (
    <PageLoadWrapper>
      <CustomCursor />
      {showNavigation && <Navigation />}
      <div className="relative z-10">
        {children}
      </div>
      {showFooter && <Footer />}
    </PageLoadWrapper>
  );
};

export default PageWrapper;