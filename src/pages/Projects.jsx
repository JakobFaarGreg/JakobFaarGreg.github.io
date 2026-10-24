import Sidebar from '../components/Sidebar'

export default function Projects() {
    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <main className="flex-1 p-8">
                <h1 className="text-3xl font-bold">Projects</h1>
                <p className="mt-4">What projects are there?</p>
            </main>
        </div>
    )
}