import { Injectable } from '@angular/core'
import { FormValidType } from '../../components/login-tab/login-tab.types'

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {
  isValid = (form: FormValidType): boolean => form.valid
}
