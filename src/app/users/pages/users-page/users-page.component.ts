import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { User } from '../../interfaces/users';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css'],
  standalone:true,
  imports:[CommonModule]
})
export class UsersPageComponent implements OnInit {


  public users:User[] = [];
  public currentPage:number = 1;

  constructor(private readonly userService:UsersService) {}

  ngOnInit(): void {
    this.loadPage(this.currentPage);
  }

  loadPage = (page:number) => {
    this.userService.loadPage(page)
    .pipe(
      filter( users => users.length > 0)
    ).subscribe( users => {
      console.log(users);
      this.currentPage = page;
      this.users = users;
    })
  }



}