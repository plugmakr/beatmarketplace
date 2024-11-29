import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const VideoManager = () => {
  const videos = [
    {
      id: 1,
      title: "Beat Making Tutorial",
      embedId: "dQw4w9WgXcQ",
      views: "1.2k",
      likes: "245",
    },
    {
      id: 2,
      title: "Studio Setup Guide",
      embedId: "dQw4w9WgXcQ",
      views: "856",
      likes: "167",
    },
    {
      id: 3,
      title: "Sound Design Masterclass",
      embedId: "dQw4w9WgXcQ",
      views: "2.1k",
      likes: "398",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-black/60 border border-yellow-500/20">
          <CardHeader>
            <CardTitle className="text-yellow-500">Total Views</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl text-white">4.2k</p>
          </CardContent>
        </Card>
        <Card className="bg-black/60 border border-yellow-500/20">
          <CardHeader>
            <CardTitle className="text-yellow-500">Total Likes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl text-white">810</p>
          </CardContent>
        </Card>
        <Card className="bg-black/60 border border-yellow-500/20">
          <CardHeader>
            <CardTitle className="text-yellow-500">Subscribers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl text-white">325</p>
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
                <span>{video.views} views</span>
                <span>{video.likes} likes</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button className="w-full bg-yellow-500 hover:bg-yellow-600">Upload New Video</Button>
    </div>
  );
};

export default VideoManager;