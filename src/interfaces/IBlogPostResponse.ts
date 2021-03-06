export interface IBlogPostResponse {
  date: string;
  title: string;
  tags: string[];
  image: string | null;
  site: {
    siteMetadata: {
      siteUrl: string;
    };
  };
}
