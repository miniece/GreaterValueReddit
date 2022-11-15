export interface PaupersReddit {
	kind: string;
	data: TopData;
}

export interface TopData {
	after: string;
	dist: number;
	modhash: string;
	geoFilter: null;
	children: Child[];
	before: null;
}

export interface Child {
	kind: Kind;
	data: ChildData;
}

export interface ChildData {
	approvedAtUTC: null;
	subreddit: Subreddit;
	selftext: string;
	authorFullname: string;
	saved: boolean;
	modReasonTitle: null;
	gilded: number;
	clicked: boolean;
	title: string;
	linkFlairRichtext: any[];
	subredditNamePrefixed: SubredditNamePrefixed;
	hidden: boolean;
	pwls: number;
	linkFlairCSSClass: null | string;
	downs: number;
	thumbnailHeight: number;
	topAwardedType: null;
	hideScore: boolean;
	name: string;
	quarantine: boolean;
	linkFlairTextColor: FlairTextColor;
	upvoteRatio: number;
	authorFlairBackgroundColor: null | string;
	subredditType: SubredditType;
	ups: number;
	totalAwardsReceived: number;
	mediaEmbed: MediaEmbed;
	thumbnailWidth: number;
	authorFlairTemplateID: null;
	isOriginalContent: boolean;
	userReports: any[];
	secureMedia: Media | null;
	isRedditMediaDomain: boolean;
	isMeta: boolean;
	category: null;
	secureMediaEmbed: MediaEmbed;
	linkFlairText: null;
	canModPost: boolean;
	score: number;
	approvedBy: null;
	isCreatedFromAdsUI: boolean;
	authorPremium: boolean;
	thumbnail: string;
	edited: boolean;
	authorFlairCSSClass: null | string;
	authorFlairRichtext: any[];
	gildings: Gildings;
	postHint: PostHint;
	contentCategories: null;
	isSelf: boolean;
	modNote: null;
	created: number;
	linkFlairType: FlairType;
	wls: number;
	removedByCategory: null;
	bannedBy: null;
	authorFlairType: FlairType;
	domain: Domain;
	allowLiveComments: boolean;
	selftextHTML: null;
	likes: null;
	suggestedSort: null | string;
	bannedAtUTC: null;
	urlOverriddenByDest: string;
	viewCount: null;
	archived: boolean;
	noFollow: boolean;
	isCrosspostable: boolean;
	pinned: boolean;
	over18: boolean;
	preview: Preview;
	allAwardings: AllAwarding[];
	awarders: any[];
	mediaOnly: boolean;
	canGild: boolean;
	spoiler: boolean;
	locked: boolean;
	authorFlairText: null;
	treatmentTags: any[];
	visited: boolean;
	removedBy: null;
	numReports: null;
	distinguished: null;
	subredditID: SubredditID;
	authorIsBlocked: boolean;
	modReasonBy: null;
	removalReason: null;
	linkFlairBackgroundColor: string;
	id: string;
	isRobotIndexable: boolean;
	reportReasons: null;
	author: string;
	discussionType: null;
	numComments: number;
	sendReplies: boolean;
	whitelistStatus: WhitelistStatus;
	contestMode: boolean;
	modReports: any[];
	authorPatreonFlair: boolean;
	authorFlairTextColor: FlairTextColor | null;
	permalink: string;
	parentWhitelistStatus: WhitelistStatus;
	stickied: boolean;
	url: string;
	subredditSubscribers: number;
	createdUTC: number;
	numCrossposts: number;
	media: Media | null;
	isVideo: boolean;
	authorCakeday?: boolean;
}

export interface AllAwarding {
	giverCoinReward: null;
	subredditID: null;
	isNew: boolean;
	daysOfDripExtension: number | null;
	coinPrice: number;
	id: string;
	pennyDonate: null;
	awardSubType: AwardSubType;
	coinReward: number;
	iconURL: string;
	daysOfPremium: number | null;
	tiersByRequiredAwardings: null;
	resizedIcons: ResizedIcon[];
	iconWidth: number;
	staticIconWidth: number;
	startDate: null;
	isEnabled: boolean;
	awardingsRequiredToGrantBenefits: null;
	description: string;
	endDate: null;
	stickyDurationSeconds: null;
	subredditCoinReward: number;
	count: number;
	staticIconHeight: number;
	name: string;
	resizedStaticIcons: ResizedIcon[];
	iconFormat: IconFormat | null;
	iconHeight: number;
	pennyPrice: number | null;
	awardType: AwardType;
	staticIconURL: string;
}

export enum AwardSubType {
	Appreciation = 'APPRECIATION',
	Global = 'GLOBAL',
	Premium = 'PREMIUM'
}

export enum AwardType {
	Global = 'global'
}

export enum IconFormat {
	Apng = 'APNG',
	PNG = 'PNG'
}

export interface ResizedIcon {
	url: string;
	width: number;
	height: number;
}

export enum FlairTextColor {
	Dark = 'dark'
}

export enum FlairType {
	Text = 'text'
}

export enum Domain {
	IImgurCOM = 'i.imgur.com',
	IReddIt = 'i.redd.it',
	VReddIt = 'v.redd.it'
}

export interface Gildings {
	gid1?: number;
	gid3?: number;
	gid2?: number;
}

export interface Media {
	redditVideo: RedditVideo;
}

export interface RedditVideo {
	bitrateKbps: number;
	fallbackURL: string;
	height: number;
	width: number;
	scrubberMediaURL: string;
	dashURL: string;
	duration: number;
	hlsURL: string;
	isGIF: boolean;
	transcodingStatus: TranscodingStatus;
}

export enum TranscodingStatus {
	Completed = 'completed'
}

export interface MediaEmbed {}

export enum WhitelistStatus {
	AllAds = 'all_ads'
}

export enum PostHint {
	HostedVideo = 'hosted:video',
	Image = 'image'
}

export interface Preview {
	images: Image[];
	enabled: boolean;
}

export interface Image {
	source: ResizedIcon;
	resolutions: ResizedIcon[];
	variants: MediaEmbed;
	id: string;
}

export enum Subreddit {
	Aww = 'aww'
}

export enum SubredditID {
	T52Qh1O = 't5_2qh1o'
}

export enum SubredditNamePrefixed {
	RAww = 'r/aww'
}

export enum SubredditType {
	Public = 'public'
}

export enum Kind {
	T3 = 't3'
}
