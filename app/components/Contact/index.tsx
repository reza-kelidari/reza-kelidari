import Card from "@/components/Card";
import Image from "next/image";
import { ContactInfoType } from "./types";

/**
 * Renders a list of contact me details
 *
 * @returns {JSX.Element}
 */
export default function Contact(): JSX.Element {
  const contactInfos: ContactInfoType[] = [
    {
      name: "ایمیل",
      value: "re.kelidari@gmail.com",
      icon: "icons/email.svg",
      link: "mailto:re.kelidari@gmail.com",
    },
    {
      name: "تماس",
      value: "0993 899 9748",
      icon: "icons/phone.svg",
      link: "tel:09938999748",
    },
    {
      name: "گیت‌هاب",
      value: "@reza-kelidari",
      icon: "icons/github.svg",
      link: "https://github.com/reza-kelidari/",
    },
    {
      name: "لینکداین",
      value: "@reza-kelidari",
      icon: "icons/linkedin.svg",
      link: "https://www.linkedin.com/in/reza-kelidari/",
    },
  ];

  return (
    <Card title={["ارتباط", "با من"]}>
      <div className="flex flex-col gap-8 w-full">
        {contactInfos.map((way, index) => (
          <a
            key={index}
            href={way.link}
            target="_blank"
            className="flex flex-col group gap-2"
          >
            <div className="flex items-center gap-2 group-hover:gap-4 transition-all opacity-75">
              <Image
                src={way.icon}
                alt={way.name}
                height={20}
                width={20}
                className="dark:invert"
              />
              <h4>{way.name}</h4>
            </div>
            <span className="text-xl" dir="ltr">
              {way.value}
            </span>
          </a>
        ))}
      </div>
    </Card>
  );
}
