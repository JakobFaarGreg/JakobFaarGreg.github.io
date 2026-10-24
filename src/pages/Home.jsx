import OrbitingImages from '../components/animation/OrbitingImages'

export default function Home() {
    const orbitImages = [
        { src: "/images/floating/basketball.webp", alt: "Basketball" },
        { src: "/images/floating/book.webp", alt: "Book" },
        { src: "/images/floating/cookingpot.webp", alt: "Cooking pot" },
        { src: "/images/floating/d20.webp", alt: "D20 dice" },
        { src: "/images/floating/fishingreel.webp", alt: "Fishing reel" },
        { src: "/images/floating/runningshoes.webp", alt: "Running shoes" },
    ];
    return (
        <>
            <h1 className="text-3xl font-bold">Home</h1>
            <p className="mt-4">Welcome to my website.</p>

            <section className="flex min-h-[500px] items-center justify-center bg-gray-50 dark:bg-gray-950">
                <OrbitingImages
                    profileImage="/images/profile.jpg"
                    images={orbitImages}
                    size={340}
                    radius={125}
                    imageSize={48}
                    duration={24}
                />
            </section>

        </>
    )
}