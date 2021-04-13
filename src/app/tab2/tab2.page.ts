import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { note } from '../note.service';
import { VarGlobalService } from '../var-global.service';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  allNote : note[] = [];
  isiData : Observable<note[]>;
  isiDataCol : AngularFirestoreCollection<note>;
  myNoteTemp : note;
  

  constructor(
    public afs : AngularFirestore,
    public router: Router,
    public noteGlobal : VarGlobalService
  ) {
    this.isiDataCol = afs.collection('myNote');
    this.isiData = this.isiDataCol.valueChanges();
  } 
  
  editdelFoto(judul : string,isi : string,nilai : string,tanggal : Date, foto : string)
  {
    this.noteGlobal.judulNote = judul;
    this.noteGlobal.isiNote = isi;
    this.noteGlobal.nilaiNote = nilai;
    this.noteGlobal.tannggalNote = tanggal;
    this.noteGlobal.foto = foto;
    this.router.navigate(['tab3']);
  }
}
