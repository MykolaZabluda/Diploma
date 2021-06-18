import { Subject1Questions } from "./subject1Question";

export class Subject1Response {
    constructor(
        public id: number | null,
        public name: string | null,
        public questions: (Subject1Questions[]) | null
    ) {}
}