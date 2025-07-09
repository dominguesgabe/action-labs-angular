import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input-component.html',
  styleUrl: './input-component.scss',
  imports: [CommonModule, ReactiveFormsModule],
})
export class InputComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = ' ';
  @Input() control!: FormControl<string | null>;
  @Input() id: string = '';
}
