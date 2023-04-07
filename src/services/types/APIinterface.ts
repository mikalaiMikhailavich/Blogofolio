export interface IPostAPI {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num?: number;
  title: string;
  author?: number;
  likes: number;
  dislikes: number;
}
