import Pager from "../pager.js";

const pg = new Pager({
  itemCount: 100,
  perPage: 10
});

test('init', () => {
  expect(pg.currentPage).toBe(1);
});

test('getCurrentOffset', () => {
  pg.currentPage = 1;
  expect(pg.getCurrentOffset()).toBe(0); 

  pg.currentPage = 2;
  expect(pg.getCurrentOffset()).not.toBe(0); 
});

test('hasPrev', () => {
  pg.currentPage = pg.getTotalPages();
  expect(pg.hasPrev()).toBeTruthy(); 

  pg.currentPage = 1;
  expect(pg.hasPrev()).toBeFalsy(); 
});

test('hasNext', () => {
  pg.currentPage = 1;
  expect(pg.hasNext()).toBeTruthy(); 

  pg.currentPage = pg.getTotalPages();
  expect(pg.hasNext()).toBeFalsy(); 
});

test('prev', () => {
  expect(pg.prev()).toBeTruthy();

  pg.currentPage = 1;
  expect(pg.prev()).toBe(pg.getTotalPages());

  pg.currentPage = pg.getTotalPages();
  expect(pg.prev()).toBe(pg.getTotalPages() - 1);
});

test('next', () => {
  expect(pg.next()).toBeTruthy();

  pg.currentPage = 1;
  expect(pg.next()).toBe(2);

  pg.currentPage = pg.getTotalPages();
  expect(pg.next()).toBe(1);
});

test('isValidPage', () => {
  expect(pg.isValidPage(1)).toBeTruthy();
  expect(pg.isValidPage(pg.getTotalPages())).toBeTruthy();
  
  expect(pg.isValidPage(999)).toBeFalsy();
  expect(pg.isValidPage(0)).toBeFalsy();
});