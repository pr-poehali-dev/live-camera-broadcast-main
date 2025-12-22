import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Сообщение отправлено!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-card">
      <nav className="border-b border-border bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
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
            <Link to="/contacts" className="text-primary font-semibold">
              Контакты
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary">
              <Icon name="MessageSquare" size={16} className="mr-2" />
              Свяжитесь с нами
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Есть вопросы?
            </h1>
            <p className="text-xl text-muted-foreground">
              Мы всегда рады помочь и ответить на ваши вопросы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-card border-border text-center hover:border-primary transition-colors">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={28} className="text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-muted-foreground text-sm mb-3">Пишите нам на почту</p>
              <a href="mailto:mvm.rzn@yandex.ru" className="text-primary hover:text-secondary transition-colors">
                mvm.rzn@yandex.ru
              </a>
            </Card>

            <Card className="p-6 bg-card border-border text-center hover:border-secondary transition-colors">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={28} className="text-secondary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Телефон</h3>
              <p className="text-muted-foreground text-sm mb-3">Звоните в любое время</p>
              <a href="tel:+79991234567" className="text-primary hover:text-secondary transition-colors">
                +7 (999) 123-45-67
              </a>
            </Card>

            <Card className="p-6 bg-card border-border text-center hover:border-accent transition-colors">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={28} className="text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Адрес</h3>
              <p className="text-muted-foreground text-sm mb-3">Приходите к нам в офис</p>
              <p className="text-foreground">
                г. Москва, ул. Примерная, д. 123
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-card border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold flex items-center gap-2">
                    <Icon name="User" size={16} className="text-primary" />
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-muted border-border"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold flex items-center gap-2">
                    <Icon name="Mail" size={16} className="text-primary" />
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-muted border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold flex items-center gap-2">
                  <Icon name="MessageSquare" size={16} className="text-primary" />
                  Сообщение
                </label>
                <Textarea
                  id="message"
                  placeholder="Расскажите нам, чем мы можем помочь..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-muted border-border resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg font-semibold"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Отправить сообщение
              </Button>
            </form>
          </Card>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-6">Следите за нами в социальных сетях</h3>
            <div className="flex items-center justify-center gap-4">
              <Button
                size="icon"
                variant="outline"
                className="w-12 h-12 rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all"
              >
                <Icon name="Twitter" size={20} />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="w-12 h-12 rounded-full border-secondary text-secondary hover:bg-secondary hover:text-white transition-all"
              >
                <Icon name="Instagram" size={20} />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="w-12 h-12 rounded-full border-accent text-accent hover:bg-accent hover:text-white transition-all"
              >
                <Icon name="Facebook" size={20} />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="w-12 h-12 rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all"
              >
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;