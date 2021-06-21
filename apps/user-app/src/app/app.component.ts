import { Component } from '@angular/core';
@Component({
  selector: 'syncspace-crypto-analysis-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor() {
    // this.createCacheFolder();
  }

  // For mobile platforms
  // async createCacheFolder(): Promise<void> {
  //   await Filesystem.mkdir({
  //     directory: FilesystemDirectory.Cache,
  //     path: 'CACHED-IMG',
  //   })
  // }
}
