import { Component } from '@angular/core';

@Component({
  selector: 'app-documentation-tools-index',
  templateUrl: './documentation-tools-index.component.html',
  styleUrls: ['./documentation-tools-index.component.css']
})
export class DocumentationToolsIndexComponent {
  jsonData = [
    {
      "id": 1,
      "code": "RMD",
      "name": "Technical RMD",
      "createdAt": "2023-06-02T01:12:08.000Z",
      "updatedAt": "2023-06-02T01:12:08.000Z"
    },
    {
      "id": 2,
      "code": "PMD",
      "name": "Technical PMD",
      "createdAt": "2023-06-02T01:12:08.000Z",
      "updatedAt": "2023-06-02T01:12:08.000Z"
    },
    {
      "id": 3,
      "code": "PSD",
      "name": "Technical PSD",
      "createdAt": "2023-06-02T01:12:08.000Z",
      "updatedAt": "2023-06-02T01:12:08.000Z"
    },
    {
      "id": 4,
      "code": "PJD",
      "name": "Technical PJD",
      "createdAt": "2023-06-02T01:12:08.000Z",
      "updatedAt": "2023-06-02T01:12:08.000Z"
    },
    {
      "id": 5,
      "code": "R&D",
      "name": "R&D",
      "createdAt": "2023-06-02T01:12:08.000Z",
      "updatedAt": "2023-06-02T01:12:08.000Z"
    }
  ];
}
