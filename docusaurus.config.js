// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: '❮ ZI ❯',
	tagline: 'A Swiss Army Knife for Zsh - Unix shell',
	url: 'https://z-shell.pages.dev/',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'throw',
	favicon: 'img/favicon.svg',
	organizationName: 'z-shell',
	projectName: 'z-shell.pages.dev',

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/z-shell/z-shell.pages.dev/tree/main',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
				blog: false,
			}),
		],
	],
	plugins: ['@docusaurus/theme-live-codeblock'],
	scripts: [
		'dist/typesense.min.js',
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
			async: true,
		},
	],
	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			hideableSidebar: false,
			colorMode: {
				defaultMode: 'dark',
				disableSwitch: false,
				respectPrefersColorScheme: true,
				switchConfig: {
					darkIcon: '🌙',
					lightIcon: '\u2600',
					darkIconStyle: {
						marginLeft: '2px',
					},
					lightIconStyle: {
						marginLeft: '1px',
					},
				},
			},
			algolia: {
				appId: 'R65Z94OME2',
				apiKey: 'cfea6a2beca30a997104d74111f4e13f',
				indexName: 'dev_z-shell',
			},
			navbar: {
				title: '❮ ZI ❯',
				logo: {
					alt: 'ZI Logo',
					src: 'img/logo.svg',
				},
				items: [
					{
						type: 'doc',
						docId: 'intro',
						position: 'left',
						label: 'Wiki',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Wiki',
								to: '/docs/intro',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Github Discussions',
								href: 'https://github.com/z-shell/zi/discussions',
							},
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'GitHub',
								href: 'https://github.com/z-shell',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Z-Shell ZI, Community.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			liveCodeBlock: {
				/**
				 * The position of the live playground, above or under the editor
				 * Possible values: "top" | "bottom"
				 */
				playgroundPosition: 'bottom',
			},
		}),
};

module.exports = config;
