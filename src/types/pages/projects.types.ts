export interface SkillsArr {
    programingLanguage: string,
    programingLanguageIcon: string,
}
export enum ProjectFilter {
    ALL= 'all',
    CODING='coding',
    DESIGN='design'
}
interface CategoryArr {
    text: string,
    icon: string
}
export interface ProjectsArr {
    title: string,
    category: CategoryArr[],
    image: string,
    link: string,
    skills: SkillsArr[]
}