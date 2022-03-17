import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'texttransform'
})
export class TexttransformPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log(value);
    console.log(args);
    if(args[0]=='Uppercase'){
      value=value.toUpperCase();
    }else if(args[0]=='Lowercase'){
      value=value.toLowerCase();
    }else if(args[0]=='Titlecase'){
      let str=value.toLowerCase().split(' ');
      for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
      }
        value=str.join(' ');
    }else{
      value=value;
    }
    return value;
  }

}
