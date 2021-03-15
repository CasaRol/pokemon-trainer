import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.css']
})
export class TrainerPageComponent implements OnInit {

  constructor(private readonly localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  get trainerName(): string {
    return this.localStorageService.getTrainerName();
  }

  get trainerPokemons(): Pokemon[] {
    return this.localStorageService.getSelectedPokemons();
  }
}
