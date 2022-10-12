import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'cordova-electron-angular';

  public platform: string = 'unknown';
  public dataDirectory: string = 'unknown';
  public nekoSamaRequestStatus: string | number = 'pending...';

  public constructor(public appService: AppService) {}

  public ngOnInit(): void {
    this.appService
      .fetchFromNekoSama()
      .then((res) => (this.nekoSamaRequestStatus = res.status))
      .catch((error) => (this.nekoSamaRequestStatus = `error: ${error}`));

    this.dataDirectory = this.appService.getCordova().file.dataDirectory;

    this.platform = this.appService.getCordova().platformId;
  }
}
