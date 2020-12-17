import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { HttpClient } from '@angular/common/http';

const apiRequest = "http://localhost:3000/api/file/"
const DownloadURL = 'http://localhost:3000/public/uploads';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Upload a File';
  keywords: String = "";

  constructor(private http: HttpClient) { }

  public uploader: FileUploader = new FileUploader({ url: `${apiRequest}fileUpload`, itemAlias: 'photo' });

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('FileUpload:uploaded:', item, status, response);
      alert('File uploaded successfully');
    };
  }

  maskme(keywords, uploader) {
    console.log("File name uploaded", uploader.queue[0].some.name)
    var fileName = uploader.queue[0].some.name
    console.log("Entered input", keywords);
    this.http.get<any>(`${apiRequest}maskContent?keywords=${keywords}&fileName=${fileName}`, { headers: {} }).subscribe(() => {
      alert('Masked successfully');
    });
  }

  download(uploader) {
    console.log("File is downloading");
    var fileName = uploader.queue[0].some.name;
    this.http.get(`${DownloadURL}/${fileName}`, { responseType: 'blob' }).subscribe(res => {
      let blob = new Blob([res], { type: 'text/plain' });
      let doc = document.createElement('a');
      doc.download = `masked_${fileName}`;
      doc.href = (window.webkitURL || window.URL).createObjectURL(blob);
      doc.dataset.downloadurl = ['text/plain', doc.download, doc.href].join(':');
      doc.click();
    });
  }
}
