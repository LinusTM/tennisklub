import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment'

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }
    // Form for registration
    addUser = this.formBuilder.group({
        name: [``, Validators.required],
        email: [``, [Validators.required, Validators.email]],
        phone: [``, [Validators.required, Validators.pattern(/^[0-9]{8}$/)]],
        address: [``, Validators.required],
        username: [``, Validators.required],
        password: [``, [Validators.required, Validators.minLength(8), Validators.maxLength(512)]],
        card: [``, [Validators.required, Validators.pattern(/^[0-9]{8}$/)]],
    })

	restApi = environment.restApi;
    
    ngOnInit(): void {}

    // On submit send form group to backend
    onSubmit(): void {
		this.http
			.post(this.restApi + '', this.addUser.value)
			.subscribe({
        		next: (response) => console.log(response),
        		error: (error) => console.log(error),
		});
	}
}
