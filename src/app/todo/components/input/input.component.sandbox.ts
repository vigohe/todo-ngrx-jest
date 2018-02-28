import { sandboxOf } from 'angular-playground';
import { InputComponent } from './input.component';

export default sandboxOf(InputComponent)
  .add('with simple text', {
    template: `<app-input></app-input>`
  });
