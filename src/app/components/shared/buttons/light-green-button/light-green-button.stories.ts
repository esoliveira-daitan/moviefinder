import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { LightGreenButtonComponent } from './light-green-button.component';

storiesOf('Buttons', module).add('Light Green', () => ({
  component: LightGreenButtonComponent,
  props: {
      text: 'Button Label',
      click:  action('This was clicked')
  },
}));
