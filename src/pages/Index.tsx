import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Index = () => {

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
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <Card className="overflow-hidden bg-card border-border shadow-2xl">
            <div className="p-4 border-b border-border">
              <h2 className="text-xl font-bold text-foreground">р. Рожайка КМК Cam 1</h2>
            </div>
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

          <Card className="overflow-hidden bg-card border-border shadow-2xl">
            <div className="p-4 border-b border-border">
              <h2 className="text-xl font-bold text-foreground">р. Рожайка КМК Cam 2</h2>
            </div>
            <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group">
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute top-4 left-4 z-10">
                <Badge className="bg-red-600 text-white gap-2 px-3 py-1.5">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="font-semibold">В ЭФИРЕ</span>
                </Badge>
              </div>

              <iframe
                src="https://rtsp.ru/embed/BffAnrF4/"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allowFullScreen
                title="Онлайн камера 2"
              />
            </div>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default Index;