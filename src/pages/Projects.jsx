import { ProjectsList } from "../components/projects/ProjectsList";
import projects from "../data/projects.json";

export default function Projects() {
    return (
        <>
            <h1 className="text-5xl font-bold tracking-[-0.06em] sm:text-7xl">Projects</h1>
            <p className="mt-4">Here's a list of projects I want to spotlight for you</p>
            <ProjectsList projects={projects} />
        </>
    )
}