export interface FilterBtnsArr {
    icon?: string,
    text: string,
    val: string,
}
export type FilterBtnsProps = {
    filterArr: FilterBtnsArr[],
    filterSelected: string,
}