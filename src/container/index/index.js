import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')
const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Мій блог')

page.append(title)

const POST_LIST = [
  {
    category: [
      { text: 'Важливо', id: 1 },
      { text: 'Нова', id: 2 },
    ],
    info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
    date: '24.01',
    viewed: true,
  },

  {
    category: [{ text: 'Нова', id: 2 }],
    info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.',
    date: '24.01',
    viewed: true,
  },
]

const createPost = () => {
  const postList = createElement('main', 'post__list')

  POST_LIST.forEach((posData) => {
    const post = createElement(
      'div',
      posData.viewed
        ? 'post button post--viewed'
        : 'post button',
    )

    const postHeader = createElement('div', 'post__header')

    const categoryList = createElement(
      'div',
      'post__category-list',
    )

    posData.category.forEach((category) => {
      const categorySpan = createElement(
        'span',
        `post__category post__category--${category.id}`,
        category.text,
      )
      categoryList.append(categorySpan)
    })
    const dateSpan = createElement(
      'span',
      'post__date',
      post.date,
    )
    postHeader.append(categoryList, dateSpan)

    const infoPar = createElement(
      'p',
      'post__info',
      posData.info,
    )
    post.append(postHeader, infoPar)

    postList.append(post)
  })
  return postList
}

const post = createPost()
page.append(post)

const title2 = createElement('h1', 'title', 'Комьюніті')

page.append(title2)

const TABS_LIST = [
  {
    isActive: false,
    info: 'База знань',
  },
  {
    isActive: true,
    info: 'Інформація',
  },
]

const createTabs = () => {
  const tabs = createElement('div', 'tabs')

  TABS_LIST.forEach((tabsData) => {
    const tabItem = createElement(
      'div',
      tabsData.isActive
        ? 'tab__item tab__item--active'
        : 'tab__item',
      tabsData.info,
    )
    tabs.append(tabItem)
  })

  return tabs
}

const tabs = createTabs()
page.append(tabs)

const createPostNew = () => {
  const post = createElement('div', 'post')

  // ===

  const postImg = createElement('img')
  postImg.src = '/img/comfon.png'
  post.append(postImg)

  // ===

  const postContent = createElement('div', 'post__content')

  const postTitle = createElement(
    'h2',
    'post__title',
    `Що таке база знань?`,
  )
  postContent.append(postTitle)

  const postInfo = createElement(
    'p',
    'post__info',
    `База знань - база даних, що містить правила виведення та інформацію про людський досвід і знання в деякій предметній галузі. У системах, що самонавчаються, база знань також містить інформацію, що є результатом вирішення попередніх завдань. `,
  )
  postContent.append(postInfo)

  post.append(postContent)

  // ===

  const postButton = createElement(
    'a',
    'buttons buttons--post',
    `Перейти до ком'юніті у Телеграм`,
  )
  postButton.href = '#'

  post.append(postButton)

  // ===

  return post
}

const posts = createPostNew()
page.append(posts)
