const BooksService = require('./books.service');

const fakeBooks = [{ _id: 1, name: 'Harry Potter' }];

const mockGetAll = jest.fn();

// const MongoLibStub = {
//   getAll: mockGetAll,
//   create: () => {},
// };

/* eslint-disable function-paren-newline, implicit-arrow-linebreak, comma-dangle */
jest.mock('../lib/mongo.lib', () =>
  jest.fn().mockImplementation(() => ({ getAll: mockGetAll, create: () => {} }))
);
/* eslint-enable */

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    test('should return a list of books', async () => {
      // Arrange
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(1);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should return a list of books', async () => {
      // Arrange
      mockGetAll.mockResolvedValue([{ _id: 2, name: 'Harry Potter 2' }]);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(1);
      expect(books[0].name).toEqual('Harry Potter 2');
    });
  });
});
