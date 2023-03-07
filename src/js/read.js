import { getMarkupError } from './error';
import { isFavoriteForStyle, isReadForStyle } from './favoriteReadStyles';
import { getMarkup } from "./fetches/getMarkup";
import { refs } from './refs';

// isReadForStyle("https://www.nytimes.com/2023/03/06/travel/taliesin-frank-lloyd-wright-wisconsin-baking-class.html");
// isReadForStyle("https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollByPages");
// isFavoriteForStyle("https://www.nytimes.com/2023/03/06/travel/taliesin-frank-lloyd-wright-wisconsin-baking-class.html");
// isReadForStyle("https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollByPages");

// =======================  FOR TEST ==============================

const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=MCCbLUuNkLgrOf1uBr1c9zmSoKm3Mp9g`;
const btnFetch = document.querySelector('.test-fetch');

btnFetch.addEventListener('click', onOpenNews);

async function onFetch() {
  try {
    const response = await fetch(URL);
    const newsAll = await response.json();
    return newsAll;
  } catch (err) {
    console.log(err);
  }
}

async function onOpenNews() {
  try {
    const newsAll = await onFetch();
    makeNews(newsAll.response.docs);
  } catch (error) {
    console.log(error);
  }
}

function makeNews(arrNews) {
  try {
    const markapNews = arrNews
      .map(
        ({ headline, web_url, pub_date, snippet, multimedia, keywords }) =>
          `<li class="news-item ${isReadForStyle(web_url)}">
        <img class="news-item__img" src="https://www.nytimes.com/${
          multimedia[2].url
        }" alt="${keywords[0].value}">
        <div class="news-item__buttons">
         <button type="button" class="news-item__btn">Add to favorite</button>
         <button type="button" class="news-item__category">Job searching </button>
        </div>
        <div class="news-item__wrapper-text">
          <h2 class="news-item__title">${headline.main}</h2>
          <p class="news-item__text">${snippet}</p>
        </div>
        <div class="news-item__wrapper-date">
          <p class="news-item__date">${
            new Date(pub_date).toLocaleString().split(',')[0]
          }</p>
          <a href="${web_url}" class="news-item__link">Read more</a>
        </div>
        </li>`
      )
      .join('');
    listNews.insertAdjacentHTML('beforeend', markapNews);
  } catch (err) {
    const markapNews = arrNews
      .map(
        ({ headline, web_url, pub_date, snippet, multimedia, keywords }) =>
          `<li class="news-item ${isReadForStyle(web_url)}">
        <img class="news-item__img" src="https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg" alt="${
          keywords[0].value
        }">
        <div class="news-item__buttons">
         <button type="button" class="news-item__btn">Add to favorite</button>
         <button type="button" class="news-item__category">Job searching </button>
        </div>
        <div class="news-item__wrapper-text">
          <h2 class="news-item__title">${headline.main}</h2>
          <p class="news-item__text">${snippet}</p>
        </div>
        <div class="news-item__wrapper-date">
          <p class="news-item__date">${
            new Date(pub_date).toLocaleString().split(',')[0]
          }</p>
          <a href="${web_url}" class="news-item__link">Read more</a>
        </div>
        </li>`
      )
      .join('');
    listNews.insertAdjacentHTML('beforeend', markapNews);
  }
}

// =======================  FOR TEST ==============================

// const KEY_LOCAL_STORAGE = 'read-news-local-storage';
const listNews = document.querySelector('.list-news');
const btnReadPage = document.querySelector('.read-page');
const listReadNews = document.querySelector('.readPage-list');



function createNewData() {
  return new Date(Date.now()).toLocaleString().split(',')[0];
}

listReadNews.addEventListener('click', onBtnReadMore);


function onBtnReadMore(e) {
  // =======================  FOR TEST ==============================
  e.preventDefault();
  // =======================  FOR TEST ==============================

  if (e.target.nodeName !== 'A') {
    return;
  };

  const newsCard = e.target.parentNode.parentNode;
  const newsObj = makeObjectNews(newsCard);
  
  try {
    const newsAllLocalStorage = JSON.parse(
      localStorage.getItem(refs.KEY_LOCAL_STORAGE)
    );

    if (newsAllLocalStorage === null) {
      localStorage.setItem(refs.KEY_LOCAL_STORAGE, JSON.stringify([newsObj]));
      return;
    }

    if (newsAllLocalStorage !== null) {
      for (const news of newsAllLocalStorage) {

        if (news.link === newsObj.link) {

          news.dateOfRead = createNewData();
          return;
        }
      }

      newsAllLocalStorage.push(newsObj);
      localStorage.setItem(
        refs.KEY_LOCAL_STORAGE,
        JSON.stringify(newsAllLocalStorage)
      );
    }
  } catch (error) {
    console.log('Error parse date local storage');
  }
}

function makeObjectNews(newsCard) {
    // const newsCard = e.target.parentNode.parentNode;
  const section = newsCard.querySelector('.home__list-section').textContent;
  const img = newsCard.querySelector('.home__list-img').src;
  const alt = newsCard.querySelector('.home__list-img').alt;
  const title = newsCard.querySelector('.home__list-title').textContent;
  const text = newsCard.querySelector('.home__list-text').textContent;
  const date = newsCard.querySelector('.home__list-date').textContent;
  const link = newsCard.querySelector('.home__list-link').href;
  const dateOfRead = createNewData();

  const newsObj = {
    section,
    img,
    alt,
    title,
    text,
    date,
    link,

    isRead: true,
    dateOfRead,
  };

  console.log(newsObj);
  return newsObj;

};


btnReadPage.addEventListener('click', makeArrNewsForPageRead);

function makeArrNewsForPageRead() {
  try {
    const newsAllGetLocalStorage = JSON.parse(
      localStorage.getItem(refs.KEY_LOCAL_STORAGE)
    );

    const arrNewsIsRead = newsAllGetLocalStorage.reduce((arrNews, news) => {
      if (news.isRead) {
        arrNews.push(news);
      }

      return arrNews;
    }, []);

    makeMarkapPageRead(arrNewsIsRead);
  } catch (error) {
    const container = document.querySelector('.container');
    container.innerHTML = getMarkupError();
  }
}

function makeMarkapPageRead(arrayNewsRead) {

  const allDates = arrayNewsRead
    .flatMap(newsRead => newsRead.dateOfRead)
    .filter((date, idx, arr) => arr.indexOf(date) === idx);

    function makeArrNewsDate(date, arrNews) {
        const arrFilterDataNews = arrNews.filter((news) => news.dateOfRead === date);
        return getMarkup(arrFilterDataNews);
    };


    

  const markapDatesRead = allDates
    .map(
      date =>
        `<li class="readPage-list__item">${date}<ul class="readPage-list__list">${makeArrNewsDate(date, arrayNewsRead)}</ul></li>`
    )
    .join('');

  listReadNews.insertAdjacentHTML('beforeend', markapDatesRead);

  };


  listReadNews.addEventListener('click', openListsReadNews);

  function openListsReadNews(e) {

    if (e.target.nodeName !== 'LI') {
        return;
      };
    
    const itemListReadNews = e.target.firstElementChild;
    itemListReadNews.classList.toggle('visually-hidden');
   };

export { onBtnReadMore, makeArrNewsForPageRead};

