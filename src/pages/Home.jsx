import Sidebar from '../components/Sidebar'

export default function Home() {
    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <main className="flex-1 p-8">
                <h1 className="text-3xl font-bold">Home</h1>
                <p className="mt-4">Welcome to my website.</p>
            </main>
        </div>
    )
}
