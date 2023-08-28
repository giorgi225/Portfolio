import { RouteName } from "@/imports";

type Menu = {
  text: string;
  icon: string;
  to?: string; // for localRouting
  link?: string; // for Outside links
  openModal?: string;
  secondIcon?: string;
  copyFun?: string;
};

const PagesMenu: Menu[] = [
  {
    to: RouteName.HOME,
    text: "home",
    icon: "clarity:home-line",
  },
  {
    to: RouteName.ABOUT,
    text: "about",
    icon: "solar:user-broken",
  },
  {
    to: RouteName.PROJECTS,
    text: "projects",
    icon: "solar:code-broken",
  },
  {
    to: RouteName.SERVICES,
    text: "services",
    icon: "carbon:application-web",
  },
  {
    to: RouteName.RESUME,
    text: "resume",
    icon: "fluent:hat-graduation-20-regular",
  },
];

const ContactMenu: Menu[] = [
  {
    text: "contact_form",
    icon: "fluent:chat-20-regular",
    openModal: "openContactModal",
  },
  {
    text: "gigi.shalamberidze2022@gmail.com",
    icon: "mdi-light:email-open",
    secondIcon: "solar:copy-outline",
    copyFun: "copyEmail",
  },
  {
    text: "+995 574 17 51 88",
    icon: "solar:phone-outline",
    secondIcon: "solar:copy-outline",
    copyFun: "copyPhone",
  },
];

const SocialPlatformMenu: Menu[] = [
  {
    text: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100092546885517",
    icon: "brandico:facebook-rect",
    secondIcon: "ion:open-outline",
  },
  {
    text: "Github",
    link: "https://github.com/giorgi225",
    icon: "skill-icons:github-dark",
    secondIcon: "ion:open-outline",
  },
  {
    text: "Linkedin",
    link: "https://www.linkedin.com/in/gigi-shalamberidze-b47a27260/",
    icon: "fa:linkedin-square",
    secondIcon: "ion:open-outline",
  },
];


export { PagesMenu, ContactMenu, SocialPlatformMenu};
export default Menu;
