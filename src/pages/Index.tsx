import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  const [viewersCount, setViewersCount] = useState(1247);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewersCount(prev => prev + Math.floor(Math.random() * 10) - 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-card">
      <nav className="border-b border-border bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between rounded-none bg-gray-400">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/3491302.png" 
              alt="КМК Логотип" 
              className="h-12 w-auto object-contain"
            />
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

              <iframe
                src="https://rtsp.ru/embed/6ZZB8HBi/"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allowFullScreen
                title="Онлайн камера"
              />
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