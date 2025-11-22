declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"about": {
"Section1.md": {
	id: "Section1.md";
  slug: "section1";
  body: string;
  collection: "about";
  data: any
} & { render(): Render[".md"] };
"Section2.md": {
	id: "Section2.md";
  slug: "section2";
  body: string;
  collection: "about";
  data: any
} & { render(): Render[".md"] };
"Section3.md": {
	id: "Section3.md";
  slug: "section3";
  body: string;
  collection: "about";
  data: any
} & { render(): Render[".md"] };
"Section4.md": {
	id: "Section4.md";
  slug: "section4";
  body: string;
  collection: "about";
  data: any
} & { render(): Render[".md"] };
"Section5.md": {
	id: "Section5.md";
  slug: "section5";
  body: string;
  collection: "about";
  data: any
} & { render(): Render[".md"] };
"Section7.md": {
	id: "Section7.md";
  slug: "section7";
  body: string;
  collection: "about";
  data: any
} & { render(): Render[".md"] };
"Section8.md": {
	id: "Section8.md";
  slug: "section8";
  body: string;
  collection: "about";
  data: any
} & { render(): Render[".md"] };
};
"agencyfornature": {
"Section1.md": {
	id: "Section1.md";
  slug: "section1";
  body: string;
  collection: "agencyfornature";
  data: any
} & { render(): Render[".md"] };
};
"cargorevolution": {
"Section1.md": {
	id: "Section1.md";
  slug: "section1";
  body: string;
  collection: "cargorevolution";
  data: any
} & { render(): Render[".md"] };
};
"carspreading": {
"Section1.md": {
	id: "Section1.md";
  slug: "section1";
  body: string;
  collection: "carspreading";
  data: any
} & { render(): Render[".md"] };
"Section2.md": {
	id: "Section2.md";
  slug: "section2";
  body: string;
  collection: "carspreading";
  data: any
} & { render(): Render[".md"] };
"Section3.md": {
	id: "Section3.md";
  slug: "section3";
  body: string;
  collection: "carspreading";
  data: any
} & { render(): Render[".md"] };
};
"deartomorrow": {
"Section1.md": {
	id: "Section1.md";
  slug: "section1";
  body: string;
  collection: "deartomorrow";
  data: any
} & { render(): Render[".md"] };
"Section2.md": {
	id: "Section2.md";
  slug: "section2";
  body: string;
  collection: "deartomorrow";
  data: any
} & { render(): Render[".md"] };
"Section3.md": {
	id: "Section3.md";
  slug: "section3";
  body: string;
  collection: "deartomorrow";
  data: any
} & { render(): Render[".md"] };
"Section4.md": {
	id: "Section4.md";
  slug: "section4";
  body: string;
  collection: "deartomorrow";
  data: any
} & { render(): Render[".md"] };
};
"electrify": {
"Section1.md": {
	id: "Section1.md";
  slug: "section1";
  body: string;
  collection: "electrify";
  data: any
} & { render(): Render[".md"] };
"Section2.md": {
	id: "Section2.md";
  slug: "section2";
  body: string;
  collection: "electrify";
  data: any
} & { render(): Render[".md"] };
"Section3.md": {
	id: "Section3.md";
  slug: "section3";
  body: string;
  collection: "electrify";
  data: any
} & { render(): Render[".md"] };
};
"globalalliance": {
"Section1.md": {
	id: "Section1.md";
  slug: "section1";
  body: string;
  collection: "globalalliance";
  data: any
} & { render(): Render[".md"] };
};
"home": {
"Section1.md": {
	id: "Section1.md";
  slug: "section1";
  body: string;
  collection: "home";
  data: any
} & { render(): Render[".md"] };
"Section2.md": {
	id: "Section2.md";
  slug: "section2";
  body: string;
  collection: "home";
  data: any
} & { render(): Render[".md"] };
"Section3.md": {
	id: "Section3.md";
  slug: "section3";
  body: string;
  collection: "home";
  data: any
} & { render(): Render[".md"] };
};
"ourkidsclimate": {
"Section1.md": {
	id: "Section1.md";
  slug: "section1";
  body: string;
  collection: "ourkidsclimate";
  data: any
} & { render(): Render[".md"] };
"Section2.md": {
	id: "Section2.md";
  slug: "section2";
  body: string;
  collection: "ourkidsclimate";
  data: any
} & { render(): Render[".md"] };
"Section3.md": {
	id: "Section3.md";
  slug: "section3";
  body: string;
  collection: "ourkidsclimate";
  data: any
} & { render(): Render[".md"] };
"Section4.md": {
	id: "Section4.md";
  slug: "section4";
  body: string;
  collection: "ourkidsclimate";
  data: any
} & { render(): Render[".md"] };
"Section5.md": {
	id: "Section5.md";
  slug: "section5";
  body: string;
  collection: "ourkidsclimate";
  data: any
} & { render(): Render[".md"] };
};
"parentsforfuture": {
"Section1.md": {
	id: "Section1.md";
  slug: "section1";
  body: string;
  collection: "parentsforfuture";
  data: any
} & { render(): Render[".md"] };
};
"purposedisruptors": {
"Section1.md": {
	id: "Section1.md";
  slug: "section1";
  body: string;
  collection: "purposedisruptors";
  data: any
} & { render(): Render[".md"] };
"Section2.md": {
	id: "Section2.md";
  slug: "section2";
  body: string;
  collection: "purposedisruptors";
  data: any
} & { render(): Render[".md"] };
"Section3.md": {
	id: "Section3.md";
  slug: "section3";
  body: string;
  collection: "purposedisruptors";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
