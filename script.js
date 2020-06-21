window.watsonAssistantChatOptions = {
    integrationID: "10033b0d-1c8b-49f6-8918-02d66e8bb7bf", // The ID of this integration.
    region: "eu-gb", // The region your integration is hosted in.
    serviceInstanceID: "986f3cca-69f0-4870-bfb8-c6008feb2695", // The ID of your service instance.
    onLoad: function(instance) { instance.render(); }
  };
setTimeout(function(){
  const t=document.createElement('script');
  t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
  document.head.appendChild(t);
});