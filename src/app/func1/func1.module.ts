import {Ngmodule} from '@angular/core';

@Ngmodule ({

declarations: [], //Components do Móódulo...
exports: [], // Components visííveis a outros móódulos
imports: [CommonModule], // Quais móódulos serãão importantes aqui...

})

//Este éé um móódulo de Funcionalidade
export class Func1Module {}