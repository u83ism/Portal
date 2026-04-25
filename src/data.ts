import { icons } from './icons';
import { valueOf } from './types';

export type MyApp = {
	id: number;
	category: valueOf<typeof categoryVariation>; // Use the keys of categories as the type for category
	name: string;
	url: URL;
	explanation: string;
}

export const categoryVariation = {
	various: "🌌よろず",
	game: "🎮ゲーム",
	proWrestling: "🤼プロレス",
	battleRoyale: "🔪バトルロワイアル",
	sns: "🗣SNS",
	music: "🎵音楽",
	movie: "🎥映画",
	programming: "👨‍💻プログラミング",
	blog: "✍️ ブログ"
} as const;

export type ServiceAccount = {
	category: valueOf<typeof categoryVariation>;
	serviceName: string;
	url: URL;
	explanation: string;
	iconPath?: string; // Optional path to the icon image
	icon?: string; // Optional SVG icon string
}


export const myApps: Array<MyApp> = [
	{
		id: 1,
		category: categoryVariation.various,
		name: "Don't Look Back",
		url: new URL("https://u83ism.github.io/DLB/"),
		explanation: "よろず系です",
	},
	{
		id: 2,
		category: categoryVariation.game,
		name: "Cradle 2 Grave",
		url: new URL("https://cradle2grave.netlify.app/"),
		explanation: "ゲーム系です"
	},
	{
		id: 3,
		category: categoryVariation.battleRoyale,
		name: "Original Battle Royale Network",
		url: new URL("https://obrn-d99b4.firebaseapp.com/"),
		explanation: "バトルロワイアル（著：高見広春）の1.5次創作ジャンル「オリジナルバトルロワイアル」（通称オリバト）専門のリンク集＆データベースです。"
	},
	{
		id: 4,
		category: categoryVariation.proWrestling,
		name: "21世紀パワーボム",
		url: new URL("https://21st-century-power-bomb.netlify.app/"),
		explanation: "プロレス研究やレビューなどを載せています。"
	},
	{
		id: 5,
		category: categoryVariation.blog,
		name: "u83 said so.",
		url: new URL("https://u83ism.github.io/blog/"),
		explanation: "ブログです",
	},
];

export const serviceAccounts: Array<ServiceAccount> = [
	{
		category: categoryVariation.sns,
		serviceName: "X",
		url: new URL("https://x.com/u83unlimited"),
		explanation: "なんでもありのアカウントです。萌えエロ絵のRPを行うので注意",
		icon: icons.twitter
	},
	{
		category: categoryVariation.music,
		serviceName: "YouTube",
		url: new URL("https://www.youtube.com/channel/UCy0EH2VVTG8CNAxYMYbejOg"),
		explanation: "動画アップロード等はやってません。日本語ラップや米Hiphopのプレイリストを公開しています",
		icon: icons.youtube
	},
	{
		category: categoryVariation.movie,
		serviceName: "Filmarks",
		url: new URL("https://filmarks.com/users/u83unlimited"),
		explanation: "映画レビューはこちらにまとめています。",
		icon: icons.filmarks
	},
	{
		category: categoryVariation.programming,
		serviceName: "GitHub",
		url: new URL("https://github.com/u83ism"),
		explanation: "Githubです",
		icon: icons.github
	},
	{
		category: categoryVariation.programming,
		serviceName: "Qiita",
		url: new URL("https://qiita.com/u83unlimited"),
		explanation: "プログラミング関係のメモを投稿しています",
		icon: icons.qiita
	},
	{
		category: categoryVariation.programming,
		serviceName: "Zenn",
		url: new URL("https://zenn.dev/u83unlimited"),
		explanation: "見る専ですが一応",
		icon: icons.zenn
	}
];
