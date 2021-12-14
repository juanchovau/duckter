import { initializeApp } from 'firebase/app'
import { GithubAuthProvider, signInWithPopup, getAuth, onAuthStateChanged } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCk9e0JGZLOTKSk7IyGeCPYCaGXWmeEazE',
  authDomain: 'devter-jsv.firebaseapp.com',
  projectId: 'devter-jsv',
  storageBucket: 'devter-jsv.appspot.com',
  messagingSenderId: '785307785644',
  appId: '1:785307785644:web:1eb10bc48fb3b022b88209'
}

initializeApp(firebaseConfig)
const auth = getAuth()

const mapUserIfoFromFirebaseAuth = (user) => {
  const { displayName: userName, photoUrl: userPhoto, email: userEmail, providerUserInfo } = user.reloadUserInfo
  return ({
    userName,
    userPhoto,
    userEmail,
    userNick: providerUserInfo[0].screenName
  })
}

export const loginWithGithub = () => {
  const githubPrivider = new GithubAuthProvider()
  return signInWithPopup(auth, githubPrivider)
    .then(user => mapUserIfoFromFirebaseAuth(user.user))
}

export const setOnAuthStateChanged = (onChange) => {
  return onAuthStateChanged(auth, (user) => {
    return user ? onChange(mapUserIfoFromFirebaseAuth(user)) : onChange(null)
  })
}
