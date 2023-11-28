export type YoutubeChannelListResponse = {
  kind: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YoutubeChannel[];
};

export type YoutubeChannel = {
  kind: string;
  id: string;
  snippet: {
    title: string;
    description: string;
    customUrl: string;
    publishedAt: string;
    thumbnails: {
      default: YoutubeThumbnail;
      medium: YoutubeThumbnail;
      high: YoutubeThumbnail;
    };
    localized: {
      title: string;
      description: string;
    };
  };
  contentDetails: {
    relatedPlaylists: {
      likes: string;
      uploads: string;
    };
  };
  statistics: {
    viewCount: string;
    subscriberCount: string;
    hiddenSubscriberCount: boolean;
    videoCount: string;
  };
  brandingSettings: {
    channel: {
      title: string;
      description: string;
      keywords: string;
      unsubscribedTrailer: string;
    };
    image: {
      bannerExternalUrl: string;
    };
  };
};

type YoutubeThumbnail = {
  url: string;
  width: number;
  height: number;
};

export type YoutubeSearchResult = {
  kind: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: YoutubeThumbnail;
      medium: YoutubeThumbnail;
      high: YoutubeThumbnail;
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };
};
