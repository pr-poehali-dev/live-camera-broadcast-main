import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

interface ChatMessage {
  id: string;
  username: string;
  message: string;
  timestamp: Date;
}

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(70);
  const [quality, setQuality] = useState('1080p');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [viewersCount, setViewersCount] = useState(1247);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { id: '1', username: 'Алексей', message: 'Привет всем! 👋', timestamp: new Date() },
    { id: '2', username: 'Мария', message: 'Отличная трансляция!', timestamp: new Date() },
    { id: '3', username: 'Дмитрий', message: 'Где можно связаться?', timestamp: new Date() },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewersCount(prev => prev + Math.floor(Math.random() * 10) - 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: ChatMessage = {
        id: Date.now().toString(),
        username: 'Гость' + Math.floor(Math.random() * 1000),
        message: newMessage,
        timestamp: new Date(),
      };
      setChatMessages(prev => [...prev, message]);
      setNewMessage('');
    }
  };

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
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Radio" size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              LiveStream
            </h1>
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
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

          <div className="lg:col-span-1">
            <Card className="bg-card border-border h-[600px] flex flex-col shadow-2xl">
              <div className="p-4 border-b border-border">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <Icon name="MessageCircle" size={20} className="text-primary" />
                    Живой чат
                  </h3>
                  <Badge variant="secondary" className="gap-1.5">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>{chatMessages.length}</span>
                  </Badge>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {chatMessages.map((msg) => (
                  <div key={msg.id} className="animate-in slide-in-from-bottom-2">
                    <div className="flex items-start gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center flex-shrink-0">
                        <Icon name="User" size={16} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2">
                          <span className="font-semibold text-sm text-primary">{msg.username}</span>
                          <span className="text-xs text-muted-foreground">
                            {msg.timestamp.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                        <p className="text-sm text-foreground mt-0.5">{msg.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>

              <Separator />

              <div className="p-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Написать сообщение..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1 bg-muted border-border"
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                  >
                    <Icon name="Send" size={20} />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
