
function sayHello() {
     var question="What is your name?";
     var response=prompt(question);
     alert("Hello "+response+", welcome to momo's first game^^");
     // 将名字存储到 localStorage
     localStorage.setItem("userName", response);
     console.log(response)
}
