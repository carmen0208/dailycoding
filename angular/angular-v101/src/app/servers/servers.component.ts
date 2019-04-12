import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'Server not Create yet';
  serverName = 'Test Server';
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server has been created, name is: ' + this.serverName;
  }

  onChangeServerName(event: Event) {
    this.serverName = ((event.target) as HTMLInputElement).value;
  }
}
