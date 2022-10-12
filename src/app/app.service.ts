import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  public async fetchFromNekoSama() {
    return fetch('https://www.neko-sama.fr/animes-search-vostfr.json').then(
      async (res) => {
        return { status: res.status, body: await res.text() };
      }
    );
  }

  public getCordova() {
    return cordova;
  }
}
