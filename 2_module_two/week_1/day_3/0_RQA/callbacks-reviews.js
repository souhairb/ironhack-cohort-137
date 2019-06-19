function conversationOpen(someoneSays, someoneAnswers, delay) {
  console.log(someoneSays());
  setTimeout(() => {
    console.log(someoneAnswers());
  }, delay || 3000);
}

function joeSays() {
  return "Hello I’m Joe";
}

function kimSays() {
  return "Hello I’m Kim";
}

function marySays() {
  return "Hello I’m Mary";
}

const res = conversationOpen(joeSays, marySays);
console.log(res);// what's this value ??? undefined cause the func doensn't return anything ...
conversationOpen(kimSays, joeSays);
