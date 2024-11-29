import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { youtube_v3 } from "@googleapis/youtube";
import { useToast } from "@/components/ui/use-toast";

const VideoManager = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const [apiKey, setApiKey] = useState("");
  const [channelId, setChannelId] = useState("");
  const { toast } = useToast();

  const fetchYoutubeData = async () => {
    if (!apiKey || !channelId) {
      toast({
        title: "Missing Information",
        description: "Please provide both API Key and Channel ID",
        variant: "destructive",
      });
      return;
    }

    try {
      const youtube = new youtube_v3.Youtube({
        auth: apiKey,
      });

      const response = await youtube.channels.list({
        id: [channelId],
        part: ["statistics", "contentDetails"],
      });

      if (response.data.items && response.data.items[0]) {
        const playlistId = response.data.items[0].contentDetails?.relatedPlaylists?.uploads;
        
        const videosResponse = await youtube.playlistItems.list({
          playlistId: playlistId,
          part: ["snippet", "contentDetails"],
          maxResults: 10,
        });

        const videoIds = videosResponse.data.items?.map(
          (item) => item.contentDetails?.videoId
        ) || [];

        const videoStatsResponse = await youtube.videos.list({
          id: videoIds as string[],
          part: ["statistics"],
        });

        const videoData = videosResponse.data.items?.map((item, index) => ({
          id: item.contentDetails?.videoId,
          title: item.snippet?.title,
          embedId: item.contentDetails?.videoId,
          views: videoStatsResponse.data.items?.[index]?.statistics?.viewCount || "0",
          likes: videoStatsResponse.data.items?.[index]?.statistics?.likeCount || "0",
        }));

        setVideos(videoData || []);
        toast({
          title: "Success",
          description: "Videos fetched successfully",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch YouTube data. Please check your API key and Channel ID.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-black/60 border border-yellow-500/20">
        <CardHeader>
          <CardTitle className="text-yellow-500">YouTube Integration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="apiKey" className="text-white">YouTube API Key</Label>
            <Input
              id="apiKey"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your YouTube API Key"
              className="bg-black/60 text-white"
            />
          </div>
          <div>
            <Label htmlFor="channelId" className="text-white">Channel ID</Label>
            <Input
              id="channelId"
              value={channelId}
              onChange={(e) => setChannelId(e.target.value)}
              placeholder="Enter your Channel ID"
              className="bg-black/60 text-white"
            />
          </div>
          <Button 
            onClick={fetchYoutubeData}
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black"
          >
            Fetch Videos
          </Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-black/60 border border-yellow-500/20">
          <CardHeader>
            <CardTitle className="text-yellow-500">Total Views</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl text-white">
              {videos.reduce((acc, video) => acc + parseInt(video.views), 0).toLocaleString()}
            </p>
          </CardContent>
        </Card>
        <Card className="bg-black/60 border border-yellow-500/20">
          <CardHeader>
            <CardTitle className="text-yellow-500">Total Likes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl text-white">
              {videos.reduce((acc, video) => acc + parseInt(video.likes), 0).toLocaleString()}
            </p>
          </CardContent>
        </Card>
        <Card className="bg-black/60 border border-yellow-500/20">
          <CardHeader>
            <CardTitle className="text-yellow-500">Video Count</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl text-white">{videos.length}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <Card key={video.id} className="bg-black/60 border border-yellow-500/20">
            <CardHeader>
              <CardTitle className="text-yellow-500">{video.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="flex justify-between text-white">
                <span>{parseInt(video.views).toLocaleString()} views</span>
                <span>{parseInt(video.likes).toLocaleString()} likes</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VideoManager;