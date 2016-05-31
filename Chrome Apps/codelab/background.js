var dbName = 'todos-vanillajs'

/**
 * Listens for the app launching then creates the window
 * 
 * @see http://developer.chrome.com/apps/app.window.html
 */
function launch() {
    chrome.app.window.create('index.html', {
        id: 'main',
        bounds: { width: 620, height: 500 }
    })

}

function showNotification(storedData) {
    var openTodos = 0
    if (storedData[dbName].todos) {
        storedData[dbName].todos.forEach(function (todo) {
            if (!todo.completed)
                openTodos++
            
        })
    }

    if (openTodos > 0) {
        // Chreate the notification
        chrome.notifications.create('reminder', {
            type: 'basic',
            iconUrl: 'icon_128.png',
            title: 'Don\'t forget!',
            message: 'You have ' + openTodos + 'things to do. Wake up, dude!'
        }, function (notificationId) { })

    }
}

chrome.app.runtime.onLaunched.addListener(launch)

chrome.alarms.onAlarm.addListener(function (alarm) {
    console.log("Got an alarm!", alarm)
    chrome.storage.local.get(dbName, showNotification)

})

chrome.notifications.onClicked.addListener(function () {
    launch()
})