import { motion } from "framer-motion";

export default function OrbitingImages({
  profileImage,
  images = [],
  size = 380,
  radius = 145,
  imageSize = 54,
  profileSize = 105,
  duration = 14,
  tilt = 25,
}) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: size,
        height: size,
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Tilt wrapper: stays stationary */}
      <div
        className="absolute inset-0"
        style={{
          transform: `rotateZ(-${tilt}deg) rotateX(18deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Rotation wrapper: rotates continuously */}
        <motion.div
          className="absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
          }}
          animate={{ rotateY: 360 }}
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
    height: imageSize,
    width: "max-content",
    marginLeft: -imageSize / 2,
    marginTop: -imageSize / 2,
    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
    transformStyle: "preserve-3d",
  }}
>
  <div
    className="h-full"
    style={{
      transform: `rotateZ(${tilt}deg)`,
      backfaceVisibility: "hidden",
    }}
  >
    <img
      src={image.src}
      alt={image.alt || ""}
      draggable={false}
      className="
        block h-full w-auto max-w-none
        rounded-lg 
        object-contain shadow-xl
        dark:border-gray-800
      "
    />
  </div>
</div>
            );
          })}
        </motion.div>
      </div>

      {/* Central profile stays stationary and occludes the back orbit */}
      <div
        className="
          relative z-10 overflow-hidden rounded-full
          border-4 border-white bg-white shadow-2xl
          dark:border-gray-900 dark:bg-gray-900
        "
        style={{
          width: profileSize,
          height: profileSize,
        }}
      >
        <img
          src={profileImage}
          alt="Profile"
          draggable={false}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
