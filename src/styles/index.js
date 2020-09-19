/* eslint-disable */

const styles = [
  {
    type: 'href',
    body: '/css/normalize.css',
  },
  {
    type: 'href',
    body: '/css/webflow.css',
  },
  {
    type: 'href',
    body: '/css/photolite-academy.webflow.css',
  },
  {
    type: 'sheet',
    body: '.af-view .af-class-progressbar{margin-top:10px;counter-reset:step;clear:both;list-style:none;width:700px;display:flex;align-items:center;padding-inline-start:0}.af-view .af-class-progress-header{text-align:center;padding-top:30px;margin-bottom:0}.af-view .af-class-progressbar li{font-family:Exo,sans-serif;width:20%;float:left;position:relative;text-align:center}.af-view .af-class-progressbar li:before{content:counter(step);counter-increment:step;width:25px;line-height:25px;display:block;color:#fff;font-size:16px;font-family:exo,sans-serif;font-weight:600;border:6px solid #ececec;background:#fadda6;border-radius:19px;margin:0 auto 4px}.af-view .af-class-progressbar li:after{content:\'\';width:85%;height:3px;background:#b9b9b9;position:absolute;left:-42%;top:17px;z-index:-1}.af-view .af-class-progressbar li:first-child:after{content:none}.af-view .af-class-progress-payment li{width:50%}.af-view .af-class-progressbar li.af-class-active:after,.af-view .af-class-progressbar li.af-class-active:before{background:#e74c32;color:#fff}.af-view .af-class-progressbar li.af-class-complete:after{background:#e74c32}.af-view .af-class-progressbar li.af-class-half-complete:after{background:linear-gradient(to right,#e74c32 50%,#b9b9b9 50%);color:#fff}@media screen and (max-width:1407px){.af-view .af-class-progressbar{width:400px}}@media screen and (max-width:1260px){.af-view .af-class-progressbar{width:100%;padding-bottom:40px}.af-view .af-class-header-splitter{display:block}.af-view .af-class-section-heading.af-class-portal{margin-bottom:30px}}',
  },
  {
    type: 'sheet',
    body: '.af-view .af-class-instagram_profile{display:none}',
  },
]

const loadingStyles = styles.map((style) => {
  let styleEl
  let loading

  if (style.type == 'href') {
    styleEl = document.createElement('link')

    loading = new Promise((resolve, reject) => {
      styleEl.onload = resolve
      styleEl.onerror = reject
    })

    styleEl.rel = 'stylesheet'
    styleEl.type = 'text/css'
    styleEl.href = style.body
  }
  else {
    styleEl = document.createElement('style')
    styleEl.type = 'text/css'
    styleEl.innerHTML = style.body

    loading = Promise.resolve()
  }

  document.head.appendChild(styleEl)

  return loading
})

export default Promise.all(loadingStyles).then(() => {
  const styleSheets = Array.from(document.styleSheets).filter((styleSheet) => {
    return styleSheet.href && styles.some((style) => {
      return style.type == 'href' && styleSheet.href.match(style.body)
    })
  })
  styleSheets.forEach((styleSheet) => {
    Array.from(styleSheet.rules).forEach((rule) => {
      if (rule.selectorText) {
        rule.selectorText = rule.selectorText
          .replace(/\.([\w_-]+)/g, '.af-class-$1')
          .replace(/\[class(.?)="( ?)([^"]+)( ?)"\]/g, '[class$1="$2af-class-$3$4"]')
          .replace(/([^\s][^,]*)(\s*,?)/g, '.af-view $1$2')
          .replace(/\.af-view html/g, '.af-view')
          .replace(/\.af-view body/g, '.af-view')
          .replace(/af-class-w-/g, 'w-')
          .replace(/af-class-anima-/g, 'anima-')
          .replace(/af-class-([\w_-]+)an-animation([\w_-]+)/g, '$1an-animation$2')
      }
    })
  })
})

/* eslint-enable */