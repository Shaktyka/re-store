// Получение данных о книгах
export default class BookstoreService {

  data = [
      {
        id: 1,
        title: 'Production-Ready Microservices',
        author: 'Susan J. Fowler',
        price: 100,
        coverImg: 'https://cv3.litres.ru/pub/c/pdf-kniga/cover_415/50445630-kris-richardson-2184-mikroservisy-patterny-razrabotki-i-refaktori-50445630.jpg'
      },
      {
        id: 2,
        title: 'Release It!',
        author: 'Michael T. Nygard',
        price: 70,
        coverImg: 'https://cv3.litres.ru/pub/c/pdf-kniga/cover_415/16901930-maykl-neygard-release-it-proektirovanie-i-dizayn-po-dlya-teh-komu-ne-vse-ravno-16901930.jpg'
      },
      {
        id: 3,
        title: 'Грокаем глубокое обучение',
        author: 'Эндрю Траск',
        price: 50,
        coverImg: 'https://cv3.litres.ru/pub/c/pdf-kniga/cover_415/48613333-endru-trask-21142618-grokaem-glubokoe-obuchenie-48613333.jpg'
      },
      {
        id: 4,
        title: 'Алгоритмы. Разработка и применение',
        author: 'Джон Клейнберг, Ева Тардос',
        price: 35,
        coverImg: 'https://cv4.litres.ru/pub/c/pdf-kniga/cover_415/18305944-dzh-kleynberg-algoritmy-razrabotka-i-primenenie-18305944.jpg'
      },
      {
        id: 5,
        title: 'Чистая архитектура. Искусство разработки программного обеспечения',
        author: 'Роберт Мартин',
        price: 110,
        coverImg: 'https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/39113892-robert-s-martin-chistaya-arhitektura-iskusstvo-razrabotki-program-39113892.jpg'
      },
      {
        id: 6,
        title: 'Создание микросервисов',
        author: 'Сэм Ньюмен',
        price: 45,
        coverImg: 'https://cv6.litres.ru/pub/c/pdf-kniga/cover_415/18307468-sem-numen-sozdanie-mikroservisov-18307468.jpg'
      }
    ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
      }, 700);
    });
  }
};
