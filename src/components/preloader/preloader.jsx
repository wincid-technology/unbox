'use client'

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './preloader.css';

const PreLoader = () => {
  const [progress, setProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateCounter = () => {
      setProgress((prev) => {
        if (prev >= 100) {
          setLoadingComplete(true);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    };

    const timer = setInterval(updateCounter, 100); // Adjust for desired loading speed

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  useEffect(() => {
    if (loadingComplete) {
      gsap.to(".counter", { opacity: 0, duration: 0.25, delay: 0.5 });
      gsap.to(".bar", {
        height: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "power4.inOut",
        delay: 0.5
      });
      setTimeout(() => {
        setIsVisible(false);
      }, 2500); // Adjust timing to match your animations
    }
  }, [loadingComplete]);

  return (
    <>
      {isVisible && (
        <>
          <div className="counter kanit-medium">{progress}%</div>
          <div className="overlay">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="bar"></div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default PreLoader;
