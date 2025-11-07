// src/components/ui/tubelight-navbar.jsx
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import logoIcon from '@/assets/logo-1.png';

export function TubelightNavbar({ items, className }) {
  return (
    <div className={cn("fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-6", className)}>
      <div className="flex items-center gap-2 bg-white/5 dark:bg-black/5 border border-border backdrop-blur-lg py-2 px-3 rounded-full shadow-lg">

        <NavLink to="/home" className="mr-2">
          <img src={logoIcon} alt="Logo" className="h-10 w-10" />
        </NavLink>

        {items.map((item) => (
          <NavLink
            key={item.name}
            to={item.url}
            className={({ isActive }) =>
              cn(
                "relative cursor-pointer text-sm font-semibold px-3 py-2 sm:px-4 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "text-primary"
              )
            }
          >
            {({ isActive }) => (
              <>
                <span>{item.name}</span>

                {isActive && (
                  <motion.div
                    layoutId="tubelight-lamp"
                    className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-1 md:-top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    </div>
                  </motion.div>
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
}