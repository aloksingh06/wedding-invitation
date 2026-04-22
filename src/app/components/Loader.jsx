"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 1.2 }}
      className="fixed inset-0 bg-black z-[9999] pointer-events-none"
      style={{
        pointerEvents: isLoading ? "none" : "none",
      }}
    />
  );
}
