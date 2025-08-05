namespace ArtistAlbumsInterface {
  interface Root {
    albums: Album[];
  }

  interface Album {
    album_type: string;
    total_tracks: number;
    available_markets: string[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions: Restrictions;
    type: string;
    uri: string;
    artists: Artist[];
    album_group: string;
  }

  interface ExternalUrls {
    spotify: string;
  }

  interface Image {
    url: string;
    height: number;
    width: number;
  }

  interface Restrictions {
    reason: string;
  }

  interface Artist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }
}
