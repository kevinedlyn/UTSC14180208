import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { note } from '../note.service';
import { VarGlobalService } from '../var-global.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  judulTemp : string;
  isiTemp : string;
  nilaiTemp : string;
  fotoTemp : string;
  tanggalTemp : Date;
  isiData : Observable<note[]>;
  isiDataCol : AngularFirestoreCollection<note>;

  constructor(public noteGlob : VarGlobalService,
    public afs : AngularFirestore,
    public router : Router) {
    this.judulTemp = noteGlob.judulNote;
    this.isiTemp = noteGlob.isiNote;
    this.nilaiTemp = noteGlob.nilaiNote;
    this.tanggalTemp = noteGlob.tannggalNote;
    this.fotoTemp = noteGlob.foto;

    this.isiDataCol = afs.collection('myNote');
    this.isiData = this.isiDataCol.valueChanges();
  }

  editNote()
  {
   this.isiDataCol.doc(this.judulTemp).set({
      judul : this.judulTemp,
      isi : this.isiTemp,
      nilai : this.nilaiTemp,
      foto : this.fotoTemp,
      tanggal : this.tanggalTemp
    });
    this.router.navigate(['tab2']);    
  }

  deleteNote()
  {
    this.isiDataCol.doc(this.judulTemp).delete();
    this.router.navigate(['tab2']); 
  }
}
