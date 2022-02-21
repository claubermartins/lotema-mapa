import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-area',
  templateUrl: './navbar-area.component.html',
  styleUrls: ['./navbar-area.component.css']
})
export class NavbarAreaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
