import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(70);
  const [quality, setQuality] = useState('1080p');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [viewersCount, setViewersCount] = useState(1247);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewersCount(prev => prev + Math.floor(Math.random() * 10) - 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-card">
      <nav className="border-b border-border bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/projects/3614cde0-dd9f-4513-b368-7df4e2c876af/files/02d24983-bcdf-46a9-b980-f1c60c0c8842.jpg" 
              alt="LiveStream Logo" 
              className="w-10 h-10 rounded-xl object-cover"
            />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">КМК</h1>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/contacts" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </Link>
            <Badge variant="secondary" className="gap-2 px-4 py-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-semibold">{viewersCount.toLocaleString()}</span>
              <span className="text-muted-foreground">онлайн</span>
            </Badge>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto space-y-4">
          <Card className="overflow-hidden bg-card border-border shadow-2xl">
            <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group">
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute top-4 left-4 z-10">
                <Badge className="bg-red-600 text-white gap-2 px-3 py-1.5">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="font-semibold">В ЭФИРЕ</span>
                </Badge>
              </div>

              <div className="relative z-10 text-center">
                <Icon name="Video" size={80} className="text-white/60 mx-auto mb-4" />
                <p className="text-white/80 text-lg">Онлайн трансляция</p>
                <p className="text-white/60 text-sm mt-2">Демо-режим: подключите источник видео</p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-white hover:bg-white/20"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      <Icon name={isPlaying ? 'Pause' : 'Play'} size={24} />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-white hover:bg-white/20"
                      onClick={() => setIsMuted(!isMuted)}
                    >
                      <Icon name={isMuted ? 'VolumeX' : 'Volume2'} size={24} />
                    </Button>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={volume}
                      onChange={(e) => setVolume(Number(e.target.value))}
                      className="w-24 accent-primary"
                    />
                    <span className="text-white text-sm font-medium">{volume}%</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <select
                      value={quality}
                      onChange={(e) => setQuality(e.target.value)}
                      className="bg-white/20 text-white px-3 py-1 rounded-lg border-none outline-none"
                    >
                      <option value="1080p">1080p</option>
                      <option value="720p">720p</option>
                      <option value="480p">480p</option>
                      <option value="360p">360p</option>
                    </select>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-white hover:bg-white/20"
                      onClick={toggleFullscreen}
                    >
                      <Icon name={isFullscreen ? 'Minimize' : 'Maximize'} size={24} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                <Icon name="Tv" size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">Прямой эфир: Технологии будущего</h2>
                <p className="text-muted-foreground mb-4">
                  Присоединяйтесь к нашей прямой трансляции и обсуждайте самые актуальные темы вместе с тысячами зрителей онлайн!
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-primary text-primary">
                    #прямойэфир
                  </Badge>
                  <Badge variant="outline" className="border-secondary text-secondary">
                    #технологии
                  </Badge>
                  <Badge variant="outline" className="border-accent text-accent">
                    #онлайн
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;