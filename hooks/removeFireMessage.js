function ReplaceFirebaseM(firebasemessage) {
  let newMessage = firebasemessage.replace("Firebase: ", "");

  return newMessage;
}

export { ReplaceFirebaseM };
