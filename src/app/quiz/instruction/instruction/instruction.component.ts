import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  voltarQuiz() {
    setTimeout(() => {
      this.router.navigate(['/welcome'])
    }, 500);

  }
}
