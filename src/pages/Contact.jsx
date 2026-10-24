import Sidebar from '../components/Sidebar'

export default function Contact() {
    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <main className="flex-1 p-8">
                <h1 className="text-3xl font-bold">Contact</h1>
                <p className="mt-4">Who am I?</p>
            </main>
        </div>
    )
}