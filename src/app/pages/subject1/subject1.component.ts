import { Component, OnInit } from '@angular/core';
import { Subject1Options } from 'src/app/models/subject1Options';
import { Subject1Questions } from 'src/app/models/subject1Question';
import { Subject1Response } from 'src/app/models/subject1Response';
import { QuestionService } from 'src/app/services/questions.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-subject1',
  templateUrl: './subject1.component.html',
  styleUrls: ['./subject1.component.css']
})
export class Subject1Component implements OnInit {
  questions: any[] = [];
  firstCounterTrue: number = 0;
  firstCounterFalse: number = 0;
  firstSelectorTrue: number = 1;
  firstSelectorFalse: number = 0;
  subject1Response: Subject1Response = new Subject1Response(null, null, null)
  questionsResponse: Subject1Questions = new Subject1Questions(null, null, null)
  optionsResponse: Subject1Options = new Subject1Options(null, null, null)

  constructor(private _questionService: QuestionService) { }

  saveQuestion() {
    swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
  }

  type = 'bar';
  data = {
    labels: ["Так", "Ні", "Можливо"],
    datasets: [
      {
        label: "Питання 1",
        data: [5, 3, 2, 0, 8],
        borderColor: "rgba(235, 168, 58, 0.5)",
        backgroundColor: "rgba(235, 168, 58, 0.5)"
      }
    ],
  };

  type2 = 'bar';
  data2 = {
    labels: ["так", "ні"],
    datasets: [
      {
        label: "Питання 2",
        data: [4, 6, 0, 8],
        borderColor: "rgba(235, 168, 58, 0.5)",
        backgroundColor: "rgba(235, 168, 58, 0.5)"
      }
    ]
  };

  options = {
    responsive: true,
    maintainAspectRatio: false
  };

  ngOnInit(): void {
    this._questionService.getJSON().subscribe(data => {
      this.subject1Response = data as any;
      this.questionsResponse = data.questions as any;
      this.optionsResponse = data.questions.map((x: any) => x.options);
    });
  }
}


