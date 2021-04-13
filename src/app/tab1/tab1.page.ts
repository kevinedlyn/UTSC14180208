import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { FotoService } from '../foto.service';
import { note } from '../note.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  urlImageStorage  : string[] = [];
  isiData : Observable<note[]>;
  isiDataCol : AngularFirestoreCollection<note>;
  judulTemp : string;
  isiTemp : string;
  nilaiTemp : string;
  fotoTemp : string;
  tanggalTemp : Date;


  constructor(public fotoservice : FotoService,
    private afStorage : AngularFireStorage,
    public fotoService : FotoService,
    afs : AngularFirestore) {
      this.isiDataCol = afs.collection('myNote');
      this.isiData = this.isiDataCol.valueChanges();
    }

  tambahfoto(){
    this.fotoservice.tambahfoto();
  }

  uploadFoto(){
    this.urlImageStorage = [];
    for (var index in this.fotoService.dataFoto){
      const imgFilepath = `imgStorage/${this.fotoService.dataFoto[index].filePath}`;

      this.afStorage.upload(imgFilepath, this.fotoService.dataFoto[index].dataImage).then(() => {
        
      });
      this.fotoTemp = imgFilepath;
    }

    this.isiDataCol.doc(this.judulTemp).set({
      judul : this.judulTemp,
      isi : this.isiTemp,
      nilai : this.nilaiTemp,
      foto : this.fotoTemp,
      tanggal : this.tanggalTemp
    });

  }

}
