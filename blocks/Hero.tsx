import styles from "./Hero.module.css";
import Section from "../components/Section";
import cx from "../utils/cx";
import SubscribeInput from "../components/SubscribeInput";

export default function Hero(p: {
  id?: string;
  className?: string;
  title: string;
  subtitle: string[];
  foot: string;
  illustration: string;
  subscribePlaceholder?: string;
  subscribeAction?: string;
}) {
  const className = cx(styles.container, p.className);

  return (
    <Section id={p.id} className={className}>
      <div className={styles.header}>
        <h1 className={styles.title}>{p.title}</h1>
        {p.subtitle.map((s, i) => (
          <p key={i} className={styles.subtitle}>
            {s}
          </p>
        ))}
        {p.subscribeAction && (
          <SubscribeInput
            className={styles.subscribe}
            placeholder={p.subscribePlaceholder}
            action={p.subscribeAction}
          />
        )}
      </div>
      <p className={styles.subtitle}>{p.foot}</p>
      <div className={styles.illustration}>
        <img
          className={styles["illustration-img"]}
          src={p.illustration}
          alt="Better Stack"
        />
      </div>
    </Section>
  );
}
