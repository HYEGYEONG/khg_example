document.querySelector("form").addEventListener("submit",function(event){
      event.preventDefault()
      const username=document.getElementById("username").value;
      const email=document.getElementById("email").value;
      const message=document.getElementById("message").value;
      let messageList=document.getElementById("messageList");
      
      let value = username + email +" -" + message;

      const li = document.createElement("li"); 
      li.setAttribute('id',value);

      const textNode = document.createTextNode(value);
      li.appendChild(textNode);

      messageList.appendChild(li);
      //messageList.classList.add("border", "border-primary", "border-2");

})


function clearForm(){
  const messageList=document.getElementById("messageList");
  const items = messageList.getElementsByTagName('li');

  if(items.length > 0)
    {
    items[0].remove();
  }
  /*
  const lastMessage = messageList.lastElementChild;
  if (lastMessage) {
    messageList.removeChild(lastMessage);
  } else {
    alert("삭제할 메시지가 없습니다.");
  }
  */
}