import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnnonceService } from 'src/app/services/annonce.service';
import { FormsModule } from '@angular/forms';
//decotrateur
@Component({
  selector: 'app-ajouterannonce',
  templateUrl: './ajouterannonce.component.html',
  styleUrls: ['./ajouterannonce.component.css']
})
export class AjouterannonceComponent {
  nouvelleAnnonce = {
    id: 0,
    model: '',
    matricule: '',
    kilometrage: 0,
    carburant: '',
    photo: ''
  };//instance de la base de données , initialisation de table ,obligatoire avant d'accèder au table de base de données
  selectedFile: File | null = null;

  constructor(private router: Router, private annonceService: AnnonceService) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  ajouterAnnonce(): void {
    const annonceData = {
      model: this.nouvelleAnnonce.model,
      matricule: this.nouvelleAnnonce.matricule,
      kilometrage: this.nouvelleAnnonce.kilometrage,
      carburant: this.nouvelleAnnonce.carburant,
      photo: this.selectedFile ? this.selectedFile.name : ''
    };
  
    console.log(annonceData);
  
    this.annonceService.createAnnonce(annonceData).subscribe(() => {
      this.router.navigate(['/accueil']);
    }, error => {
      console.error('Error creating annonce:', error);
    });
  }
}

