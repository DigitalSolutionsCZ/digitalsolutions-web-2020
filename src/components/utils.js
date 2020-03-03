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
