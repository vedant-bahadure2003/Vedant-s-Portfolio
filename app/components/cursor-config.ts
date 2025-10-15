// Cursor configuration and utility functions

export interface CursorConfig {
  size: {
    core: number;
    ring: number;
    pulse: number;
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    trail: string;
  };
  animations: {
    coreGlowDuration: number;
    ringRotateDuration: number;
    pulseDuration: number;
    particleOrbitDuration: number;
  };
  effects: {
    trailLength: number;
    particleCount: number;
    glowIntensity: number;
  };
}

export const defaultCursorConfig: CursorConfig = {
  size: {
    core: 8,
    ring: 24,
    pulse: 32,
  },
  colors: {
    primary: "#4f46e5",
    secondary: "#7c3aed",
    accent: "#ef4444",
    trail: "rgba(79, 70, 229, 1)",
  },
  animations: {
    coreGlowDuration: 2000,
    ringRotateDuration: 3000,
    pulseDuration: 2000,
    particleOrbitDuration: 4000,
  },
  effects: {
    trailLength: 8,
    particleCount: 6,
    glowIntensity: 1,
  },
};

// Alternative cursor themes
export const cursorThemes = {
  default: defaultCursorConfig,

  neon: {
    ...defaultCursorConfig,
    colors: {
      primary: "#00ff88",
      secondary: "#00ffff",
      accent: "#ff0088",
      trail: "rgba(0, 255, 136, 1)",
    },
    effects: {
      ...defaultCursorConfig.effects,
      glowIntensity: 1.2,
    },
  },

  fire: {
    ...defaultCursorConfig,
    colors: {
      primary: "#ff4500",
      secondary: "#ff6600",
      accent: "#ffff00",
      trail: "rgba(255, 69, 0, 1)",
    },
    animations: {
      ...defaultCursorConfig.animations,
      coreGlowDuration: 1500,
      ringRotateDuration: 2000,
    },
    effects: {
      ...defaultCursorConfig.effects,
      glowIntensity: 1.3,
    },
  },

  ice: {
    ...defaultCursorConfig,
    colors: {
      primary: "#00bfff",
      secondary: "#87ceeb",
      accent: "#ffffff",
      trail: "rgba(0, 191, 255, 1)",
    },
    animations: {
      ...defaultCursorConfig.animations,
      coreGlowDuration: 3000,
      ringRotateDuration: 4000,
    },
    effects: {
      ...defaultCursorConfig.effects,
      glowIntensity: 1.1,
    },
  },

  matrix: {
    ...defaultCursorConfig,
    colors: {
      primary: "#00ff00",
      secondary: "#00cc00",
      accent: "#ffffff",
      trail: "rgba(0, 255, 0, 1)",
    },
    effects: {
      ...defaultCursorConfig.effects,
      particleCount: 8,
      trailLength: 12,
      glowIntensity: 1.4,
    },
  },
};

// Utility function to generate CSS custom properties from config
export const generateCursorCSS = (config: CursorConfig): string => {
  return `
    :root {
      --cursor-core-size: ${config.size.core}px;
      --cursor-ring-size: ${config.size.ring}px;
      --cursor-pulse-size: ${config.size.pulse}px;
      --cursor-primary: ${config.colors.primary};
      --cursor-secondary: ${config.colors.secondary};
      --cursor-accent: ${config.colors.accent};
      --cursor-trail: ${config.colors.trail};
      --cursor-core-glow-duration: ${config.animations.coreGlowDuration}ms;
      --cursor-ring-rotate-duration: ${config.animations.ringRotateDuration}ms;
      --cursor-pulse-duration: ${config.animations.pulseDuration}ms;
      --cursor-particle-orbit-duration: ${config.animations.particleOrbitDuration}ms;
      --cursor-trail-length: ${config.effects.trailLength};
      --cursor-particle-count: ${config.effects.particleCount};
      --cursor-glow-intensity: ${config.effects.glowIntensity};
    }
  `;
};

// Hook for cursor theme switching
export const useCursorTheme = () => {
  const setCursorTheme = (themeName: keyof typeof cursorThemes) => {
    const theme = cursorThemes[themeName];
    const cssVars = generateCursorCSS(theme);

    // Create or update style element
    let styleElement = document.getElementById("cursor-theme-vars");
    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = "cursor-theme-vars";
      document.head.appendChild(styleElement);
    }

    styleElement.textContent = cssVars;
  };

  return {
    setCursorTheme,
    themes: Object.keys(cursorThemes) as Array<keyof typeof cursorThemes>,
  };
};

// Cursor interaction states
export const CursorStates = {
  DEFAULT: "default",
  HOVER: "hover",
  CLICK: "click",
  LOADING: "loading",
  TEXT: "text",
} as const;

export type CursorState = (typeof CursorStates)[keyof typeof CursorStates];

// Function to detect interactive elements
export const isInteractiveElement = (element: HTMLElement): boolean => {
  const interactiveTags = ["A", "BUTTON", "INPUT", "TEXTAREA", "SELECT"];
  const hasInteractiveClass =
    element.classList.contains("cursor-pointer") ||
    element.classList.contains("clickable") ||
    element.getAttribute("role") === "button";

  return interactiveTags.includes(element.tagName) || hasInteractiveClass;
};

// Function to detect text elements
export const isTextElement = (element: HTMLElement): boolean => {
  const textTags = ["P", "H1", "H2", "H3", "H4", "H5", "H6", "SPAN", "DIV"];
  const isContentEditable = element.contentEditable === "true";
  const hasTextContent =
    element.textContent && element.textContent.trim().length > 0;

  return (
    (textTags.includes(element.tagName) && hasTextContent) || isContentEditable
  );
};
