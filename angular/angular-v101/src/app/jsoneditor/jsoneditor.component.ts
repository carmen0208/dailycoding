import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor/jsoneditor/jsoneditor.component';

@Component({
  selector: 'app-jsoneditor',
  template: '<json-editor [options]="editorOptions" [data]="data"></json-editor>',
  styleUrls: ['./jsoneditor.component.css']
})
export class JsoneditorComponent implements OnInit {
  public editorOptions: JsonEditorOptions;
  public data: any;
  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;
  constructor() {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
    this.data = {
      products:
      [{name: 'car',
        product:
        [{name: 'honda',
        model:
          [{id: 'civic', name: 'civic'},
            {id: 'accord', name: 'accord'},
            {id: 'crv', name: 'crv'},
            {id: 'pilot', name: 'pilot'},
            {id: 'odyssey', name: 'odyssey'}
          ]}
        ]}
      ]};
  }

  ngOnInit() {
  }

}
