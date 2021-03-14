import { Inject, Injectable } from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';
import { Pokemon } from '../models/pokemon.model';

const TRAINERNAME_KEY: string = "trainer-name";
const TRAINERPOKEMONS_KEY: string = "trainer-pokemons";


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public storeTrainerName(trainerName: string): void {
      this.storage.set(TRAINERNAME_KEY, trainerName);
  }

  public isTrainerLoggedIn(): boolean {
    if (this.storage.get(TRAINERNAME_KEY)) {
      return true;
    }
    return false;
  }
}
