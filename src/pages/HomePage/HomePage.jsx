import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Contact book for close people </h1>
      <p className={css.text}>
        which of your friends will say [palyanytsia] correctly?
      </p>
    </div>
  );
}
