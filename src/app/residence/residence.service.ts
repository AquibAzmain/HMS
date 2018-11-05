import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Server} from '../../utils/Server'
import { Block } from '../../models/Block';
import { Room } from '../../models/Room';
import { SystemJsNgModuleLoader } from '@angular/core/src/linker/system_js_ng_module_factory_loader';

@Injectable()
export class ResidenceService {
  token = localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+this.token})
  };

  constructor(private http: HttpClient) { }

  getBlockList() : Observable<Block[]> {
    return this.http.get<Block[]>(Server.API_ENDPOINT + 'block');
  }

  addBlock(block:Block) : Observable<Block>{
    return this.http.post<Block>(Server.API_ENDPOINT +'block', JSON.stringify(block), this.httpOptions)
  }

  updateBlock(block:Block) {
    console.log(JSON.stringify(block));
    return this.http.put(Server.API_ENDPOINT +'block', JSON.stringify(block),this.httpOptions)
  }

  deleteBlock(block:Block) {
    return this.http.delete(Server.API_ENDPOINT +'block/'+block.id,this.httpOptions)
  }

  getRoomList() : Observable<Room[]> {
    return this.http.get<Room[]>(Server.API_ENDPOINT + 'room');
  }

  addRoom(room: Room) : Observable<Room>{
    return this.http.post<Room>(Server.API_ENDPOINT +'room', JSON.stringify(room), this.httpOptions)
  }

  updateRoom(room:Room) {
    console.log(JSON.stringify(room));
    return this.http.put(Server.API_ENDPOINT +'room', JSON.stringify(room),this.httpOptions)
  }

  deleteRoom(room:Room) {
    return this.http.delete(Server.API_ENDPOINT +'room/'+room.roomNumber,this.httpOptions)
  }

}