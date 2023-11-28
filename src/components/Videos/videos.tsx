import { Grid, Box } from "@mui/material";
import { YoutubeSearchResult } from "../../interfaces/Feed";
import Loader from "../Loader/loader";
import VideoCard from "../VideoCard/videoCard";

interface VideosProps {
  videos: YoutubeSearchResult[];
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
}

const Videos = ({ videos }: VideosProps) => {
  if (!videos?.length)
    return (
      <Box
        position="absolute"
        width="100vh"
        display="flex"
        justifyContent="center"
        height="100vh"
        alignContent="center"
      >
        <Loader />
      </Box>
    );

  return (
    <Grid container columnGap={5} columns={14}>
      {videos.map((item: YoutubeSearchResult, idx: number) => (
        <Grid item key={idx} xs={14} sm={6} md={4} lg={3} xl={2}>
          {item.id.videoId && <VideoCard video={item} />}
        </Grid>
      ))}
    </Grid>
  );
};

export default Videos;
