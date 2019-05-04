import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  // serverCreationStatus = 'Server not Create yet';
  serverName = 'Test Server';
  serverCreated = false;
  servers = ['Test Server 1', 'Test Server 2'];
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    // this.serverCreationStatus = 'Server has been created, name is: ' + this.serverName;
  }

  onChangeServerName(event: Event) {
    this.serverName = ((event.target) as HTMLInputElement).value;
  }
}
