<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Page!</title>
    <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
<script>
var pathArray = window.location.pathname.split('/');
if (pathArray == 'es') {
     var OneSignal = window.OneSignal || [];
        var initConfig = {
        appId: "000b64e3-4806-4e2c-b23a-3463f9f058fd",
        promptOptions: {
          slidedown: {
            prompts: [
              {
                type: "push", // current types are "push" & "category"
                autoPrompt: true,
                text: {
                  /* limited to 90 characters */
                  actionMessage: "Nos gustaría mostrarle notificaciones de las últimas noticias y actualizaciones.",
                  /* acceptButton limited to 15 characters */
                  acceptButton: "Permitir",
                  /* cancelButton limited to 15 characters */
                  cancelButton: "Cancelar"
                },
                delay: {
                  pageViews: 1,
                  timeDelay: 20
                }
              }
            ]
          }
        }  
        OneSignal.push(function () {
            OneSignal.SERVICE_WORKER_PARAM = { scope: '/onesignal-web-demo/' };
            OneSignal.SERVICE_WORKER_PATH = 'onesignal-web-demo/OneSignalSDKWorker.js'
            OneSignal.SERVICE_WORKER_UPDATER_PATH = 'onesignal-web-demo/OneSignalSDKUpdaterWorker.js'
            OneSignal.init(initConfig);
        });

}
else {
  var OneSignal = window.OneSignal || [];
        var initConfig = {
        appId: "000b64e3-4806-4e2c-b23a-3463f9f058fd",
        promptOptions: {
      slidedown: {
        prompts: [
          {
            type: "push", // current types are "push" & "category"
            autoPrompt: true,
            text: {
              /* limited to 90 characters */
              actionMessage: "🔔 Vols rebre totes les últimes notícies d'ElNacional.cat al teu navegador ❓",
              /* acceptButton limited to 15 characters */
              acceptButton: "Sí, gràcies! 👏",
              /* cancelButton limited to 15 characters */
              cancelButton: "CDe moment, no"
            },
            delay: {
              pageViews: 1,
              timeDelay: 20
            }
          }
        ]
      }
    }
    OneSignal.push(function () {
            OneSignal.SERVICE_WORKER_PARAM = { scope: '/onesignal-web-demo/' };
            OneSignal.SERVICE_WORKER_PATH = 'onesignal-web-demo/OneSignalSDKWorker.js'
            OneSignal.SERVICE_WORKER_UPDATER_PATH = 'onesignal-web-demo/OneSignalSDKUpdaterWorker.js'
            OneSignal.init(initConfig);
        });

}
}

   
let page_topic = 'castella';

OneSignal.push(function() {
    OneSignal.on('subscriptionChange', function(isSubscribed) {
        if (isSubscribed === true) {
            console.log('The user subscription state is now:', isSubscribed);
            var pathArray = window.location.pathname.split('/');
            OneSignal.sendTags({
                "subscription_page": pathArray[1],
                "subscription_page_topic": page_topic,
            }).then(function(tagsSent) {
                // Callback called when tags have finished sending
                console.log(tagsSent);
            });
        }
    });
});      
</script>
</head>
  <body>
    <h1>Segmentación automática por página de suscripción</h1>
  </body>
</html>
