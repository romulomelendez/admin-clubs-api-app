import { Injectable } from '@angular/core'
import { FormType } from '../../components/login-tab/login-tab.types'

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {
  isValid = (form: FormType): boolean => form.valid
}
