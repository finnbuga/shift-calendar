export interface Event {
  id: string;
  title: string;
  date: Date; // @TODO should it be a string for easier equality check & avoding rerenders?
  duration: number; // assuming it's in hours
}
