// src/themes/clothingThemes.ts
export interface ThemeConfig {
    id: string;
    name: string;
    icon: string;
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
        text: string;
        burst1: string;
        burst2: string;
        burst3: string;
    };
    effects: {
        halftone: boolean;
        scanlines: boolean;
        grid: boolean;
        glow: boolean;
        gradient: string;
    };
    typography: {
        fontFamily: string;
        textShadow: string;
        letterSpacing: string;
    };
    tagline: {
        line1: string;
        line2: string;
        line3: string;
    };
}
export const clothingThemes: Record<string, ThemeConfig> = {
    pop: {
        id: 'pop',
        name: 'Pop Art',
        icon: '💥',
        colors: {
            primary: '#e91e63',
            secondary: '#d81b60',
            accent: '#ffd54f',
            background: '#e91e63',
            text: '#ffd54f',
            burst1: '#00bcd4',
            burst2: '#ff9800',
            burst3: '#00bcd4',
        },
        effects: {
            halftone: true,
            scanlines: false,
            grid: false,
            glow: false,
            gradient: 'linear-gradient(135deg, #e91e63 0%, #d81b60 100%)',
        },
        typography: {
            fontFamily: "'Bangers', 'Impact', cursive",
            textShadow: '4px 4px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000',
            letterSpacing: '0.05em',
        },
        tagline: {
            line1: 'LOVE.',
            line2: 'OBSESSED.',
            line3: 'SCARED.',
        },
    },
    neon: {
        id: 'neon',
        name: 'Neon Nights',
        icon: '🌃',
        colors: {
            primary: '#000000',
            secondary: '#1a1a1a',
            accent: '#ffffff',
            background: '#000000',
            text: '#ffffff',
            burst1: '#ffffff',
            burst2: '#e0e0e0',
            burst3: '#ffffff',
        },
        effects: {
            halftone: false,
            scanlines: true,
            grid: false,
            glow: true,
            gradient: 'linear-gradient(135deg, #000000 0%, #0a0a0a 100%)',
        },
        typography: {
            fontFamily: "'Orbitron', 'Courier New', monospace",
            textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.5), 0 0 60px rgba(255, 255, 255, 0.3)',
            letterSpacing: '0.15em',
        },
        tagline: {
            line1: 'LOVE.',
            line2: 'OBSESSED.',
            line3: 'SCARED.',
        },
    },
    retro: {
        id: 'retro',
        name: 'Retro Wave',
        icon: '🌅',
        colors: {
            primary: '#FF0A78',        // Hot pink/magenta (from image)
            secondary: '#602b96',      // Deep purple (from image)
            background: '#432879',     // Dark navy purple (from image)
            text: '#FFFFFF',           // White
            accent: '#FF0A78',         // Hot pink
            burst1: '#FFB366',         // Peachy orange (sun top)
            burst2: '#FF0A78',         // Hot pink/magenta (sun middle)
            burst3: '#B026FF',         // Purple-pink (grid lines)
        },
        effects: {
            halftone: false,
            scanlines: false,
            grid: true,
            glow: true,
            gradient: 'linear-gradient(180deg, #240f50 0%, #842a9b 20%, #FF0A78 60%, #842a9b 80%, #240f50 100%)',
        },
        typography: {
            fontFamily: "'Righteous', 'Arial Black', sans-serif",
            textShadow: 'rgba(255, 10, 120, 0.6), 3px 3px 6px rgba(0, 0, 0, 0.9)',
            letterSpacing: '0.05em',
        },
        tagline: {
            line1: 'LOVE.',
            line2: 'OBSESSED.',
            line3: 'SCARED.',
        },
    },
};
export const getTheme = (themeId: string): ThemeConfig => {
    return clothingThemes[themeId] || clothingThemes.pop;
};
export const getAllThemes = (): ThemeConfig[] => {
    return Object.values(clothingThemes);
};