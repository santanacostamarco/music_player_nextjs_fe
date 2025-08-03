/**
 * Composes the bff url.
 * @param path - The path to the endpoint.
 * @returns The request url.
 */
export const bff = (path: string) => {
  return `${process.env.BFF_BASE_URL}${path}`;
};
