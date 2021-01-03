import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todoitems: any;
  

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getTodoItems();
  }

  getTodoItems() {
    this.http.get('https://localhost:44327/api/TodoItems').subscribe(response => {
      this.todoitems = response;
    }, error => {
      console.log(error);
    });
  }

}
