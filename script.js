  const showModule = document.getElementById('show-module')
  const textModule = document.getElementById('text-module')
  const url = window.location.pathname
  const show = () => {showModule.classList.remove('Notification_visible')}

  window.onload = () => {
    fetch(`https://api-metrika.yandex.net/stat/v1/data?metrics=ym:pv:pageviews&filters=ym:pv:URLPath=='${url}'&ids=ХХХХХХХХ`, { //<---Сюда id счетчика
      headers: {
        "Authorization": "OAuth *ТОКЕН*" //<---Сюда токен
      } 
      })
      .then(r => r.json())
      .then(metrikaApiJSON => {
        if (metrikaApiJSON.totals[0] > 0) {
          textModule.innerText = `За последние 3 дня эту страницу посмотрели более ${metrikaApiJSON.totals[0]} раз.`
          setTimeout(() => {
            showModule.classList.add('Notification_visible')
            setTimeout(() => {
              showModule.classList.remove('Notification_visible')
            }, 10000)
          }, 500)
        }
        
      })
    
  }