// Получение данных о книгах
export default class BookstoreService {

  getBooks() {
    return [
      {
        id: 1,
        title: 'Production-Ready Microservices',
        author: 'Susan J. Fowler',
        price: 1000,
        coverImg: 'https://cv3.litres.ru/pub/c/pdf-kniga/cover_415/50445630-kris-richardson-2184-mikroservisy-patterny-razrabotki-i-refaktori-50445630.jpg'
      },
      {
        id: 2,
        title: 'Release It!',
        author: 'Michael T. Nygard',
        price: 700,
        coverImg: 'https://cv3.litres.ru/pub/c/pdf-kniga/cover_415/16901930-maykl-neygard-release-it-proektirovanie-i-dizayn-po-dlya-teh-komu-ne-vse-ravno-16901930.jpg'
      },
      {
        id: 3,
        title: 'Грокаем глубокое обучение',
        author: 'Эндрю Траск',
        price: 489,
        coverImg: 'https://cv3.litres.ru/pub/c/pdf-kniga/cover_415/48613333-endru-trask-21142618-grokaem-glubokoe-obuchenie-48613333.jpg'
      },
      {
        id: 4,
        title: 'Алгоритмы. Разработка и применение',
        author: 'Авторы:Джон Клейнберг, Ева Тардос',
        price: 349,
        coverImg: 'https://cv4.litres.ru/pub/c/pdf-kniga/cover_415/18305944-dzh-kleynberg-algoritmy-razrabotka-i-primenenie-18305944.jpg'
      }
    ];
  }
};
