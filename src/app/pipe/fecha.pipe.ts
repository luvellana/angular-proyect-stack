import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    const aux =value.split('-');
    if(aux[0] === 'Agos'){
      var mes = '/08/';
    }

    return aux[2] + mes + aux[1][2]+ aux[1][3];
  }

}