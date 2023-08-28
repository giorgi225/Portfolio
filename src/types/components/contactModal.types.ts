export interface FormData {
    name: string,
    emailOrPhone: string,
    subject: string[] | string,
    message: string,
}

export interface Checkboxes {
    coding: boolean,
    design: boolean,
    other: boolean,
}