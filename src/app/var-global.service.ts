import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VarGlobalService {

  public judulNote : string;
  public isiNote : string;
  public nilaiNote : string;
  public tannggalNote : Date;
  public foto : string;
  constructor() { }


}
