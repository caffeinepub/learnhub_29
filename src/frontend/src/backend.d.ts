import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Course {
    title: string;
    instructor: string;
    description: string;
    category: string;
    rating: bigint;
    price: bigint;
}
export interface backendInterface {
    getAllCourses(): Promise<Array<Course>>;
    getCourse(id: bigint): Promise<Course | null>;
    submitContactMessage(name: string, email: string, message: string): Promise<void>;
}
