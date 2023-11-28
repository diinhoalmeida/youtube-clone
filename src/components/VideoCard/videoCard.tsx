import { Link } from "react-router-dom";
import { Typography, Card, CardContent, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { YoutubeSearchResult } from "../../interfaces/Feed";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../../utilts/constants";

interface VideoCardProps {
  video: YoutubeSearchResult;
}

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}: VideoCardProps) => (
  <Card
    sx={{
      boxShadow: "none",
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <Box height="200px" sx={{ backgroundColor: "#0A264A" }}>
        <img
          src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          style={{
            width: "100%",
            objectFit: "contain",
            height: "100%",
          }}
        />
      </Box>
    </Link>
    <CardContent
      sx={{
        backgroundColor: "#0A264A",
        padding: 0,
        paddingTop: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle2" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
      >
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
          </Typography>
          <CheckCircleIcon
            sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
          />
        </Box>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;
