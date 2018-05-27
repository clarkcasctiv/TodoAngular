export class Todo {
  id: number;
  title = '';
  complete = false;
  category: number;

  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}
