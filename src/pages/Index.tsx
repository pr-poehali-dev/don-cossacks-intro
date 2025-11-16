import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<number | null>(null);

  const artworks = [
    {
      id: 1,
      title: 'Иллюстрация к роману "Тихий Дон"',
      artist: 'Орест Верейский',
      year: '1953',
      description: 'Классическая иллюстрация, передающая дух донского казачества',
      image: 'https://cdn.poehali.dev/projects/a1aa36d1-74ad-4c6f-b16e-552450f204f0/files/53dd9cf3-c1a4-4b9c-b936-cdfd2742a652.jpg'
    },
    {
      id: 2,
      title: 'Портрет донского казака',
      artist: 'Алексей Кравченко',
      year: '1950',
      description: 'Графическая работа, раскрывающая характер казачьей культуры',
      image: 'https://cdn.poehali.dev/projects/a1aa36d1-74ad-4c6f-b16e-552450f204f0/files/7b5a6762-5e55-44cb-bb64-3b98edcb30b2.jpg'
    },
    {
      id: 3,
      title: 'Казачья традиция',
      artist: 'Орест Верейский',
      year: '1955',
      description: 'Серия иллюстраций к произведениям о донском казачестве',
      image: 'https://cdn.poehali.dev/projects/a1aa36d1-74ad-4c6f-b16e-552450f204f0/files/df9127c3-e3e5-4cd3-8a0d-153a867a48c1.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-serif font-semibold text-primary">Голоса тихого Дона</h1>
          <nav className="flex gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">О казачестве</a>
            <a href="#sholokhov" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Тихий Дон</a>
            <a href="#gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Галерея</a>
            <a href="#contacts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/a1aa36d1-74ad-4c6f-b16e-552450f204f0/files/df9127c3-e3e5-4cd3-8a0d-153a867a48c1.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
          <h2 className="text-6xl font-serif font-bold mb-6">Знакомство с донским казачеством</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            Погрузитесь в мир классической литературы через подход, объединяющий текст, визуальные образы и творческое самовыражение. На сайте вы найдете возможность глубже погрузиться в эпоху донского казачества через иллюстрации и визуальные материалы и сможете увидеть, как автор передает дух эпохи, почувствовать атмосферу казачьих степей и быта, параллельно читая роман "Тихий Дон" Шолохова.
            Цель — сделать историю и культуру донского казачества более понятными для читателей. Изучение "Тихого Дона" с помощью искусства на базе Русского музея помогает ощутить окружающую среду персонажей, понять их ценности и мировоззрение.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Узнать больше
            <Icon name="ChevronDown" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h3 className="text-4xl font-serif font-semibold text-primary mb-8 text-center">
              О донском казачестве
            </h3>
            
            <div className="prose prose-lg max-w-none space-y-6 text-foreground/90">
              <p className="text-lg leading-relaxed">
                Донское казачество — одно из старейших казачьих войск России, формировавшееся на берегах 
                великого Дона начиная с XVI века. Казаки создали уникальную культуру, объединившую воинские 
                традиции, православную веру и вольный дух степняков.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 my-12">
                <Card className="border-2 hover:border-accent transition-colors duration-300 animate-scale-in">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon name="Shield" size={32} className="text-accent" />
                    </div>
                    <h4 className="font-serif text-xl font-semibold mb-2">Воинская культура</h4>
                    <p className="text-sm text-muted-foreground">
                      Казаки славились как непревзойденные воины, защитники южных рубежей России
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 hover:border-accent transition-colors duration-300 animate-scale-in" style={{ animationDelay: '0.1s' }}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon name="Users" size={32} className="text-accent" />
                    </div>
                    <h4 className="font-serif text-xl font-semibold mb-2">Самоуправление</h4>
                    <p className="text-sm text-muted-foreground">
                      Казачий круг — демократический орган, решавший важнейшие вопросы жизни войска
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 hover:border-accent transition-colors duration-300 animate-scale-in" style={{ animationDelay: '0.2s' }}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon name="Book" size={32} className="text-accent" />
                    </div>
                    <h4 className="font-serif text-xl font-semibold mb-2">Богатая культура</h4>
                    <p className="text-sm text-muted-foreground">
                      Песни, обряды, промыслы — казачья культура отражена в музеях и литературе
                    </p>
                  </CardContent>
                </Card>
              </div>

              <p className="text-lg leading-relaxed">
                Вклад донских казаков в историю России невозможно переоценить: от обороны границ в XVI-XVII веках 
                до участия в Отечественной войне 1812 года и Первой мировой войне. Казачество стало неотъемлемой 
                частью русской истории и культуры, оставив яркий след в народной памяти.
              </p>
              
              <p className="text-base text-muted-foreground italic">
                Материалы представлены на основе выставки Государственного Русского музея, 
                посвященной донскому казачеству.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="sholokhov" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <img 
                  src="https://cdn.poehali.dev/projects/a1aa36d1-74ad-4c6f-b16e-552450f204f0/files/53dd9cf3-c1a4-4b9c-b936-cdfd2742a652.jpg"
                  alt="Иллюстрация к роману Тихий Дон"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-4xl font-serif font-semibold text-primary mb-6">
                  «Тихий Дон» Михаила Шолохова
                </h3>
                
                <p className="text-lg leading-relaxed mb-6 text-foreground/90">
                  Эпопея Михаила Шолохова «Тихий Дон» — величайшее произведение о донском казачестве, 
                  получившее мировое признание и Нобелевскую премию по литературе. Роман охватывает 
                  период с 1912 по 1922 год и рассказывает о судьбах казачьих семей в годы Первой мировой 
                  войны, революции и Гражданской войны.
                </p>
                
                <p className="text-lg leading-relaxed mb-6 text-foreground/90">
                  Через историю семьи Мелеховых Шолохов показал трагедию донского казачества, 
                  разделенного революционными событиями. Роман стал не только литературным шедевром, 
                  но и важнейшим историческим документом эпохи.
                </p>
                
                <blockquote className="border-l-4 border-accent pl-6 italic text-muted-foreground mb-6">
                  "Тихий Дон" — это голос народа, его боль, его судьба, запечатленная в бессмертных страницах.
                </blockquote>
                
                <div className="flex gap-4">
                  <Button variant="outline" className="group">
                    <Icon name="BookOpen" className="mr-2 group-hover:scale-110 transition-transform" size={18} />
                    Читать о романе
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-serif font-semibold text-primary mb-4 text-center animate-fade-in">
              Фотогалерея
            </h3>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Творчество художников Ореста Верейского и Алексея Кравченко, запечатлевших дух донского казачества 
              в иллюстрациях к произведениям русской литературы
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {artworks.map((artwork, index) => (
                <Card 
                  key={artwork.id}
                  className="group cursor-pointer overflow-hidden border-2 hover:border-accent transition-all duration-300 hover:shadow-xl animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedArtwork(artwork.id)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <Icon name="ZoomIn" size={24} />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h4 className="font-serif text-xl font-semibold mb-2 text-primary group-hover:text-accent transition-colors">
                      {artwork.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      <span className="font-medium">{artwork.artist}</span>, {artwork.year}
                    </p>
                    <p className="text-sm text-foreground/80 mt-2">
                      {artwork.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-muted-foreground text-sm max-w-3xl mx-auto">
                Орест Верейский (1915-1993) и Алексей Кравченко (1889-1940) — выдающиеся мастера книжной графики, 
                чьи иллюстрации к «Тихому Дону» и другим произведениям стали классикой русского искусства XX века.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-serif font-semibold text-primary mb-12 text-center animate-fade-in">
              Контакты
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Адрес</h4>
                    <p className="text-muted-foreground">
                      Государственный Русский музей<br />
                      Санкт-Петербург, Инженерная ул., 4
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <p className="text-muted-foreground">+7 (812) 595-42-48</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@rusmuseum.ru</p>
                  </div>
                </div>
                
                <div className="pt-6">
                  <h4 className="font-semibold mb-4">Социальные сети</h4>
                  <div className="flex gap-3">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-secondary hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition-colors"
                      aria-label="VK"
                    >
                      <Icon name="Share2" size={18} />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-secondary hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition-colors"
                      aria-label="Telegram"
                    >
                      <Icon name="Send" size={18} />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-secondary hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition-colors"
                      aria-label="YouTube"
                    >
                      <Icon name="Youtube" size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted rounded-lg h-80 flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-center text-muted-foreground">
                  <Icon name="Map" size={48} className="mx-auto mb-3 opacity-50" />
                  <p>Интерактивная карта</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h5 className="font-serif text-lg font-semibold mb-4">О проекте</h5>
                <p className="text-sm text-muted-foreground">
                  Культурно-образовательный проект, посвященный истории и культуре донского казачества
                </p>
              </div>
              
              <div>
                <h5 className="font-serif text-lg font-semibold mb-4">Полезные ссылки</h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="https://rusmuseum.ru" className="text-muted-foreground hover:text-accent transition-colors">
                      Русский музей
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                      История казачества
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                      Культурное наследие Дона
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-serif text-lg font-semibold mb-4">Партнёры</h5>
                <ul className="space-y-2 text-sm">
                  <li className="text-muted-foreground">Государственный Русский музей</li>
                  <li className="text-muted-foreground">Музей донского казачества</li>
                  <li className="text-muted-foreground">Литературные архивы</li>
                </ul>
              </div>
            </div>
            
            <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
              <p>© 2024 Голоса тихого Дона. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;