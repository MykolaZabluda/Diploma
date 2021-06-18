import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor() { }

  type = 'pie';
  data = {
    labels: ["A", "B", "C"],
    datasets: [
      {
        label: "Питання 1",
        data: [3, 2, 1],
        borderColor: "#fff",
        backgroundColor: ["#125d98", "#3c8dad", "#dddddd"]
      }
    ],
  };

  type2 = 'pie';
  data2 = {
    labels: ["A", "B", "C"],
    datasets: [
      {
        label: "Питання 1",
        data: [2, 1, 3],
        borderColor: "#fff",
        backgroundColor: ["#125d98", "#3c8dad", "#dddddd"]
      }
    ],
  };

  type3 = 'pie';
  data3 = {
    labels: ["A", "B", "C"],
    datasets: [
      {
        label: "Питання 1",
        data: [1, 3, 2],
        borderColor: "#fff",
        backgroundColor: ["#125d98", "#3c8dad", "#dddddd"]
      }
    ],
  };

  type4 = 'pie';
  data4 = {
    labels: ["A", "B", "C"],
    datasets: [
      {
        label: "Питання 1",
        data: [3,1, 2],
        borderColor: "#fff",
        backgroundColor: ["#125d98", "#3c8dad", "#dddddd"]
      }
    ],
  };

  type5 = 'pie';
  data5 = {
    labels: ["A", "B", "C"],
    datasets: [
      {
        label: "Питання 1",
        data: [1, 2, 3],
        borderColor: "#fff",
        backgroundColor: ["#125d98", "#3c8dad", "#dddddd"]
      }
    ],
  };

  options = {
    responsive: true,
    maintainAspectRatio: false
  };

  ngOnInit(): void {
  }

}
