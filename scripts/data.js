/**
 * @overview This file contains functions that are used to fetch data from
 * the JSON file.
 *
 * @returns {Promise} Promise object represents the data from the JSON file
 */
export async function fetchData() {
  try {
    const response = await fetch("data/data.json");
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    handleError(error);
  }
}
