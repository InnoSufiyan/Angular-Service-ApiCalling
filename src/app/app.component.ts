import { Component } from '@angular/core';
import { UsersDataService } from './services/users-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-service';
  users: any;

  constructor(private usersData: UsersDataService) {
    this.usersData.users().subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }

  getUsersFormData(data: any) {
    console.log(data, '==>>data');
    this.usersData.saveUsers(data).subscribe((data) => {
      console.log(data);
    });
  }
}
