import styles from "./styles.module.scss";
import Card from "@/components/Card";

export default function About() {
  return (
    <section className={styles.about} id="about-me">
      <Card title="درباره‌ی من">
        <div className={styles.descList}>
          <p className={styles.desc}>
            من 21 سالمه و تهران، شهریار زندگی می‌کنم (نگران نباش، با دوری راه
            مشکلی ندارم 😅)؛ من از این که چالش‌های بزرگ رو به راه‌حل های کوچیک و
            ساده تبدیل کنم لذت می‌برم.
          </p>

          <p className={styles.desc}>
            در حال حاضر سابقه‌ی کاری ندارم ولی در ادامه چند تا نمونه‌کار گذاشتم،
            امیدوارم برات جالب باشه. سعی کردم بیشتر چیزهایی که بلدم رو حین
            توسعه‌شون استفاده کنم، هر چند روزبه‌روز چیزهای بیشتری یاد می‌گیرم.
          </p>

          <p className={styles.desc}>
            من به دنبال یه فرصت برای همکاری با تیم های خفنی مثل شما هستم و
            آماده‌ام که مهارت‌هام رو توسعه بدم. اگه از نمونه‌کار هام خوشت اومده،
            باهام تماس بگیر 👋.
          </p>
        </div>
      </Card>
    </section>
  );
}
