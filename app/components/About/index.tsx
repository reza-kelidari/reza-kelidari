import Card from "@/components/Card";

/**
 * Renders About section for Home page, contains
 * some details about me
 *
 * @returns {JSX.Element}
 */
export default function About(): JSX.Element {
  return (
    <Card title={["درباره‌ی", "من"]}>
      <div className="flex flex-col space-y-4 text-lg opacity-75">
        <p className="text-justify">
          من 21 سالمه و تهران، شهریار زندگی می‌کنم (نگران نباش، با دوری راه
          مشکلی ندارم 😅)؛ من از این که چالش‌های بزرگ رو به راه‌حل های کوچیک و
          ساده تبدیل کنم لذت می‌برم.
        </p>

        <p className="text-justify">
          در حال حاضر سابقه‌ی کاری ندارم ولی در ادامه چند تا نمونه‌کار گذاشتم،
          امیدوارم برات جالب باشه. سعی کردم بیشتر چیزهایی که بلدم رو حین
          توسعه‌شون استفاده کنم، هر چند روزبه‌روز چیزهای بیشتری یاد می‌گیرم.
        </p>

        <p className="text-justify">
          من به دنبال یه فرصت برای همکاری با تیم های خفنی مثل شما هستم و
          آماده‌ام که مهارت‌هام رو توسعه بدم. من در حال حاضر جایی کار نمیکنم و
          از همین الان آمادگی کار کردن توی تیم شما رو دارم، پس اگه از نمونه‌کار
          هام خوشت اومده، باهام تماس بگیر 👋.
        </p>
      </div>
    </Card>
  );
}
