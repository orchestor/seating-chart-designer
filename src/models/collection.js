/**
 * Flatten map object into iterable array
 *
 * @param {object} map - The object to flatten
 * @return {array} - The flattened array
 */
export function flatten(map) {
  let results = [];
  for (let prop in map) {
    if (map.hasOwnProperty(prop)) {
      results.push(map[prop]);
    }
  }
  return results;
}
