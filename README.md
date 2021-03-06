# Beat Battle Website

An :scream::sob::tongue::triumph: EPIC :eyes::smiley::flushed::fearful: website where you can create, and participate in beat battles.

Check out the website here: https://beatbattles.netlify.app

## USAGE:

You will need to replace the firebaseConfig details in `src/lib/firebase.prod.js` with your own firebase config settings:

```
const firebaseConfig = {
apiKey: YOUR_API_KEY,
authDomain: YOUR_AUTH_DOMAIN,
databaseURL: YOUR_DATABASE_URL,
projectId: YOUR_PROJECT_ID,
storageBucket: YOUR_STORAGE_BUCKET,
messagingSenderId: YOUR_MESSAGING_SENDER_ID,
appId: YOUR_APP_ID,
};

```

Alternatively, you create create a .env file in the root of the project with the following properties:

```
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_DATABASE_URL=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
```

and enter the relevant details for each field.

After this, your can run `npm start` from the root folder of the project and the application will open in your browser.

## ISSUES:

- Webpage not mobile friendly

## TODO:

- Fix click border on header links (probably need to move hover attribute to link tag styling)
- Recheck if battle is open when submit button is pressed
- Add login and signup functionality
- Create mulitple pages/Scroll div for battles
- Move closed battles to seperate section
- Add voting system
- Add '\*' to required inputs
- Add character counter to description textarea
- Add overflow arrows to scroll div to let user know that there is more content
- Change '\*' to bullet points in text area
- Add function to randomly pick sample from the legend Andre Navarro 2
