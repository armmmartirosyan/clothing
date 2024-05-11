const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

class StringUtils {
  public normalizeImageSrc(path: string): string {
    return BASE_URL + path;
  }
}

export const stringUtils = new StringUtils();
