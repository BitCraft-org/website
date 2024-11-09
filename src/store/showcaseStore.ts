import { api } from "@/router/api";
import { defineStore } from "pinia";

export const useShowcaseStore = defineStore('showcase', {
    state() {
        let openProject: Project | undefined
        let projects: Project[] = [
            {
                id: "cnefjo3n-o2", title: "My own compiler for all languages", tags: ["Compiler", "DSA"], owner: "Ainedeveloper Dixon Di Octopus", 
                topic: 'System programming at lower level', value: 'AtitCraft, we celebrate the creativity and innovation of our students. Today, we’re excited to share the story of Avneet, a young coding enthusiast, who designed a dynamic and visually appealing restaurant website using HTML and CSS. Through SkoolOfCode’s online coding classes for kids, Avneet learned essential web development skills that helped bring her vision to life, showcasing her dedication and creativity in this impressive project.', createdAt: "23:43",
                updatedAt: "23:34", reactions: [], comments: [], views: 4
            },
            {
                id: "cnefjo3n-o2", title: "My own compiler for all languages", tags: ["Compiler", "DSA"], owner: "Ainedeveloper Dixon Di Octopus", 
                topic: 'System programming at lower level', value: 'AtitCraft, we celebrate the creativity and innovation of our students. Today, we’re excited to share the story of Avneet, a young coding enthusiast, who designed a dynamic and visually appealing restaurant website using HTML and CSS. Through SkoolOfCode’s online coding classes for kids, Avneet learned essential web development skills that helped bring her vision to life, showcasing her dedication and creativity in this impressive project.', createdAt: "23:43",
                updatedAt: "23:34", reactions: [], comments: [], views: 4
            },
            {
                id: "cnefjo3n-o2", title: "My own compiler for all languages", tags: ["Compiler", "DSA"], owner: "Ainedeveloper Dixon Di Octopus", 
                topic: 'System programming at lower level', value: 'AtitCraft, we celebrate the creativity and innovation of our students. Today, we’re excited to share the story of Avneet, a young coding enthusiast, who designed a dynamic and visually appealing restaurant website using HTML and CSS. Through SkoolOfCode’s online coding classes for kids, Avneet learned essential web development skills that helped bring her vision to life, showcasing her dedication and creativity in this impressive project.', createdAt: "23:43",
                updatedAt: "23:34", reactions: [], comments: [], views: 4
            },
            {
                id: "cnefjo3n-o2", title: "My own compiler for all languages", tags: ["Compiler", "DSA"], owner: "Ainedeveloper Dixon Di Octopus", 
                topic: 'System programming at lower level', value: 'AtitCraft, we celebrate the creativity and innovation of our students. Today, we’re excited to share the story of Avneet, a young coding enthusiast, who designed a dynamic and visually appealing restaurant website using HTML and CSS. Through SkoolOfCode’s online coding classes for kids, Avneet learned essential web development skills that helped bring her vision to life, showcasing her dedication and creativity in this impressive project.', createdAt: "23:43",
                updatedAt: "23:34", reactions: [], comments: [], views: 4
            },
            {
                id: "cnefjo3n-o2", title: "My own compiler for all languages", tags: ["Compiler", "DSA"], owner: "Ainedeveloper Dixon Di Octopus", 
                topic: 'System programming at lower level', value: 'AtitCraft, we celebrate the creativity and innovation of our students. Today, we’re excited to share the story of Avneet, a young coding enthusiast, who designed a dynamic and visually appealing restaurant website using HTML and CSS. Through SkoolOfCode’s online coding classes for kids, Avneet learned essential web development skills that helped bring her vision to life, showcasing her dedication and creativity in this impressive project.', createdAt: "23:43",
                updatedAt: "23:34", reactions: [], comments: [], views: 4
            },
            {
                id: "cnefjo3n-o2", title: "My own compiler for all languages", tags: ["Compiler", "DSA"], owner: "Ainedeveloper Dixon Di Octopus", 
                topic: 'System programming at lower level', value: 'AtitCraft, we celebrate the creativity and innovation of our students. Today, we’re excited to share the story of Avneet, a young coding enthusiast, who designed a dynamic and visually appealing restaurant website using HTML and CSS. Through SkoolOfCode’s online coding classes for kids, Avneet learned essential web development skills that helped bring her vision to life, showcasing her dedication and creativity in this impressive project.', createdAt: "23:43",
                updatedAt: "23:34", reactions: [], comments: [], views: 4
            },
            {
                id: "cnefjo3n-o2", title: "My own compiler for all languages", tags: ["Compiler", "DSA"], owner: "Ainedeveloper Dixon Di Octopus", 
                topic: 'System programming at lower level', value: 'AtitCraft, we celebrate the creativity and innovation of our students. Today, we’re excited to share the story of Avneet, a young coding enthusiast, who designed a dynamic and visually appealing restaurant website using HTML and CSS. Through SkoolOfCode’s online coding classes for kids, Avneet learned essential web development skills that helped bring her vision to life, showcasing her dedication and creativity in this impressive project.', createdAt: "23:43",
                updatedAt: "23:34", reactions: [], comments: [], views: 4
            },
        ]

        return {openProject, projects}
    },

    actions: {
        async postProject(project: RawProject) {
            try {
                const response = await api.post('/showcase/create', project)

                if(response.status == 201){
                    this.projects.push(response.data as Project)
                }
            } catch (error) {
                console.log(error)
            }
        },

        loadProject(projectId: string) {
            const projectIndex = this.projects.findIndex(project => project.id == projectId)

            if (projectIndex != undefined) {
                this.openProject = this.projects[projectIndex]
            }
        },

        offloadProject() {
            this.openProject = undefined
        }
    }
})

export interface RawProject {
    title: string,
    value: string,
    owner: string,
    topic: string
    tags: string[],
}

export interface Project extends RawProject {
    id: string,
    createdAt: string,
    updatedAt: string,
    reactions: string[],
    comments: string[],
    views: number
}