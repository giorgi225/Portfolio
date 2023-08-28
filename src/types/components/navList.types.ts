import Menu from "@/controllers/menuController"
export type NavListProps = {
    title: string,
    menu: Menu[],
    hasRoutes: boolean, // for local routing
    hasLinks: boolean, // redirecting outside
    customProp: boolean,
}   