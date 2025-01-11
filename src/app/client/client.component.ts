import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../service/MsClient/ms-client.service';
import { Client } from './model/client.model';


@Component({
	selector: 'app-clients', // Modifié de products à clients
	templateUrl: './client.component.html', // Modifié de list-product à client
	styleUrls: ['./client.component.css'], 
  standalone:false
})
export class ClientComponent implements OnInit {

	listClients		: 	any 		= [];
	addClientForm		!: 	FormGroup;
	updateClientForm	!: 	FormGroup;
	client				:	Client		= new Client();
	idClient			?:	number;
	//image				:	String		= "../../assets/images/Clients_images/image_template.png"; // Adaptez le chemin de l'image si nécessaire
	msg					: 	any 		= '';

	constructor(
		private clientService	:	ClientService, // Utilisez le service client
		private formBuilder	: 	FormBuilder,
		private router		: 	Router
		) { }

	ngOnInit() {
		this.loadAllClients(); // Charge tous les clients au démarrage
		this.initAddForm(); // Initialise le formulaire d'ajout
  	}

	public loadAllClients() {
		this.clientService.getClients() // Appel à getAllClients() du service client
		.subscribe({
			next: (data: Client[]) => {
				this.listClients = data;
			},
			error: (error) => {
				console.log(error);
			}
		});
	}

	public initAddForm() {
		this.addClientForm = this.formBuilder.group({
			name	 :	['', Validators.required], // Nom du client
			email	 :	['', [Validators.required, Validators.email]], // Email du client
			address  :	['', Validators.required], // Adresse du client
			telephone : 	['', Validators.required], // Téléphone du client
			image	 :	['']
		});
	}
	
	public initUpdateForm(client: Client) {
		this.updateClientForm = this.formBuilder.group({
			name		:	[client.getNom()], // Nom du client
			email		: 	[client.getEmail()], // Email du client
			address		: 	[client.getAdresse()], // Adresse du client
			telephone	: 	[client.getTelephone()], // Téléphone du client
			image		:	['']
		});
	}

	public onSubmitAdd() {
		let name 		=	this.addClientForm.get('name')?.value;
		let email		=	this.addClientForm.get('email')?.value;
		let address		=	this.addClientForm.get('address')?.value;
		let telephone	=	this.addClientForm.get('telephone')?.value;
		let client = new Client(undefined,name, email, address, telephone); // Créez un client avec les données du formulaire
		
		this.clientService.createClient(client) // Utilisez le service pour enregistrer le client
			.subscribe({
				next: (data: Client) => {
					console.log("Client ajouté avec succès");
				},
				error: (error) => {
					console.log(error);
				}
			});
		window.location.reload(); // Recharge la page après ajout
	}

	public onSubmitUpdate() {
		let name		= this.updateClientForm.get('name')?.value;
		let email		=	this.updateClientForm.get('email')?.value;
		let address		=	this.updateClientForm.get('address')?.value;
		let telephone	=	this.updateClientForm.get('telephone')?.value;
		let client = new Client(undefined,name, email, address, telephone); // Créez un client avec les nouvelles données

		if (this.idClient) {
			this.clientService.updateClient(this.idClient, client) // Utilisez le service pour mettre à jour le client
				.subscribe({
					next: (data: Client) => {
						console.log("Client mis à jour avec succès");
						this.ngOnInit(); // Recharge la liste des clients après mise à jour
					},
					error: (error) => {
						console.log(error);
					}
				});
		}
	}

	public onUpdateClient(id: number) {
    this.idClient = id;
    this.clientService.getClientById(id) // Récupère le client par ID
      .subscribe({
        next: (data: Client) => {
          // data est directement un objet Client
          this.client.setNom(data.nom);
          this.client.setEmail(data.email);
          this.client.setAdresse(data.adresse);
          this.client.setTelephone(data.telephone);
  
          this.initUpdateForm(this.client);
        },
        error: (error) => {
          console.log(error);
        }
      });
  }
  

	public onDeleteClient(id: number) {
		if(window.confirm("Êtes-vous sûr de vouloir supprimer ce client ?")) {
			this.clientService.deleteClient(id) // Utilisez le service pour supprimer le client
				.subscribe(data => console.log("Client supprimé avec succès"));
			window.location.reload(); // Recharge la page après suppression
		}
	}

	

}
