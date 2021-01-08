import { storiesOf } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { SearchBarModule } from '../search-bar.module';
import { SearchBarComponent } from './search-bar.component';

const metadata = moduleMetadata({
  imports: [ SearchBarModule ]
});

storiesOf('Search Bar', module)
  .addDecorator(metadata)
  .add('Search Bar', () => ({
    component: SearchBarComponent,
    props: {
        placeholder: 'Search...'
    },
}));
