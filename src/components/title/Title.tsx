import style from "./Title.module.scss";
interface ITitleType {
  text: string;
}

export const Title = (props: ITitleType) => {
  const { text } = props;

  return <div className={style.title}> {text}</div>;
};
