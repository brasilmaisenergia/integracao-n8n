"use client";

import { useState } from "react";
import Image from "next/image";

interface VoltMascotProps {
  pose?: "default" | "explicador" | "celebrando" | "pensativo" | "empresario" | "professor" | "trabalhando" | "surpreso";
  message?: string;
  position?: "left" | "right";
  size?: "sm" | "md" | "lg";
  autoShow?: boolean;
}

export default function VoltMascot({
  pose = "default",
  message,
  position = "right",
  size = "md",
  autoShow = true,
}: VoltMascotProps) {
  const [showBalloon, setShowBalloon] = useState(autoShow);

  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  };

  const positionClasses = {
    left: "left-4",
    right: "right-4",
  };

  return (
    <div className={`fixed bottom-4 ${positionClasses[position]} z-40 animate-float`}>
      <div className="relative">
        {/* Balão de fala */}
        {message && showBalloon && (
          <div
            className={`absolute bottom-full mb-4 ${
              position === "right" ? "right-0" : "left-0"
            } bg-white rounded-lg shadow-xl p-4 max-w-xs animate-balloon-in`}
          >
            <p className="text-sm text-gray-800">{message}</p>
            <button
              onClick={() => setShowBalloon(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
            {/* Seta do balão */}
            <div
              className={`absolute top-full ${
                position === "right" ? "right-4" : "left-4"
              } w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white`}
            />
          </div>
        )}

        {/* Mascote */}
        <div
          className={`${sizeClasses[size]} cursor-pointer hover:scale-110 transition-transform`}
          onClick={() => message && setShowBalloon(!showBalloon)}
        >
          <Image
            src={`/images/volt-${pose}.png`}
            alt="Volt - Mascote Brasil Mais Energia"
            width={128}
            height={128}
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes balloon-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-balloon-in {
          animation: balloon-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

