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
      }
    ];
  }
};
