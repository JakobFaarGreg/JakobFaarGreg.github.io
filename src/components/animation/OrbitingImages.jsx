import { motion } from "framer-motion";

export default function OrbitingImages({
  profileImage,
  images = [],
  size = 320,
  radius = 125,
  imageSize = 48,
  duration = 20,
}) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Orbit ring */}
      <div
        className="absolute rounded-full border border-gray-200/70 dark:border-white/10"
        style={{
          width: radius * 2,
          height: radius * 2,
        }}
      />

      {/* Orbiting images */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {images.map((image, index) => {
          const angle = (360 / images.length) * index;

          return (
            <div
              key={`${image.src}-${index}`}
              className="absolute left-1/2 top-1/2"
              style={{
                width: imageSize,
                height: imageSize,
                marginLeft: -imageSize / 2,
                marginTop: -imageSize / 2,
                transform: `rotate(${angle}deg) translateY(-${radius}px)`,
                transformOrigin: "center",
              }}
            >
              <motion.div
                className="h-full w-full"
                animate={{ rotate: -360 }}
                transition={{
                  duration,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt || ""}
                  className="h-full w-full rounded-full object-cover
                    border-2 border-white shadow-lg
                    dark:border-gray-900"
                  draggable={false}
                />
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* Center profile */}
      <div
        className="relative z-10 overflow-hidden rounded-full
          border-4 border-white shadow-xl
          dark:border-gray-900"
        style={{
          width: imageSize * 1.7,
          height: imageSize * 1.7,
        }}
      >
        <img
          src={profileImage}
          alt="Profile"
          className="h-full w-full object-cover"
          draggable={false}
        />
      </div>
    </div>
  );
}
