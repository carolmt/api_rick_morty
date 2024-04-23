import { CommonModule } from '@angular/common';
import { Component, Input, OnInit} from '@angular/core';
import { RequestService } from '../../Services/requestService/request.service';
import { Result } from '../../Interfaces/personaje.interface';
import { PersonajesComponent } from '../personajes/personajes.component';

@Component({
  selector: 'app-info-personaje',
  standalone: true,
  imports: [CommonModule, PersonajesComponent],
  templateUrl: './info-personaje.component.html',
  styleUrl: './info-personaje.component.css'
})
export class InfoPersonajeComponent implements OnInit{
  
  personajeInfo: Result[] = [];

  constructor(private requestService: RequestService) {  }


  ngOnInit(): void {
     
  }

}

