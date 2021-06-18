import { Subject1Options } from "./subject1Options";

export class Subject1Questions {
    constructor(
        public id: number | null,
        public name: string | null,
        public options: (Subject1Options[]) | null
    ) {}
}