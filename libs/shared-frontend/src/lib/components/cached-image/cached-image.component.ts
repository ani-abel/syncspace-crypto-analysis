import { Component, Input } from '@angular/core';
import { 
  FilesystemDirectory, 
  FileWriteResult, 
  Plugins
} from '@capacitor/core';
const { Filesystem } = Plugins;

const CACHE_FOLDER = 'CACHED-IMG';

@Component({
  selector: 'syncspace-crypto-analysis-cached-image',
  template: `
    <img [src]="_src" 
      *ngIf="_src !== ''; else loading" 
      [ngClass]="[class]"
      [style.width]="width" 
      [style.height]="height" />
    <ng-template #loading>
      <ion-skeleton-text animated></ion-skeleton-text>
    </ng-template>
  `,
  styleUrls: ['./cached-image.component.scss']
})
export class CachedImageComponent {
  @Input() spinner = false;
  @Input() width = '100%';
  @Input() height = '100%';
  @Input() class;
  _src = '';

  @Input()
  set src(imageUrl: string) {
    const imageName: string = imageUrl.split('/').pop();
    const fileType: string = imageName.split('.').pop();

    Filesystem.readFile({
      directory: FilesystemDirectory.Cache,
      path: `${CACHE_FOLDER}/${imageName}`,
    }).then(({ data }) => {
      this._src = `data:image/${fileType};base64,${data}`;
    }).catch(async (ex) => {
      // Write the file
      await this.storeImage(imageUrl, imageName);
      Filesystem.readFile({
        directory: FilesystemDirectory.Cache,
        path: `${CACHE_FOLDER}/${imageName}`,
      }).then(({ data }) => {
        this._src = `data:image/${fileType};base64,${data}`;
      });
    });
  }

  private async storeImage(url: string, path: string)
  : Promise<FileWriteResult> {
    const response = url.startsWith('http') 
    ? await fetch(`https://http-cors-proxy.herokuapp.com/${url}`)
    : await fetch(url);
    const blob = await response.blob();
    const base64Data = await this.convertBlobToBase64(blob) as string;
    const savedFile = await Filesystem.writeFile({
      path: `${CACHE_FOLDER}/${path}`,
      data: base64Data,
      directory: FilesystemDirectory.Cache
    });
    return savedFile;
  }

  private convertBlobToBase64(blob: Blob)
  : Promise<string | ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const reader: FileReader = new FileReader;
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  }
}