import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {Comp1Component} from './comp1/comp1.component';

@NgModule ({

declarations: [Comp1Component], //Components do Móódulo...
exports: [Comp1Component], // Components visííveis a outros móódulos
imports: [CommonModule], // Quais móódulos serãão importantes aqui...

})

//Este éé um móódulo de Funcionalidade
export class Func1Module {}