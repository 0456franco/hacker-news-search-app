import { AbstractControl, FormControl } from '@angular/forms'

// reg expression for 
const regEx = /^[a-zA-Z*|0-9*|\s*]{0,20}/g

// Custom validator to check that search query is valid.

export function ValidateSearchQuery(searchControl: AbstractControl | null) {

    return (searchControl: AbstractControl | null) => {

        // return if another validator has already found an error on the name
        if (searchControl?.errors && !searchControl?.errors.invalidInput) { return null }

        // set error on matchingControl if validation fails
        if (!regEx.test(searchControl?.value))
            searchControl?.setErrors({ invalidInput : true })
        else
            searchControl?.setErrors(null)
        
        return null
        
    }
    
}
