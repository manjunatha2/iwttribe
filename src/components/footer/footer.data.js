import facebook from "assets/images/icons/facebook.png";
import twitter from "assets/images/icons/twitter.png";
import github from "assets/images/icons/github.png";
import dribbble from "assets/images/icons/dribbble.png";

export const menuItems = [
  {
    id: 2,
    title: "About Us",
    items: [
      // {
      //   path: "#!",
      //   label: "Support Center",
      // },

      {
        path: "https://investor.investwithtribe.com/about",
        label: "About Us",
      },
      {
        path: "https://expert.investwithtribe.com/refundAndCancellation",
        label: "User Guidelines",
      },
    ],
  },
  {
    id: 3,
    title: "Our Information",
    items: [
      // {
      //   path: "#!",
      //   label: "Return Policy ",
      //   type: 'external'
      // },
      {
        path: "https://expert.investwithtribe.com/privacy",
        label: "Privacy Policy",
        type: "external",
      },
      {
        path: "https://expert.investwithtribe.com/terms-and-conditions",
        label: "Terms & Conditions",
        type: "external",
      },
    ],
  },
  // {
  //   id: 4,
  //   title: 'My Account',
  //   items: [
  //     {
  //       path: '#!',
  //       label: 'Press inquiries',
  //     },
  //     {
  //       path: '#!',
  //       label: 'Social media ',
  //     },
  //     {
  //       path: '#!',
  //       label: 'directories',
  //     },
  //     {
  //       path: '#!',
  //       label: 'Images & B-roll',
  //     },
  //     {
  //       path: '#!',
  //       label: 'Permissions',
  //     },
  //   ],
  // },
  {
    id: 5,
    title: "Connect",
    items: [
      {
        path: "#!",
        icon: facebook,
        label: "Facebook",
      },
      {
        path: "https://twitter.com/investwithtribe",
        icon: twitter,
        label: "Twitter",
      },
    ],
  },
];

export const footerNav = [
  {
    path: "#!",
    label: "Home",
  },
  {
    path: "#!",
    label: "Advertise",
  },
  {
    path: "#!",
    label: "Supports",
  },
  {
    path: "#!",
    label: "Marketing",
  },
  {
    path: "#!",
    label: "FAQ",
  },
];
