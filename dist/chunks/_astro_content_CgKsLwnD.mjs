import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { removeBase, prependForwardSlash } from '@astrojs/internal-helpers/path';
import { i as isCoreRemotePath, V as VALID_INPUT_FORMATS, A as AstroError, G as GetEntryDeprecationError, U as UnknownContentCollectionError } from './astro/assets-service_O8gj24K7.mjs';
import { c as createComponent, f as renderUniqueStylesheet, g as renderScriptElement, h as createHeadAndContent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from './astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import * as devalue from 'devalue';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isCoreRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://in-progress-astro.vercel.app", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function createGetEntryBySlug({
  getEntryImport,
  getRenderEntryImport,
  collectionNames
}) {
  return async function getEntryBySlug(collection, slug) {
    const store = await globalDataStore.get();
    if (!collectionNames.has(collection)) {
      if (store.hasCollection(collection)) {
        throw new AstroError({
          ...GetEntryDeprecationError,
          message: GetEntryDeprecationError.message(collection, "getEntryBySlug")
        });
      }
      console.warn(`The collection ${JSON.stringify(collection)} does not exist.`);
      return void 0;
    }
    const entryImport = await getEntryImport(collection, slug);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    return {
      id: entry.id,
      slug: entry.slug,
      body: entry.body,
      collection: entry.collection,
      data: entry.data,
      async render() {
        return render({
          collection: entry.collection,
          id: entry.id,
          renderEntryImport: await getRenderEntryImport(collection, slug)
        });
      }
    };
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/about/Section1.md": () => import('./Section1_Di4aIFcU.mjs'),"/src/content/about/Section2.md": () => import('./Section2_Cxjk6VMX.mjs'),"/src/content/about/Section3.md": () => import('./Section3_DVN29D0G.mjs'),"/src/content/about/Section4.md": () => import('./Section4_Dtl9NVo8.mjs'),"/src/content/about/Section5.md": () => import('./Section5_DJE6ynKg.mjs'),"/src/content/about/Section6.md": () => import('./Section6_DEdXjTUf.mjs'),"/src/content/about/Section7.md": () => import('./Section7_CMUsYgO0.mjs'),"/src/content/about/Section8.md": () => import('./Section8_COfEC1sW.mjs'),"/src/content/about/Section9.md": () => import('./Section9_CK-gLilW.mjs'),"/src/content/agencyfornature/Section1.md": () => import('./Section1_vN4H7QmV.mjs'),"/src/content/cargorevolution/Section1.md": () => import('./Section1_D1MGgss8.mjs'),"/src/content/carspreading/Section1.md": () => import('./Section1_LfHzDboL.mjs'),"/src/content/carspreading/Section2.md": () => import('./Section2_C1invkzB.mjs'),"/src/content/carspreading/Section3.md": () => import('./Section3_C2sBCGc6.mjs'),"/src/content/deartomorrow/Section1.md": () => import('./Section1_BkGXp1uQ.mjs'),"/src/content/deartomorrow/Section2.md": () => import('./Section2_DXHa-23V.mjs'),"/src/content/deartomorrow/Section3.md": () => import('./Section3_Db3c-lbA.mjs'),"/src/content/deartomorrow/Section4.md": () => import('./Section4_DXdXfSmb.mjs'),"/src/content/electrify/Section1.md": () => import('./Section1_YyCPRJp2.mjs'),"/src/content/electrify/Section2.md": () => import('./Section2_DvZ2BBpK.mjs'),"/src/content/electrify/Section3.md": () => import('./Section3_Bl0BSPaH.mjs'),"/src/content/globalalliance/Section1.md": () => import('./Section1_DYXubbub.mjs'),"/src/content/home/Section1.md": () => import('./Section1_Qpqu-7pw.mjs'),"/src/content/home/Section2.md": () => import('./Section2_D8rUp2jc.mjs'),"/src/content/home/Section3.md": () => import('./Section3_BrK1NNeB.mjs'),"/src/content/home/Section4.md": () => import('./Section4_Cc1HpTno.mjs'),"/src/content/ourkidsclimate/Section1.md": () => import('./Section1_CIBteTYR.mjs'),"/src/content/ourkidsclimate/Section2.md": () => import('./Section2_B3lixYMO.mjs'),"/src/content/ourkidsclimate/Section3.md": () => import('./Section3_DcUo4HFJ.mjs'),"/src/content/ourkidsclimate/Section4.md": () => import('./Section4_B9eOg3fs.mjs'),"/src/content/ourkidsclimate/Section5.md": () => import('./Section5_CDLIjalt.mjs'),"/src/content/parentsforfuture/Section1.md": () => import('./Section1_DZYLBC5B.mjs'),"/src/content/purposedisruptors/Section1.md": () => import('./Section1_Ck1SfcgK.mjs'),"/src/content/purposedisruptors/Section2.md": () => import('./Section2_DMwTFqZ3.mjs'),"/src/content/purposedisruptors/Section3.md": () => import('./Section3_DfmtNofB.mjs'),"/src/content/thoughts/2025-11-26-the-c-word.md": () => import('./2025-11-26-the-c-word_DpNscOHw.mjs'),"/src/content/thoughts/whatisabrand copy 2.md": () => import('./whatisabrand copy 2_BhRDsJG7.mjs'),"/src/content/thoughts/whatisabrand copy.md": () => import('./whatisabrand copy_DS1Lrqgt.mjs'),"/src/content/thoughts/whatisabrand.md": () => import('./whatisabrand_DkKnC5wk.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"about":{"type":"content","entries":{"section1":"/src/content/about/Section1.md","section2":"/src/content/about/Section2.md","section6":"/src/content/about/Section6.md","section5":"/src/content/about/Section5.md","section3":"/src/content/about/Section3.md","section7":"/src/content/about/Section7.md","section8":"/src/content/about/Section8.md","section9":"/src/content/about/Section9.md","section4":"/src/content/about/Section4.md"}},"agencyfornature":{"type":"content","entries":{"section1":"/src/content/agencyfornature/Section1.md"}},"cargorevolution":{"type":"content","entries":{"section1":"/src/content/cargorevolution/Section1.md"}},"carspreading":{"type":"content","entries":{"section1":"/src/content/carspreading/Section1.md","section3":"/src/content/carspreading/Section3.md","section2":"/src/content/carspreading/Section2.md"}},"deartomorrow":{"type":"content","entries":{"section1":"/src/content/deartomorrow/Section1.md","section3":"/src/content/deartomorrow/Section3.md","section4":"/src/content/deartomorrow/Section4.md","section2":"/src/content/deartomorrow/Section2.md"}},"electrify":{"type":"content","entries":{"section1":"/src/content/electrify/Section1.md","section2":"/src/content/electrify/Section2.md","section3":"/src/content/electrify/Section3.md"}},"globalalliance":{"type":"content","entries":{"section1":"/src/content/globalalliance/Section1.md"}},"home":{"type":"content","entries":{"section1":"/src/content/home/Section1.md","section2":"/src/content/home/Section2.md","section3":"/src/content/home/Section3.md","section4":"/src/content/home/Section4.md"}},"ourkidsclimate":{"type":"content","entries":{"section1":"/src/content/ourkidsclimate/Section1.md","section2":"/src/content/ourkidsclimate/Section2.md","section3":"/src/content/ourkidsclimate/Section3.md","section4":"/src/content/ourkidsclimate/Section4.md","section5":"/src/content/ourkidsclimate/Section5.md"}},"parentsforfuture":{"type":"content","entries":{"section1":"/src/content/parentsforfuture/Section1.md"}},"purposedisruptors":{"type":"content","entries":{"section1":"/src/content/purposedisruptors/Section1.md","section2":"/src/content/purposedisruptors/Section2.md","section3":"/src/content/purposedisruptors/Section3.md"}},"thoughts":{"type":"content","entries":{"2025-11-26-the-c-word":"/src/content/thoughts/2025-11-26-the-c-word.md","whatisabrand-copy-2":"/src/content/thoughts/whatisabrand copy 2.md","whatisabrand":"/src/content/thoughts/whatisabrand.md","whatisabrand-copy":"/src/content/thoughts/whatisabrand copy.md"}}};

const collectionNames = new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/about/Section1.md": () => import('./Section1_BTE9lqhP.mjs'),"/src/content/about/Section2.md": () => import('./Section2_uWx0vRhY.mjs'),"/src/content/about/Section3.md": () => import('./Section3_4bTkDYeE.mjs'),"/src/content/about/Section4.md": () => import('./Section4_8b7JfZOC.mjs'),"/src/content/about/Section5.md": () => import('./Section5_uuW-mxQi.mjs'),"/src/content/about/Section6.md": () => import('./Section6_BkLAoLEn.mjs'),"/src/content/about/Section7.md": () => import('./Section7_DG7xRRJB.mjs'),"/src/content/about/Section8.md": () => import('./Section8_Bw1X4ZPR.mjs'),"/src/content/about/Section9.md": () => import('./Section9_DhiQCTSk.mjs'),"/src/content/agencyfornature/Section1.md": () => import('./Section1_dh6cgHnC.mjs'),"/src/content/cargorevolution/Section1.md": () => import('./Section1_BuRs2MhI.mjs'),"/src/content/carspreading/Section1.md": () => import('./Section1_BrVist-O.mjs'),"/src/content/carspreading/Section2.md": () => import('./Section2_C4TnClbh.mjs'),"/src/content/carspreading/Section3.md": () => import('./Section3_Dwm3tvKC.mjs'),"/src/content/deartomorrow/Section1.md": () => import('./Section1_B_HfE9hl.mjs'),"/src/content/deartomorrow/Section2.md": () => import('./Section2_CXR5082T.mjs'),"/src/content/deartomorrow/Section3.md": () => import('./Section3_C8UkL88f.mjs'),"/src/content/deartomorrow/Section4.md": () => import('./Section4_eVc1u-3_.mjs'),"/src/content/electrify/Section1.md": () => import('./Section1_D_hapDSD.mjs'),"/src/content/electrify/Section2.md": () => import('./Section2_BdPAIXKz.mjs'),"/src/content/electrify/Section3.md": () => import('./Section3_DDoD3fOp.mjs'),"/src/content/globalalliance/Section1.md": () => import('./Section1_CaE4hxTC.mjs'),"/src/content/home/Section1.md": () => import('./Section1_ppFMQvXY.mjs'),"/src/content/home/Section2.md": () => import('./Section2_piBgTMtz.mjs'),"/src/content/home/Section3.md": () => import('./Section3_CVG4GdCI.mjs'),"/src/content/home/Section4.md": () => import('./Section4_-RSW0K5J.mjs'),"/src/content/ourkidsclimate/Section1.md": () => import('./Section1_DXnep3vl.mjs'),"/src/content/ourkidsclimate/Section2.md": () => import('./Section2_DiF9da0C.mjs'),"/src/content/ourkidsclimate/Section3.md": () => import('./Section3_yBzy_OYj.mjs'),"/src/content/ourkidsclimate/Section4.md": () => import('./Section4_OBJILlzH.mjs'),"/src/content/ourkidsclimate/Section5.md": () => import('./Section5_D2pk9V9J.mjs'),"/src/content/parentsforfuture/Section1.md": () => import('./Section1_D8zcMu_t.mjs'),"/src/content/purposedisruptors/Section1.md": () => import('./Section1_CRHORwXs.mjs'),"/src/content/purposedisruptors/Section2.md": () => import('./Section2_BUmOPB8N.mjs'),"/src/content/purposedisruptors/Section3.md": () => import('./Section3_tYKWu-GC.mjs'),"/src/content/thoughts/2025-11-26-the-c-word.md": () => import('./2025-11-26-the-c-word_Bb3pB6GH.mjs'),"/src/content/thoughts/whatisabrand copy 2.md": () => import('./whatisabrand copy 2_CyxoAiHP.mjs'),"/src/content/thoughts/whatisabrand copy.md": () => import('./whatisabrand copy_7wPDD9GK.mjs'),"/src/content/thoughts/whatisabrand.md": () => import('./whatisabrand_vHoCCbjw.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const getEntryBySlug = createGetEntryBySlug({
	getEntryImport: createGlobLookup(contentCollectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	collectionNames,
});

export { getCollection as a, getEntryBySlug as g };
