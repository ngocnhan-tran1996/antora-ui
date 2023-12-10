function getListItem (heading, childWrapper) {
  const level = parseInt(heading.nodeName.slice(1), 10) - 1
  const link = document.createElement('a')
  link.textContent = heading.textContent
  link.href = `#${heading.id}`

  const listItem = document.createElement('li')
  listItem.dataset.level = level
  listItem.appendChild(link)

  if (level > 1) {
    childWrapper.appendChild(listItem)
    return childWrapper
  }
  return listItem
}

(function () {
  'use strict'

  const tableOfContents = document.getElementById('TableOfContents')

  if (!tableOfContents) {
    return
  }

  const levels = parseInt(tableOfContents.dataset.levels || 2, 10)

  const articleSelector = 'div.bd-content'
  const article = document.querySelector(articleSelector)
  const headingsSelector = []
  for (let level = 0; level <= levels; level++) {
    const headingSelector = [articleSelector]
    if (level) {
      for (let l = 1; l <= level; l++) {
        headingSelector.push((l === 2 ? '.sectionbody>' : '') + '.sect' + l)
      }
      headingSelector.push('h' + (level + 1) + '[id]')
    } else {
      headingSelector.push('h1[id].sect0')
    }
    headingsSelector.push(headingSelector.join('>'))
  }

  const childWrapper = document.createElement('ul')
  const wrapper = document.createElement('ul')
  const headings = article.parentNode.querySelectorAll(headingsSelector.join(','))
  for (const heading of headings) {
    const listItem = getListItem(heading, childWrapper)
    wrapper.appendChild(listItem)
  }

  tableOfContents.appendChild(wrapper)
})()
