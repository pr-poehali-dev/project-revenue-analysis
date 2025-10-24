import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { label: 'Всего проектов', value: '24', change: '+12%', icon: 'Briefcase', color: 'text-blue-600' },
    { label: 'Общая выручка', value: '₽2.4М', change: '+23%', icon: 'DollarSign', color: 'text-green-600' },
    { label: 'В работе', value: '8', change: '+3', icon: 'Clock', color: 'text-orange-600' },
    { label: 'Конверсия', value: '67%', change: '+5%', icon: 'TrendingUp', color: 'text-purple-600' },
  ];

  const projects = [
    { id: 1, name: 'Ребрендинг сайта', client: 'ООО "Технологии"', stage: 'Разработка', manager: 'Анна Петрова', service: 'Веб-дизайн', revenue: 450000, probability: 90, daysInStage: 12 },
    { id: 2, name: 'Мобильное приложение', client: 'StartUp Inc', stage: 'Согласование', manager: 'Иван Смирнов', service: 'Разработка', revenue: 850000, probability: 75, daysInStage: 5 },
    { id: 3, name: 'Корпоративный портал', client: 'Банк "Столица"', stage: 'Тестирование', manager: 'Анна Петрова', service: 'Веб-разработка', revenue: 1200000, probability: 95, daysInStage: 8 },
    { id: 4, name: 'Лендинг продукта', client: 'Маркет Плюс', stage: 'Новый', manager: 'Петр Козлов', service: 'Веб-дизайн', revenue: 180000, probability: 50, daysInStage: 2 },
    { id: 5, name: 'CRM система', client: 'Логистика 24', stage: 'Разработка', manager: 'Иван Смирнов', service: 'Разработка', revenue: 950000, probability: 80, daysInStage: 18 },
  ];

  const services = [
    { name: 'Веб-дизайн', count: 8, used: 12 },
    { name: 'Веб-разработка', count: 6, used: 9 },
    { name: 'Мобильная разработка', count: 3, used: 5 },
    { name: 'Консалтинг', count: 2, used: 4 },
    { name: 'SEO оптимизация', count: 5, used: 7 },
  ];

  const managers = [
    { name: 'Анна Петрова', projects: 8, revenue: 2100000, conversion: 72 },
    { name: 'Иван Смирнов', projects: 6, revenue: 1800000, conversion: 68 },
    { name: 'Петр Козлов', projects: 5, revenue: 980000, conversion: 60 },
    { name: 'Мария Волкова', projects: 5, revenue: 1450000, conversion: 75 },
  ];

  const getStageColor = (stage: string) => {
    const colors: Record<string, string> = {
      'Новый': 'bg-gray-100 text-gray-700',
      'Согласование': 'bg-blue-100 text-blue-700',
      'Разработка': 'bg-orange-100 text-orange-700',
      'Тестирование': 'bg-purple-100 text-purple-700',
      'Завершен': 'bg-green-100 text-green-700',
    };
    return colors[stage] || 'bg-gray-100 text-gray-700';
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Icon name="BarChart3" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-semibold text-slate-900">CRM Analytics</h1>
            </div>
            <Button className="gap-2">
              <Icon name="Download" size={16} />
              Экспорт в Excel
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-white p-1 shadow-sm">
            <TabsTrigger value="dashboard" className="gap-2">
              <Icon name="LayoutDashboard" size={16} />
              Дашборд
            </TabsTrigger>
            <TabsTrigger value="projects" className="gap-2">
              <Icon name="Briefcase" size={16} />
              Проекты
            </TabsTrigger>
            <TabsTrigger value="analytics" className="gap-2">
              <Icon name="BarChart3" size={16} />
              Аналитика
            </TabsTrigger>
            <TabsTrigger value="services" className="gap-2">
              <Icon name="Package" size={16} />
              Услуги
            </TabsTrigger>
            <TabsTrigger value="managers" className="gap-2">
              <Icon name="Users" size={16} />
              Менеджеры
            </TabsTrigger>
            <TabsTrigger value="reports" className="gap-2">
              <Icon name="FileText" size={16} />
              Отчеты
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 bg-white hover:shadow-lg transition-shadow animate-fade-in">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-slate-600 mb-1">{stat.label}</p>
                      <p className="text-3xl font-semibold text-slate-900">{stat.value}</p>
                      <p className="text-sm text-green-600 mt-2 font-medium">{stat.change}</p>
                    </div>
                    <div className={`p-3 rounded-xl bg-slate-50 ${stat.color}`}>
                      <Icon name={stat.icon as any} size={24} />
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6 bg-white">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Icon name="PieChart" size={20} />
                  Проекты по этапам
                </h3>
                <div className="space-y-4">
                  {['Новый', 'Согласование', 'Разработка', 'Тестирование', 'Завершен'].map((stage, i) => {
                    const count = projects.filter(p => p.stage === stage).length;
                    const percentage = (count / projects.length) * 100;
                    return (
                      <div key={stage} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-700">{stage}</span>
                          <span className="font-medium">{count}</span>
                        </div>
                        <Progress value={percentage} className="h-2" />
                      </div>
                    );
                  })}
                </div>
              </Card>

              <Card className="p-6 bg-white">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Icon name="TrendingUp" size={20} />
                  Выручка по услугам
                </h3>
                <div className="space-y-4">
                  {services.map((service, i) => {
                    const avgRevenue = (Math.random() * 500000 + 200000);
                    return (
                      <div key={service.name} className="flex items-center justify-between pb-3 border-b last:border-0">
                        <div>
                          <p className="font-medium text-slate-900">{service.name}</p>
                          <p className="text-sm text-slate-500">{service.used} использований</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-slate-900">{formatCurrency(avgRevenue)}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-4">
            <Card className="bg-white">
              <div className="p-6 border-b flex items-center justify-between">
                <h2 className="text-xl font-semibold">Карточки проектов</h2>
                <div className="flex gap-3">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все этапы</SelectItem>
                      <SelectItem value="new">Новый</SelectItem>
                      <SelectItem value="dev">Разработка</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" className="gap-2">
                    <Icon name="Filter" size={16} />
                    Фильтр
                  </Button>
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Проект</TableHead>
                    <TableHead>Этап</TableHead>
                    <TableHead>Менеджер</TableHead>
                    <TableHead>Услуга</TableHead>
                    <TableHead>Дней на этапе</TableHead>
                    <TableHead>Вероятность</TableHead>
                    <TableHead className="text-right">Выручка</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map((project) => (
                    <TableRow key={project.id} className="hover:bg-slate-50 transition-colors">
                      <TableCell>
                        <div>
                          <p className="font-medium text-slate-900">{project.name}</p>
                          <p className="text-sm text-slate-500">{project.client}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStageColor(project.stage)} variant="secondary">
                          {project.stage}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-slate-700">{project.manager}</TableCell>
                      <TableCell className="text-slate-700">{project.service}</TableCell>
                      <TableCell>
                        <span className="text-slate-600">{project.daysInStage} дн.</span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={project.probability} className="h-2 w-16" />
                          <span className="text-sm font-medium">{project.probability}%</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right font-semibold text-slate-900">
                        {formatCurrency(project.revenue)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="p-6 bg-white lg:col-span-2">
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                  <Icon name="LineChart" size={20} />
                  Динамика выручки
                </h3>
                <div className="h-64 flex items-end justify-between gap-2">
                  {[65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88, 92].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-primary/10 rounded-t-lg relative group cursor-pointer hover:bg-primary/20 transition-colors" style={{ height: `${height}%` }}>
                        <div className="absolute inset-0 bg-gradient-to-t from-primary to-primary/50 rounded-t-lg" />
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                          {formatCurrency(height * 10000)}
                        </div>
                      </div>
                      <span className="text-xs text-slate-500">{['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'][i]}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-white">
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                  <Icon name="Target" size={20} />
                  Ключевые метрики
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-600">Средний чек</span>
                      <span className="font-semibold">₽520K</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-600">Цикл сделки</span>
                      <span className="font-semibold">24 дня</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-600">NPS</span>
                      <span className="font-semibold">8.4/10</span>
                    </div>
                    <Progress value={84} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-600">Повтор. клиенты</span>
                      <span className="font-semibold">42%</span>
                    </div>
                    <Progress value={42} className="h-2" />
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="services" className="space-y-4">
            <Card className="bg-white">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold">Услуги</h2>
                <p className="text-sm text-slate-500 mt-1">Управление услугами и отслеживание использования</p>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Название услуги</TableHead>
                    <TableHead>Активных проектов</TableHead>
                    <TableHead>Всего использований</TableHead>
                    <TableHead className="text-right">Средняя выручка</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {services.map((service) => {
                    const avgRevenue = (Math.random() * 500000 + 200000);
                    return (
                      <TableRow key={service.name} className="hover:bg-slate-50">
                        <TableCell className="font-medium text-slate-900">{service.name}</TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                            {service.count} активных
                          </Badge>
                        </TableCell>
                        <TableCell className="text-slate-700">{service.used} раз</TableCell>
                        <TableCell className="text-right font-semibold text-slate-900">
                          {formatCurrency(avgRevenue)}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="managers" className="space-y-4">
            <Card className="bg-white">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold">Менеджеры</h2>
                <p className="text-sm text-slate-500 mt-1">Эффективность работы менеджеров</p>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Менеджер</TableHead>
                    <TableHead>Проектов</TableHead>
                    <TableHead>Выручка</TableHead>
                    <TableHead>Конверсия</TableHead>
                    <TableHead className="text-right">Средний чек</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {managers.map((manager) => (
                    <TableRow key={manager.name} className="hover:bg-slate-50">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                            {manager.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="font-medium text-slate-900">{manager.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{manager.projects}</Badge>
                      </TableCell>
                      <TableCell className="font-semibold text-slate-900">
                        {formatCurrency(manager.revenue)}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={manager.conversion} className="h-2 w-20" />
                          <span className="text-sm font-medium">{manager.conversion}%</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right font-semibold text-slate-900">
                        {formatCurrency(manager.revenue / manager.projects)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-white hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                    <Icon name="FileText" size={24} />
                  </div>
                  <Badge variant="secondary">Доступен</Badge>
                </div>
                <h3 className="text-lg font-semibold mb-2">Отчет по проектам</h3>
                <p className="text-sm text-slate-500 mb-4">Подробная информация о всех проектах, этапах и сроках</p>
                <Button variant="outline" className="w-full gap-2">
                  <Icon name="Download" size={16} />
                  Скачать Excel
                </Button>
              </Card>

              <Card className="p-6 bg-white hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-green-50 text-green-600 group-hover:bg-green-100 transition-colors">
                    <Icon name="DollarSign" size={24} />
                  </div>
                  <Badge variant="secondary">Доступен</Badge>
                </div>
                <h3 className="text-lg font-semibold mb-2">Финансовый отчет</h3>
                <p className="text-sm text-slate-500 mb-4">Анализ выручки, прибыли и финансовых показателей</p>
                <Button variant="outline" className="w-full gap-2">
                  <Icon name="Download" size={16} />
                  Скачать Excel
                </Button>
              </Card>

              <Card className="p-6 bg-white hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-purple-50 text-purple-600 group-hover:bg-purple-100 transition-colors">
                    <Icon name="Users" size={24} />
                  </div>
                  <Badge variant="secondary">Доступен</Badge>
                </div>
                <h3 className="text-lg font-semibold mb-2">Отчет по менеджерам</h3>
                <p className="text-sm text-slate-500 mb-4">Эффективность работы менеджеров и KPI</p>
                <Button variant="outline" className="w-full gap-2">
                  <Icon name="Download" size={16} />
                  Скачать Excel
                </Button>
              </Card>

              <Card className="p-6 bg-white hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-100 transition-colors">
                    <Icon name="Package" size={24} />
                  </div>
                  <Badge variant="secondary">Доступен</Badge>
                </div>
                <h3 className="text-lg font-semibold mb-2">Отчет по услугам</h3>
                <p className="text-sm text-slate-500 mb-4">Статистика использования услуг и популярность</p>
                <Button variant="outline" className="w-full gap-2">
                  <Icon name="Download" size={16} />
                  Скачать Excel
                </Button>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
