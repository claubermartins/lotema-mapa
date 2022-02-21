// import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @ViewChild('name') nameKey!: ElementRef;
  // constructor(private router: Router) { }

  ngOnInit(): void {
  }
  startQuiz() {
    localStorage.setItem("name", this.nameKey.nativeElement.value);
  }
  // sairQuiz() {
  //   setTimeout(() => {
  //     this.router.navigate(['/navbar-area'])
  //   });
  // }
}
