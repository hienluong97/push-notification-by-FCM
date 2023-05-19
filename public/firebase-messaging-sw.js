/*
Give the service worker access to Firebase Messaging.
Note that you can only use Firebase Messaging here, other Firebase libraries are not available in the service worker.
*/
importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js"
);

/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
* New configuration for app@pulseservice.com
*/
firebase.initializeApp({
    apiKey: "AIzaSyDJhZ9lLukCh2EL4xFEHNZWxQSs3G2ooc8",
    authDomain: "fcm-test-106aa.firebaseapp.com",
    projectId: "fcm-test-106aa",
    storageBucket: "fcm-test-106aa.appspot.com",
    messagingSenderId: "253818312662",
    appId: "1:253818312662:web:8634897ded5dccb4da7677",
    measurementId: "G-JY7JE1GSPT",
});

/*
Retrieve an instance of Firebase Messaging so that it can handle background messages.
*/
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload
    );
    /* Customize notification here */
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
        body: "Background Message body.",
        icon: "/itwonders-web-logo.png",
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions
    );
});
