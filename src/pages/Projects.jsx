import { ProjectsList } from "../components/projects/ProjectsList";
import projects from "../data/projects.json";

export default function Projects() {
    return (
        <>
            <h1 className="text-3xl font-bold">Projects</h1>
            <p className="mt-4">Here's a list of projects I want to spotlight for you</p>
            <ProjectsList projects={projects} />
        </>
    )
}