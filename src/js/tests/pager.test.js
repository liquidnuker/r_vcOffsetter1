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
});

test('next', () => {
  expect(pg.next()).toBeTruthy();
});

test('isValidPage', () => {
  expect(pg.isValidPage(1)).toBeTruthy();
  expect(pg.isValidPage(pg.getTotalPages())).toBeTruthy();
  
  expect(pg.isValidPage(999)).toBeFalsy();
  expect(pg.isValidPage(0)).toBeFalsy();
});