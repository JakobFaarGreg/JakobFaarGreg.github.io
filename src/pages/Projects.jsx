import { ProjectsList } from "../components/projects/ProjectsList";
import projects from "../data/projects.json";

export default function Projects() {
    return (
        <>
            <h1 className="text-3xl font-bold">Projects</h1>
            <p className="mt-4">What projects are there?</p>
            <ProjectsList projects={projects} />
        </>
    )
}