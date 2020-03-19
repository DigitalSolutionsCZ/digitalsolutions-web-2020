import slugify from "@sindresorhus/slugify";
import stripHtml from "string-strip-html";

export const livePreviewEnabled = process.env.GRIDSOME_LIVE_PREVIEW === 'true';

export function transformSingleArrayToObject(data, keys) {
  for (const key of keys) {
    if (Array.isArray(data[key]) && data[key].length === 1) {
      data[key] = data[key].pop();
    }
  }
  return data;
}

export function mapObject(object, keys, transform) {
  if(Array.isArray(keys)) {
    for (const key of keys) {
      if (object[key] !== null && object[key] !== undefined) {
        object = object[key]
      } else {
        return '';
      }
    }
  }
  if (transform) {
    return transform(object);
  }
  return object;
}

function* eachKeyValue(object) {
  const keys = Object.keys(object);
  for (const key of keys) {
    yield [key, object[key]];
  }
}

function getType(value) {
  if (value instanceof Blob) {
    return 'Blob';
  } else if (value instanceof File) {
    return 'File';
  } else if (value instanceof FileList) {
    return 'FileList';
  } else {
    return 'SomethingElse';
  }
}

export function containsString(string, substring) {
  return string.includes(substring);
}

export function isSupported() {
  return FormData && Blob && File && FileList;
}

export function toFormData(object) {
  if (!isSupported()) {
    throw new Error('Your browser does not support FormData');
  }

  const form = new FormData();
  for (const [name, value] of eachKeyValue(object)) {
    const type = getType(value);
    switch (type) {
      case 'Blob':
        form.append(name, value, name);
        break;
      case 'File':
        form.append(name, value, value.name);
        break;
      case 'FileList': {
        for (let i = 0; i < value.length; ++i) {
          const file = value[i];
          form.append(name + i, file, file.name);
        }
        break;
      }
      default:
        form.append(name, value);
    }
  }
  return form;
}

export function shallowObjectValuesToInt(object) {
  const parsedObject = {};
  Object.keys(object).map( key => {
    parsedObject[key] = parseInt(object[key]);
  });
  return parsedObject;
}

/**
 *
 * @param url
 * @param title
 * @param slug
 * @returns {string|*}
 */
export function getUrl(url, title, slug = null) {
  if (livePreviewEnabled && slug) return '/' + slug;
  return url !== "" ? url : '/' + slugify(title)
}


export function metaInfo({title, heading = ""}, context) {
  const metaArray = [];
  let seoTitle;
    seoTitle = title || stripHtml(heading);
    if (context.seoKeywords) metaArray.push({
      key: 'keywords',
      name: 'keywords',
      content: context.seoKeywords
    });

    if (context.seoDescription) metaArray.push({
      key: 'description',
      name: 'description',
      content: context.seoDescription
    });
  return {
    title: seoTitle,
    meta: metaArray
  };
}
