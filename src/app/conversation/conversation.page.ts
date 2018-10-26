import { User } from './../interfaces/user';
import { UserService } from './../services/user.service';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.scss'],
})
export class ConversationPage implements OnInit {

  friendId: any;
  friends: User[];
  friend: User;
  constructor(private activateRoute: ActivatedRoute, private userService: UserService) {
    this.friendId = this.activateRoute.snapshot.params['uid'];
    console.log(this.friendId);
    this.friends = this.userService.getFriends();
    this.friend = this.friends.find((record) => {
      return record.uid = this.friendId;
    });
    console.log(this.friend);
  }

  ngOnInit() {
  }

}
