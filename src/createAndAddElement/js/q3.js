const japaneseList = document.querySelector('.japanese-list');

const firstRow = document.createElement('li');
firstRow.textContent = 'あいうえお';
japaneseList.insertBefore(firstRow, japaneseList.firstChild);

const lastRow = document.createElement('li');
lastRow.textContent = 'たちつてと';
japaneseList.append(lastRow);