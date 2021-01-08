import { storiesOf } from '@storybook/angular';
import { TableComponent } from './table.component';

storiesOf('Table', module).add('Main table', () => ({
  component: TableComponent,
  props: {
    columns: ['Id', 'Name', 'Birthday'],
    data: [
        ['1', 'Eduarda Santos Oliveira', '05-08-1998'],
        ['2', 'Gabriel Biazin Tangerina', '05-08-1995']
    ]
  },
}));
