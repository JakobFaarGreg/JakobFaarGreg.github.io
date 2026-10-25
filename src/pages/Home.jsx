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
            <h1 className="text-3xl font-bold">Hello!</h1>
            <p className="mt-4">My name is Jakob,  welcome to my personal website.</p>
            <p className="mt-4">This is where I show off my projects</p>

            <section className="flex min-h-[250px] items-center justify-center">
                <OrbitingImages
                    profileImage="/images/floating/profilepic.webp"
                    images={orbitImages}
                    size={500}
                    radius={125}
                    profileSize={180}
                    imageSize={40}
                    duration={25}
                />
            </section>

        </>
    )
}