export interface Cliente{
    id: string;
    nombre: string;
    correo: string;
    username: string;
    password?: string;
    hash?: string;
}