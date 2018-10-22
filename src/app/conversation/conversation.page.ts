import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.scss'],
})
export class ConversationPage implements OnInit {

  friends: any;
  constructor(private activateRoute: ActivatedRoute) {
    this.friends = this.activateRoute.snapshot.params['uid'];
    console.log(this.friends);
  }

  ngOnInit() {
  }

}
