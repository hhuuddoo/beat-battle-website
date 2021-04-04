# Beat Battle Website

A website where you can create, and participate in beat battles.

## USAGE:

You will need to replace the firebaseConfig details in src/lib/firebase.prod.js with your own firebase config settings:

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

## TODO:

- Fix click border on header links (probably need to move hover attribute to link tag styling)
- Recheck if battle is open when submit button is pressed
- Add description section
- Fix voting time going into negatives
- Change font weight on input boxes when text is entered
- Add login and signup functionality
- Sort battles by upload date
- Create mulitple pages/Scroll div for battles
- Move closed battles to seperate section
- Add voting system
- Add '\*' to required inputs
