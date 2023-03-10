import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: ClipyClipboardFields[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<ClipyClipboardFields[]>(baseUrl + 'clipy').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}

interface ClipyClipboardFields {
  clipboardData: string[];
}
