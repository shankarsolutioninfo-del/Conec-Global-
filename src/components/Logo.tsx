import { motion } from "framer-motion";
import { Icon } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export function Logo({ size = "md", showTagline = false }: LogoProps) {
  const sizes = {
    sm: { text: "text-xl", tagline: "text-[10px]" },
    md: { text: "text-2xl", tagline: "text-xs" },
    lg: { text: "text-4xl", tagline: "text-sm" },
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-start"
    >
      <div className="flex items-center gap-2">
       <div className="relative">
        
  <img
    src="https://raw.githubusercontent.com/shankarsolutioninfo-del/Conec-Global-/refs/heads/main/src/assets/logo.png"
    alt="CONEC Logo"
    className="w-8 h-8 rounded-lg object-cover"
  />
</div>
        
        {/* Wordmark */}
        <span className={`font-display font-bold tracking-tight ${sizes[size].text}`}>
          CONEC
        </span>
      </div>
      
      {showTagline && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className={`text-muted-foreground ${sizes[size].tagline} tracking-wider uppercase mt-1 ml-10`}
        >
          Council of Next Economy Creators
        </motion.span>
      )}
    </motion.div>
  );
}
