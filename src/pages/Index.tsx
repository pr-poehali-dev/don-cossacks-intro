import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<number | null>(null);
  const [isWarCultureOpen, setIsWarCultureOpen] = useState(false);
  const [isSelfGovernmentOpen, setIsSelfGovernmentOpen] = useState(false);
  const [isCultureOpen, setIsCultureOpen] = useState(false);

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
              О казачестве
            </h3>
            
            <div className="prose prose-lg max-w-none space-y-6 text-foreground/90">
              <p className="text-lg leading-relaxed">
                Казаки занимались охраной рубежей, военными походами, и, спустя время, стали важной частью армии. Они создали свои автономные области, в которых царил строгий порядок, при этом часто сохраняли независимость от центральной власти.
              </p>
              
              <p className="text-lg leading-relaxed">
                Во время Империи казаки служили важными союзниками воинами на Кавказе, Сибири и в других областях. Служба казаков заключалась в защите границ, а также в активном участии в войнах, когда это требовалось. Но казачьи отношения с властью оставались сложными, даже напряжёнными. А когда пришли большевики, то отношения накалились до предела. Революция столкнулась с традициями. Казачьи общества были основаны на верности патриархальным порядкам. Поэтому большинство из них были довольно скептически настроены к большевикам.
              </p>

              <p className="text-lg leading-relaxed">
                После Октябрьской революции 1917 года, когда большевики пришли к власти, началась гражданская война. В то время как одна часть казаков поддержала большевиков, другая, напротив, выступила против них, решив сохранить своё самоуправление и традиционные ценности. Это привело к разделению казачества: те, кто поддерживал советскую власть, были известны как «красные казаки», а те, кто сражался против большевиков, стали «белыми».
              </p>

              <p className="text-lg leading-relaxed font-semibold">
                Почему же многие казаки стали на сторону Белых, а не Красных? Ответ на этот вопрос скрывается в социально-политических особенностях казачества.
              </p>

              <ul className="list-disc pl-6 space-y-4 text-lg leading-relaxed">
                <li>
                  <strong>Независимость и самоуправление.</strong> Казаки всегда гордились своей независимостью. Им не нравилась идея революционного централизма, которую продвигали большевики. Создание советской власти означало потерю автономии для казачьих областей, что противоречило многовековой традиции самоуправления.
                </li>
                <li>
                  <strong>Традиционные ценности.</strong> В отличие от большевиков, которые призывали к уничтожению частной собственности, казаки были привержены крепким семейным ценностям и помещичьему землевладению. Многие казаки видели в большевиках угрозу для своей собственности и традиционного уклада жизни.
                </li>
                <li>
                  <strong>Поддержка Белых.</strong> Во время гражданской войны множество казаков поддержало Белых, которые, в свою очередь, предложили им большую степень автономии, что было привлекательно для казачества.
                </li>
              </ul>

              <p className="text-lg leading-relaxed">
                Под давлением большевиков казаки теряли свою историческую независимость. Советская власть не позволяла сохранять традиции, запретив создание самостоятельных казачьих войск и введя политику коллективизации в сельском хозяйстве. Так система самоуправления, существовавшая веками, была окончательно разрушена.
              </p>

              <p className="text-lg leading-relaxed">
                В 1920-х годах большинство казаков было либо уничтожено, либо было вынуждено переселиться в другие районы Советского Союза. На Кубани и Дону были созданы новые колхозы.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <Card 
                className="border-2 border-accent/30 cursor-pointer hover:border-accent transition-colors duration-300"
                onClick={() => setIsWarCultureOpen(!isWarCultureOpen)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-2xl font-serif font-semibold text-primary">Воинская культура</h4>
                    <Icon 
                      name={isWarCultureOpen ? "ChevronUp" : "ChevronDown"} 
                      size={28} 
                      className="text-accent transition-transform duration-300"
                    />
                  </div>
                  
                  {isWarCultureOpen && (
                    <div className="mt-6 pt-6 border-t border-border animate-fade-in">
                      <p className="text-lg leading-relaxed text-foreground/90">
                        Казаков всегда отправляли на важнейшие рубежи страны, где больше никто не выстоит. Служили и кровь проживали они не за награду, а за свободу, Родину и православную веру. Казаки - победители. Они рождают настроение в обществе, считают, что нет ничего невозможного, особенно когда речь заходит о границах нашей страны.
                      </p>
                      <p className="text-sm text-muted-foreground italic mt-4">
                        (Репортаж Алексея Комарова)
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card 
                className="border-2 border-accent/30 cursor-pointer hover:border-accent transition-colors duration-300"
                onClick={() => setIsSelfGovernmentOpen(!isSelfGovernmentOpen)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-2xl font-serif font-semibold text-primary">Самоуправление</h4>
                    <Icon 
                      name={isSelfGovernmentOpen ? "ChevronUp" : "ChevronDown"} 
                      size={28} 
                      className="text-accent transition-transform duration-300"
                    />
                  </div>
                  
                  {isSelfGovernmentOpen && (
                    <div className="mt-6 pt-6 border-t border-border animate-fade-in">
                      <p className="text-lg leading-relaxed text-foreground/90">
                        Независимость и традиционные ценности
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card 
                className="border-2 border-accent/30 cursor-pointer hover:border-accent transition-colors duration-300"
                onClick={() => setIsCultureOpen(!isCultureOpen)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-2xl font-serif font-semibold text-primary">Культура</h4>
                    <Icon 
                      name={isCultureOpen ? "ChevronUp" : "ChevronDown"} 
                      size={28} 
                      className="text-accent transition-transform duration-300"
                    />
                  </div>
                  
                  {isCultureOpen && (
                    <div className="mt-6 pt-6 border-t border-border animate-fade-in">
                      <p className="text-lg leading-relaxed text-foreground/90">
                        Образ казака формировался в работах художников XVIII–XX веков на пересечении двух противоположных начал. Первое представляло казачество как бурную человеческую стихию, вольницу, представители которой обладают гордым, неукротимым нравом. Второе же подчеркивало принадлежность казаков Российскому государству, преданная служба которому позволяла им отстоять своеобразие своей культуры и свои сословные привилегии.
                      </p>
                      <p className="text-lg leading-relaxed text-foreground/90 mt-4">
                        Казачьи подразделения русской армии стали предметом художественной документалистики, в произведениях которой запечатлены типажи воинов и детали их обмундирования. Рисунки такого рода гравировались, издавались в альбомах и воспроизводились на коллекционной продукции российских фарфоровых заводов.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <p className="text-base text-muted-foreground italic mt-8 text-center">
                Материалы представлены на основе выставки Государственного Русского музея, посвящённой донскому казачеству.
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
                  src="https://cdn.poehali.dev/files/83cdb75a-fc6a-49fd-bee5-669cdd4d0fbf.png"
                  alt="Роман-газета Тихий Дон"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-4xl font-serif font-semibold text-primary mb-6">
                  «Тихий Дон» Михаила Александровича Шолохова
                </h3>
                
                <p className="text-lg leading-relaxed mb-6 text-foreground/90">
                  Роман-эпопея в четырёх томах. Первый том романа был завершён к весне 1927 года, второй — через год, к началу 1928-го. Ещё через год был окончен третий том, но его публикация, начатая в 1929 году, по ряду причин была остановлена и возобновилась только в январе 1932-го. Дольше всего Шолохов работал над четвёртой книгой «Тихого Дона»: о намерении писать продолжение он заговорил ещё в 1932 году, но завершена книга была только в 1940-м.
                </p>
                
                <p className="text-lg leading-relaxed mb-6 text-foreground/90">
                  Одно из наиболее значимых произведений мировой русской литературы XX века, рисующее широкую панораму жизни донского казачества во время Первой мировой войны, революционных событий 1917 года и Гражданской войны в России.
                </p>

                <p className="text-lg leading-relaxed mb-6 text-foreground/90">
                  Александровичу Шолохову была присуждена Нобелевская премия по литературе с формулировкой: «За художественную силу и цельность эпоса о донском казачестве в переломное для России время». В центре повествования — герои, связанные друг с другом семейными узами и романтическими отношениями; на их судьбу оказывают влияние реальные исторические события, войны и революции.
                </p>

                <p className="text-lg leading-relaxed mb-6 text-foreground/90">
                  Самая яркая отличительная черта романа — язык, которым наполняется эта старая, даже архаичная сюжетная схема: специфический, полный южных регионализмов («вечерять», «здорово дневали», «гутарить», «станичники»). Причём язык этот характерен не только для персонажей, но и для повествователя.
                  Кроме того, в структуру эпопеи Шолохов вводит персонажей как будто «нероманных» — казаков, которые раньше становились скорее героями очерков и рассказов.
                </p>

                <p className="text-lg leading-relaxed mb-6 text-foreground/90">
                  Дон в романе — не столько место действия, сколько ключевой образ. Вокруг него компонуются самые важные сцены — начиная со встречи Григория с Аксиньей и кончая её гибелью; в нём топится Дарья; в его воды Григорий в финале выбрасывает свою винтовку и пистолет.
                  Ирина Медведева-Томашевская обращала внимание, что песни в частности и фольклор вообще — важная часть поэтики романа. Именно из них Шолохов берёт важную тему казачьей земли как свободной и опасной территории, которая живёт по своим, неведомым чужакам законам. Оттуда же в роман приходит и сам эпитет «тихий». Одну казачью песню автор использует как эпиграф к роману.
                </p>
                
                <blockquote className="border-l-4 border-accent pl-6 italic text-muted-foreground mb-6">
                  "Ой ты, наш батюшка тихий Дон!<br />
                  Ой, что же ты, тихий Дон, мутнёхонек течешь?<br />
                  Ах, как мне, тихому Дону, не мутну течи!<br />
                  Со дна меня, тиха Дона, студёны ключи бьют,<br />
                  Посередь меня, тиха Дона, бела рыбица мути".
                </blockquote>

                <p className="text-lg leading-relaxed mb-6 text-foreground/90">
                  Шолохов, как утверждают его биографы, с самого начала работы над «Тихим Доном» детально изучал историю казачества и Гражданской войны, которую видел подростком. В частности, мемуары деятелей Белого движения, например Деникина. Во многом успех и значительность «Тихого Дона» были предопределены тем, что роман — едва ли не единственный источник, из которого советская читающая публика могла узнать реальную историю Первой мировой и Гражданской войн. События Первой мировой не только в художественной литературе, но и в учебниках по истории, да и просто в быту были фигурой умолчания. Шолохов же детально описывает Австрийский фронт, на котором воюет Григорий, события в Восточной Пруссии, Брусиловский прорыв и многое другое. В главах, посвящённых Гражданской войне, Шолохов подробно рассказывает не о героизированных официальной идеологией событиях, а, например, о Ледяном походе Добровольческой армии в Екатеринодар или об эвакуации противников большевиков. Более того, некоторые деятели Белого движения тут даны как очевидно положительные персонажи. Пример — атаман Краснов, который показан как антипод солдафона Деникина. Наконец, подробно и достоверно описано Вёшенское восстание казаков против Красной армии: террор большевиков, грабёж, насилие и ответные расправы над большевиками.
                </p>
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