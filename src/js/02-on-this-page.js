(function () {
  'use strict'

  const toc = document.getElementById('toc')
  const tableOfContents = toc?.getElementsByClassName('sectlevel1')

  if (!toc || !tableOfContents) {
    return
  }

  for (let i = 0; i < tableOfContents.length; i++) {
    document.getElementById('TableOfContents')
      .appendChild(tableOfContents[i])
  }

  toc.parentNode.removeChild(toc)
})()
