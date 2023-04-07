import style from "./AccountInfo.module.scss";

interface IUser {
  name: string;
}

export const AccountInfo = (props: IUser) => {
  const { name } = props;

  const firstCapitalLetter = (word: string) => word[0].toUpperCase();

  const firstLetterName = firstCapitalLetter(name);

  return (
    <div className={style.accountInfo}>
      <div className={style.accountCapitals}>{firstLetterName}</div>
      <div className={style.accountName}>{name}</div>
    </div>
  );
};
