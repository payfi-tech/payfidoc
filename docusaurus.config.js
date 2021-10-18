// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Payfi",
  tagline: "Buy Now Pay Later",
  url: "https://documentation.payfi.ng",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://res.cloudinary.com/dflmq4zxb/image/upload/v1628068180/payfiNewLogo_awu6t8.png",
  organizationName: "payfi-tech", // Usually your GitHub org/user name.
  projectName: "payfidoc", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/main/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "PayFI",
        logo: {
          alt: "PayFI Logo",
          src: "img/payfi-logo.svg",
        },
        items: [
          {
            type: 'doc',
            docId: 'sdk',
            position: 'left',
            label: 'Get Started',
          },
          {
            href: "https://github.com/payfi-tech",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Get Started",
                to: "/docs/sdk",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Facebook",
                href: "https://facebook.com/mypayfi",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/mypayfi/?hl=en",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/mypayfi",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/payfi-tech/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Payfi, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
