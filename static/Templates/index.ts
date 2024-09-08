import { SkillsList } from "../Skills";
import { TemplateType } from "./types";

/**
 * List of templates
 */
export const TemplatesList: TemplateType[] = [
  {
    name: "رزومه",
    imagePath: "images/portfolio.jpg",
    tools: [
      SkillsList.NextJS,
      SkillsList.TypeScript,
      SkillsList.Tailwind,
      SkillsList.Git,
    ],
    links: [
      {
        name: "گیت‌هاب",
        icon: "icons/github.svg",
        href: "https://github.com/reza-kelidari/reza-kelidari",
      },
    ],
    desc: "رزومه ی شخصی من، شامل مشخصات من، نمونه کار های من، مهارت های من، روش های ارتباط با من، و... .",
  },
  {
    name: "وودین",
    imagePath: "images/woodin.jpg",
    tools: [
      SkillsList.NextJS,
      SkillsList.TypeScript,
      SkillsList.Tailwind,
      SkillsList.Git,
    ],
    links: [
      {
        name: "دمو",
        icon: "icons/arrow-up-left.svg",
        href: "https://reza-kelidari.github.io/woodin",
      },
      {
        name: "گیت‌هاب",
        icon: "icons/github.svg",
        href: "https://github.com/reza-kelidari/woodin",
      },
    ],
    desc: "یه فروشگاه آنلاین دکوراسیون خونگی، اداری و ویلا",
  },
  {
    name: "آشیونه",
    imagePath: "images/ashiooneh.jpg",
    tools: [
      SkillsList.ReactJS,
      SkillsList.TypeScript,
      SkillsList.Sass,
      SkillsList.Git,
    ],
    links: [
      {
        name: "دمو",
        icon: "icons/arrow-up-left.svg",
        href: "https://ashiooneh-git-main-reza-kelidaris-projects-e284196b.vercel.app/",
      },
      {
        name: "گیت‌هاب",
        icon: "icons/github.svg",
        href: "https://github.com/reza-kelidari/ashiooneh",
      },
    ],
    desc: "پلتفرم آنلاین مشاوره املاک، شامل فرم جستجوی خونه بر اساس محله، قیمت و ... (صرفاٌ رابط کاربری).",
  },
  {
    name: "دکترِ تو",
    imagePath: "images/doctore-to.jpg",
    tools: [
      SkillsList.ReactJS,
      SkillsList.TypeScript,
      SkillsList.Sass,
      SkillsList.Git,
    ],
    links: [
      {
        name: "دمو",
        icon: "icons/arrow-up-left.svg",
        href: "https://doctore-to-git-main-reza-kelidaris-projects-e284196b.vercel.app/",
      },
      {
        name: "گیت‌هاب",
        icon: "icons/github.svg",
        href: "https://github.com/reza-kelidari/doctore-to",
      },
    ],
    desc: "پلتفرم آنلاین رزرو نوبت پزشک، بر حسب تخصص و موقعیت مکانی.",
  },
  {
    name: "مووی لند",
    imagePath: "images/movie-land.jpg",
    tools: [
      SkillsList.ReactJS,
      SkillsList.TypeScript,
      SkillsList.Sass,
      SkillsList.API,
      SkillsList.Git,
    ],
    links: [
      {
        name: "دمو",
        icon: "icons/arrow-up-left.svg",
        href: "https://movie-land-git-master-reza-kelidaris-projects-e284196b.vercel.app/",
      },
      {
        name: "گیت‌هاب",
        icon: "icons/github.svg",
        href: "https://github.com/reza-kelidari/movie-land",
      },
    ],
    desc: "دیتابیس آنلاین فیلم و سریال، با استفاده از سرویس themoviedb.org.",
  },
  {
    name: "فرم لاگین",
    imagePath: "images/form-validator.jpg",
    tools: [
      SkillsList.ReactJS,
      SkillsList.TypeScript,
      SkillsList.Sass,
      SkillsList.Firebase,
      SkillsList.Git,
    ],
    links: [
      {
        name: "دمو",
        icon: "icons/arrow-up-left.svg",
        href: "https://form-validator-git-master-reza-kelidaris-projects-e284196b.vercel.app/",
      },
      {
        name: "گیت‌هاب",
        icon: "icons/github.svg",
        href: "https://github.com/reza-kelidari/form-validator",
      },
    ],
    desc: "فرم ثبت نام چند مرحله ای و ورود، با Firebasae، با قابلیت تایید آدرس ایمیل.",
  },
];
