import { Injectable } from '@angular/core';

declare var require: any;
const axios = require('axios').default;

@Injectable({
  providedIn: 'root',
})
export class DownloadService {
  constructor() {}

  downloadResume(): Promise<string> {
    let url: string = '';

    return new Promise((resolve) => {
      axios
        .get(
          'http://tmjonkerbackend-env.eba-3xyndxs6.us-east-1.elasticbeanstalk.com/download'
        )
        .then(function (response: any) {
          console.log(response.data);
          url = response.data;
          resolve(url);
        })
        .catch(function (error: any) {
          console.log(error);
          resolve(error);
        });
    });
  }
}
