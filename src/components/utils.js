export function transformSingleArrayToObject(data, keys) {
  for (const key of keys) {
    if (Array.isArray(data[key]) && data[key].length === 1) {
      data[key] = data[key].pop();
    }
  }
  return data;
}
