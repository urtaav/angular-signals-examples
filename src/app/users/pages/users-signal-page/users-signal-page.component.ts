import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { User } from '../../interfaces/users';
import { UsersService } from '../../services/users.service';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  templateUrl: './users-signal-page.component.html',
  styleUrls: ['./users-signal-page.component.css'],
  standalone:true,
  imports:[CommonModule]
})
export class UsersSignalPageComponent implements OnInit {

  public userService = inject(UsersService);

  public users = signal<User[]>([]);
  public currentPage = signal<number>(1);
  public labelTotalUsers = computed( () => `Total de usuarios ${ this.users().length }`);
  // get users() {
  //   return users;
  // }

  // get currentPage() {
  //   return currentPage;
  // }

  // get labelTotalUsers() {
  //   return labelTotalUsers;
  // }

  ngOnInit(): void {
    this.loadPage(this.currentPage());
  }

  loadPage = (page: number) => {
    this.userService.loadPage(page)
      .pipe(
        filter(users => users.length > 0)
      ).subscribe(newUsers => {
        console.log(newUsers);
        this.currentPage.set(page);
        this.users.set( newUsers );
        // this.users.set([ ...this.users(), ...users ]);
        // this.users.update(currentUsers => [...currentUsers, ...newUsers])
      })
  }
}