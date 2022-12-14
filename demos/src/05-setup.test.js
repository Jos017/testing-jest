describe('Group 1', () => {
  beforeAll(() => {
    console.log('beforeAll');
    // up db
  });
  afterAll(() => {
    console.log('afterAll');
    // down db
  });
  beforeEach(() => {
    console.log('beforeEach');
  });
  afterEach(() => {
    console.log('abterEach');
  });

  test('case 1', () => {
    beforeAll(() => {
      console.log('beforeAll');
    });
    console.log('case 1');
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    console.log('case 2');
    expect(1 + 2).toBe(3);
  });

  describe('Group 2', () => {
    beforeAll(() => {
      console.log('beforeAll');
    });

    test('case 3', () => {
      console.log('case 1');
      expect(1 + 1).toBe(2);
    });
    test('case 2', () => {
      console.log('case 2');
      expect(1 + 3).toBe(4);
    });
  });
});
