
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
  profileDepth = 45,
}) {
  const safeImageCount = Math.max(images.length, 1);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: size,
        height: size,
        perspective: "900px",
        perspectiveOrigin: "50% 50%",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Shared 3D scene: profile and orbit belong to the same scene */}
      <div
        className="absolute inset-0"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Tilt only the orbit */}
        <div
          className="absolute inset-0"
          style={{
            transform: `rotateZ(-${tilt}deg) rotateX(18deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Rotate the orbit continuously */}
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
              const angle = (360 / safeImageCount) * index;

              return (
                <div
                  key={`${image.src}-${index}`}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    height: imageSize,
                    width: "max-content",
                    marginLeft: -imageSize / 2,
                    marginTop: -imageSize / 2,

                    // Place each image around the 3D ring
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    transformStyle: "preserve-3d",

                    // Let CSS perspective determine its apparent size
                    backfaceVisibility: "visible",
                  }}
                >
                  <div
                    className="h-full"
                    style={{
                      transform: `rotateZ(${tilt}deg)`,
                      backfaceVisibility: "visible",
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt || ""}
                      draggable={false}
                      className="
                        block h-full w-auto max-w-none
                        rounded-lg object-contain
                        shadow-xl
                      "
                      style={{
                        backfaceVisibility: "visible",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Profile sits forward in 3D, not on a forced z-index layer */}
        <div
          className="
            absolute left-1/2 top-1/2
            overflow-hidden rounded-full shadow-2xl
            dark:border-gray-900 dark:bg-gray-900
          "
          style={{
            width: profileSize,
            height: profileSize,

            // Center the profile and move it toward the viewer
            transform: `translate(-50%, -50%) translateZ(${profileDepth}px)`,

            // Intentionally no z-index: depth should control overlap
            transformStyle: "preserve-3d",
          }}
        >
          <img
            src={profileImage}
            alt="Profile"
            draggable={false}
            className="block h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
