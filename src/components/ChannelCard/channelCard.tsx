// Import necessary types
import { Box, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../../utilts/constants";
import CardMedia from "@mui/material/CardMedia";
import { YoutubeChannel } from "../../interfaces/Feed";

interface ChannelCardProps {
  channelDetail: YoutubeChannel;
  marginTop?: number;
}

const ChannelCard = ({ channelDetail, marginTop }: ChannelCardProps) => {
  const cardMediaProps = {
    component: "img",
    alt: channelDetail?.snippet?.title,
    image: channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture,
    sx: {
      borderRadius: "50%",
      height: "180px",
      width: "180px",
      mb: 2,
      border: "1px solid #e3e3e3",
    },
  };

  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail?.id}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia {...cardMediaProps} />
          {/* <Typography variant="h6">
            {channelDetail?.snippet?.title}{" "}
            <CheckCircleIcon
              sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
            />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography
              sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
            >
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString("en-US")}{" "}
              Subscribers
            </Typography>
          )} */}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
