import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class QuestionService {

   constructor(private http: HttpClient) {
        this.getJSON().subscribe(data => {
            console.log(data);
        });
    }

    public getJSON(): Observable<any> {
        return this.http.get("/assets/data/subject-1.json");
    }
}