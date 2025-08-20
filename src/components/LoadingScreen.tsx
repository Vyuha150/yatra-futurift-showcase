import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [elevatorPosition, setElevatorPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    // Elevator animation based on progress
    setElevatorPosition((progress / 100) * 200);
  }, [progress]);

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      {/* Loading Content */}
      <div className="relative flex flex-col items-center space-y-8">
        {/* Yatra Logo */}
        <div className="flex flex-col items-center space-x-3">
          <div className="relative h-20 flex flex-col items-center justify-center overflow-hidden">
            <img
              src="/Yata white.png"
              alt="Yatra Elevators Logo"
              className="w-24 h-24 object-contain filter brightness-110"
            />
            <p className="text-md text-muted-foreground">
              Elevators & Escalators
            </p>
          </div>
        </div>

        {/* Elevator Shaft Animation */}
        <div className="relative w-20 h-64 bg-surface-elevated border-2 border-neon-cyan/30 rounded-lg overflow-hidden">
          {/* Elevator Shaft */}
          <div className="absolute inset-x-2 top-2 bottom-2 bg-background/50 rounded">
            {/* Floor Indicators */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`absolute right-1 w-1 h-1 rounded-full transition-colors duration-300 ${
                  elevatorPosition > i * 40 ? "bg-neon-cyan" : "bg-muted"
                }`}
                style={{ top: `${i * 40 + 10}px` }}
              />
            ))}

            {/* Elevator Cabin */}
            <div
              className="absolute left-1 right-3 h-8 bg-gradient-accent rounded shadow-lg transition-all duration-200 ease-out"
              style={{
                top: `${Math.max(4, 200 - elevatorPosition)}px`,
                boxShadow: "0 4px 8px rgba(0, 230, 255, 0.3)",
              }}
            >
              {/* Cabin Details */}
              <div className="w-full h-full bg-gradient-to-b from-white/20 to-transparent rounded flex items-center justify-center">
                <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Cables */}
            <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-neon-cyan/50 to-neon-cyan/20"></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 bg-surface-elevated rounded-full overflow-hidden">
          <div
            className="h-2 bg-gradient-accent transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-2">
          <p className="text-lg font-medium text-foreground">
            Initializing Vertical Mobility
          </p>
          <p className="text-sm text-muted-foreground">
            {progress < 30
              ? "Calibrating sensors..."
              : progress < 60
              ? "Testing safety systems..."
              : progress < 90
              ? "Connecting IoT modules..."
              : "Ready for takeoff!"}
          </p>
          <p className="text-xl font-bold text-neon-cyan">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
