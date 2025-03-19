import { useState } from "react";
import { motion } from "framer-motion";
import { Palette } from "lucide-react";
import { LogoSVG } from "./logo-svg";
import { siteConfig } from "@/config/site";

const TABS = [
  {
    id: "system",
    label: "Design System",
    icon: Palette,
    description: "Colors, Typography & Brand",
  },
] as const;

interface LogoSettings {
  bgColor: string;
  color: string;
  ratio: string;
  size: number;
}

// Fix color comparison logic by adding type guard
function isLightColor(color: string): boolean {
  // Add light colors that need dark text
  const lightColors = ["#f2efeb", "#ffffff"];
  return lightColors.includes(color);
}

export function BrandKit() {
  const [activeTab, setActiveTab] =
    useState<(typeof TABS)[number]["id"]>("system");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative"
    >
      {/* Glass effect background - simplified for mobile */}
      <div className="absolute inset-0" />

      {/* Tab Navigation */}
      <div className="relative z-10 flex p-1 gap-1 bg-black/20 backdrop-blur-md"></div>

      {/* Content Area with enhanced styling */}
      <div className="relative z-10 p-6">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="space-y-8"
        >
          <DesignSystemTab />
        </motion.div>
      </div>
    </motion.div>
  );
}

function DesignSystemTab() {
  const [activeLogo, setActiveLogo] = useState<LogoSettings>({
    bgColor: siteConfig.brandColors[0].value,
    color: "#ffffff",
    ratio: "print", // Changed default to print (8.5:11)
    size: 200, // default size in px
  });

  const sizeMarks = [
    { value: 100, label: "100px" },
    { value: 200, label: "200px" },
    { value: 300, label: "300px" },
    { value: 400, label: "400px" },
    { value: 500, label: "500px" },
    { value: 580, label: "580px" },
  ];

  const sliderMarks = [100, 200, 300, 400, 500, 580];

  return (
    <div className="space-y-12">
      {/* Main Content + Logo Preview Split */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-12">
          {/* Colors + Guidelines Section */}
          <section className="space-y-6">
            <h3 className="text-xl font-bold font-prompt text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
              Color Palette
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {siteConfig.brandColors.map((color) => (
                <motion.button
                  key={color.value}
                  onClick={() =>
                    setActiveLogo((prev) => ({ ...prev, color: color.value }))
                  }
                  whileHover={{ scale: 1.02 }}
                  className="group relative p-6 rounded-xl border border-white/10 overflow-hidden transition-all duration-300 text-left"
                  style={{ backgroundColor: color.value }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="relative z-10">
                    <span
                      className={`text-sm font-prompt font-bold ${
                        isLightColor(color.value) ? "text-black" : "text-white"
                      }`}
                    >
                      {color.label}
                    </span>
                    <span
                      className={`text-xs mt-1 block ${
                        isLightColor(color.value)
                          ? "text-black/60"
                          : "text-white/60"
                      }`}
                    >
                      {color.value.toUpperCase()}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </section>

          {/* Typography Section */}
          <section className="space-y-6">
            <h3 className="text-xl font-bold font-prompt text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
              Typography
            </h3>
            <div className="space-y-6 backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-white/10">
              <div>
                <span className="text-sm font-prompt text-white/60">
                  Primary Font
                </span>
                <h2 className="text-[2.5rem] leading-tight text-white font-prompt font-bold tracking-tight mt-2">
                  Prompt Bold
                </h2>
                <div className="flex gap-4 mt-4">
                  {["Aa", "Bb", "Cc", "123"].map((char) => (
                    <div
                      key={char}
                      className="w-12 h-12 rounded-lg bg-white/5 
                        flex items-center justify-center 
                        text-white/80 !font-prompt font-bold text-lg"
                    >
                      {char}
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-6 border-t border-white/10">
                <span className="text-sm font-prompt text-white/60">
                  Secondary Font
                </span>
                <p className="text-2xl text-white font-inter mt-2">
                  Inter Regular
                </p>
                <p className="text-white/60 text-sm mt-2 font-inter">
                  Used for body text and UI elements
                </p>
              </div>
            </div>
          </section>

          {/* Guidelines Grid */}
          <section className="space-y-6">
            <h3 className="text-xl font-bold font-prompt text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
              Brand Guidelines
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <GuidelineCard
                title="Brand Voice"
                description="Clear yet mysterious, professional yet approachable"
                items={[
                  "Use active voice",
                  "Balance technical terms",
                  "Maintain intrigue",
                ]}
              />
              <GuidelineCard
                title="Logo Usage"
                description="Proper spacing and alignment"
                items={[
                  "Maintain clear space",
                  "Don't stretch or distort",
                  "Use approved colors",
                ]}
              />
              <GuidelineCard
                title="Values"
                description="Our core principles"
                items={[
                  "Mystery & Innovation",
                  "Premium Quality",
                  "Thoughtful Design",
                ]}
              />
              <GuidelineCard
                title="Visual Style"
                description="Consistent visual language"
                items={[
                  "Clean layouts",
                  "Bold typography",
                  "Strategic accents",
                ]}
              />
            </div>
          </section>
        </div>

        {/* Logo Playground */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-bold font-prompt text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
            Logo Playground
          </h3>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-medium text-white/60">
                      Size
                    </span>
                    <span className="text-[10px] text-white/40">(px)</span>
                  </div>
                  <span className="font-mono text-xs text-white/60 tabular-nums">
                    {activeLogo.size}px
                  </span>
                </div>

                <div className="relative h-8 flex items-center px-[2px]">
                  {/* Size markers */}
                  <div className="absolute top-0 left-0 right-0 flex justify-between pointer-events-none">
                    {sliderMarks.map((mark) => (
                      <div
                        key={mark}
                        className="flex flex-col items-center gap-1"
                      >
                        <span className="text-[9px] font-mono text-white/30">
                          {mark}
                        </span>
                        <div className="w-px h-1 bg-white/10" />
                      </div>
                    ))}
                  </div>

                  {/* Track - Fixed calculation */}
                  <div className="absolute inset-x-0 h-[2px] top-1/2 -translate-y-1/2 bg-white/5">
                    <div
                      className="h-full bg-gradient-to-r from-violet-500/40 to-fuchsia-500/40 rounded-full"
                      style={{
                        width: `${
                          ((activeLogo.size - 100) / (580 - 100)) * 100
                        }%`,
                      }}
                    />
                  </div>

                  {/* Input */}
                  <input
                    type="range"
                    min="100"
                    max="580"
                    step="10"
                    value={activeLogo.size}
                    onChange={(e) => {
                      const value =
                        Math.round(Number(e.target.value) / 10) * 10;
                      setActiveLogo((prev) => ({
                        ...prev,
                        size: value,
                      }));
                    }}
                    className="absolute inset-0 w-full appearance-none bg-transparent cursor-pointer
                        [&::-webkit-slider-thumb]:appearance-none
                        [&::-webkit-slider-thumb]:w-1
                        [&::-webkit-slider-thumb]:h-2
                        [&::-webkit-slider-thumb]:rounded-full
                        [&::-webkit-slider-thumb]:bg-white
                        [&::-webkit-slider-thumb]:shadow-sm
                        [&::-webkit-slider-thumb]:border
                        [&::-webkit-slider-thumb]:border-white/20
                        [&::-webkit-slider-thumb]:transition-transform
                        [&::-webkit-slider-thumb]:hover:scale-150"
                    style={{ height: "32px" }}
                  />
                </div>

                {/* Quick Presets */}
                <div className="flex flex-wrap gap-1.5">
                  {[100, 200, 300, 400, 500, 580].map((size) => (
                    <button
                      key={size}
                      onClick={() =>
                        setActiveLogo((prev) => ({ ...prev, size }))
                      }
                      className={`px-2 py-0.5 text-[10px] rounded-full transition-all ${
                        activeLogo.size === size
                          ? "bg-white/20 text-white"
                          : "text-white/40 hover:text-white/60 hover:bg-white/5"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Preview Window */}
            <div
              className="w-full rounded-xl border border-white/10 overflow-hidden transition-all duration-300 backdrop-blur-md relative"
              style={{
                backgroundColor: activeLogo.bgColor,
                aspectRatio:
                  siteConfig.aspectRatios.find((r) => r.id === activeLogo.ratio)
                    ?.ratio || 16 / 9,
              }}
            >
              {/* Grid with Scales */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Background grid */}
                <div className="absolute inset-0 grid grid-cols-12 grid-rows-6">
                  {Array.from({ length: 72 }).map((_, i) => (
                    <div
                      key={i}
                      className="border-[0.5px] border-white/[0.02]"
                    />
                  ))}
                </div>

                {/* Vertical measurement lines */}
                {Array.from({ length: 5 }).map((_, index) => {
                  const maxWidth = activeLogo.size;
                  const step = maxWidth / 4;
                  const px = Math.round(step * index);

                  return (
                    <div
                      key={px}
                      className={`absolute top-0 bottom-0 flex items-start justify-center ${
                        index === 0 ? "left-0" : ""
                      }`}
                      style={{ left: `${(index / 4) * 100}%` }}
                    >
                      <div className="flex flex-col items-center">
                        <span className="px-1 py-0.5 bg-black/40 rounded text-[10px] font-mono text-white/60 backdrop-blur-sm">
                          {px}
                        </span>
                        <div className="w-px h-full bg-white/5" />
                      </div>
                    </div>
                  );
                })}

                {/* Horizontal measurement lines */}
                {Array.from({ length: 4 }).map((_, index) => {
                  const currentRatio =
                    siteConfig.aspectRatios.find(
                      (r) => r.id === activeLogo.ratio
                    )?.ratio || 1;

                  // Calculate the actual height based on the width and aspect ratio
                  const totalHeight = Math.round(
                    activeLogo.size / currentRatio
                  );
                  const step = totalHeight / 3;
                  const px = Math.round(step * index);

                  return (
                    <div
                      key={px}
                      className={`absolute left-0 right-0 flex items-center ${
                        index === 0 ? "top-0" : ""
                      }`}
                      style={{ top: `${(index / 3) * 100}%` }}
                    >
                      <span className="px-1 py-0.5 bg-black/40 rounded text-[10px] font-mono text-white/60 backdrop-blur-sm">
                        {px}
                      </span>
                      <div className="flex-1 h-px bg-white/5" />
                    </div>
                  );
                })}

                {/* Center guides */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 border-l border-dashed border-white/20" />
                <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 border-t border-dashed border-white/20" />
              </div>

              {/* Logo Preview */}
              <div className="relative w-full h-full flex items-center justify-center p-12">
                <div
                  className="transform transition-transform duration-200"
                  style={{ transform: `scale(${activeLogo.size / 200})` }}
                  dangerouslySetInnerHTML={{
                    __html: LogoSVG({
                      backgroundColor: "transparent",
                      color: activeLogo.color,
                      width: 200,
                      height: 60,
                    }),
                  }}
                />
              </div>
            </div>

            <div className="rounded-xl bg-white/[0.02] backdrop-blur-xl border border-white/10 p-3">
              <div className="relative">
                <div className="overflow-x-auto overflow-y-hidden -mx-1.5 px-1.5 scrollbar-none">
                  <div className="flex gap-1 min-w-max py-0.5">
                    {siteConfig.aspectRatios.map((ratio) => (
                      <AspectRatioButton
                        key={ratio.id}
                        ratio={ratio}
                        isActive={activeLogo.ratio === ratio.id}
                        onClick={() =>
                          setActiveLogo((prev) => ({
                            ...prev,
                            ratio: ratio.id,
                          }))
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Improved Contrast Combinations UI */}
            <div className="rounded-xl bg-white/[0.02] backdrop-blur-xl border border-white/10 p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-medium text-white/60">
                  Color Combinations
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: "Dark", bg: "#050a30", fg: "#ffffff" },
                  { name: "Electric", bg: "#233dff", fg: "#ffffff" },
                  { name: "Light", bg: "#f2efeb", fg: "#050a30" },
                  { name: "Accent", bg: "#8f5d46", fg: "#ffffff" },
                ].map((combo) => (
                  <button
                    key={combo.name}
                    onClick={() =>
                      setActiveLogo((prev) => ({
                        ...prev,
                        bgColor: combo.bg,
                        color: combo.fg,
                      }))
                    }
                    className={`
                      group relative h-8 rounded-lg overflow-hidden border
                      transition-all duration-300
                      ${
                        activeLogo.bgColor === combo.bg
                          ? "border-white/20"
                          : "border-white/10 hover:border-white/15"
                      }
                    `}
                  >
                    <div
                      className="absolute inset-0"
                      style={{ backgroundColor: combo.bg }}
                    />
                    <div className="relative h-full px-3 flex items-center justify-between">
                      <span
                        className={`text-[10px] font-medium ${
                          combo.bg === "#f2efeb"
                            ? "text-black/70"
                            : "text-white/70"
                        }`}
                      >
                        {combo.name}
                      </span>
                      {activeLogo.bgColor === combo.bg && (
                        <div className="w-1 h-1 rounded-full bg-yellow-400/80 shadow-[0_0_4px_rgba(250,204,21,0.5)]" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface GuidelineCardProps {
  title: string;
  description: string;
  items: string[];
}

function GuidelineCard({ title, description, items }: GuidelineCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-4 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/[0.07]"
    >
      <h4 className="font-prompt font-semibold text-white text-sm mb-2">
        {title}
      </h4>
      <p className="text-white/60 text-xs mb-3">{description}</p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li
            key={item}
            className="text-white/40 text-xs flex items-center gap-2"
          >
            <span className="w-1 h-1 rounded-full bg-white/40" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

interface AspectRatioButtonProps {
  ratio: {
    id: string;
    label: string;
    description: string;
    ratio: number; // Add ratio property to fix TypeScript error
  };
  isActive: boolean;
  onClick: () => void;
}

function AspectRatioButton({
  ratio,
  isActive,
  onClick,
}: AspectRatioButtonProps) {
  // Convert decimal ratio to proportion (e.g., 0.5625 -> "9:16")
  const getRatioProportion = (ratio: number) => {
    // Common ratios
    const commonRatios = {
      1: "1:1",
      1.778: "16:9",
      0.8: "4:5",
      1.91: "1.91:1",
      0.707: "1:√2", // A4
      0.773: "8.5:11", // US Letter
      2.333: "21:9", // Cinema
    };

    if (ratio in commonRatios) {
      return commonRatios[ratio as keyof typeof commonRatios];
    }

    // For non-standard ratios, show simplified fraction
    const tolerance = 0.001;
    const findRatio = (decimal: number, maxDenom: number = 16): string => {
      let bestNum = 1;
      let bestDenom = 1;
      let bestError = Math.abs(decimal - 1);

      for (let denom = 1; denom <= maxDenom; denom++) {
        const num = Math.round(decimal * denom);
        const error = Math.abs(decimal - num / denom);
        if (error < bestError) {
          bestError = error;
          bestNum = num;
          bestDenom = denom;
        }
      }

      return `${bestNum}:${bestDenom}`;
    };

    return findRatio(ratio);
  };

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        group relative h-7 px-2.5
        rounded-full 
        transition-all duration-300
        ${
          isActive
            ? "bg-gradient-to-b from-white/20 to-white/[0.08] border-t border-white/20 shadow-[inset_0px_-1px_1px_rgba(0,0,0,0.1)]"
            : "bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-white/10"
        }
      `}
    >
      <div className="flex items-center">
        <span className="text-[10px] font-mono text-white/60 tabular-nums">
          {getRatioProportion(ratio.ratio)}
        </span>
      </div>

      {/* Minimal hover tooltip */}
      <div
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max
        opacity-0 group-hover:opacity-100 transition-opacity duration-200
        pointer-events-none z-50"
      >
        <p className="text-[10px] text-white/60 whitespace-nowrap">
          {ratio.label}
        </p>
      </div>
    </motion.button>
  );
}
