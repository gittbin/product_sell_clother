o=document.querySelector('.button')

// e.results[0][0].transcript


o.onclick=()=>{
    //  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    // var recognition = new SpeechRecognition();
    // let k
    // recognition.onresult=(e)=>{k=e.results[0][0].transcript
    //     console.log(k)
    //    res=new SpeechSynthesisUtterance(k)
    //  speechSynthesis.speak(res)
    // }
    // recognition.start()
 
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        
    var recognition = new SpeechRecognition();
      recognition.lang = 'vi-VN'
    //  voices = window.speechSynthesis.getVoices();
    //   msg.voice = voices[10];
    let res
    recognition.onresult = (e)=>{ test=e.results[0][0].transcript

        console.log(test)
        o=test.toLowerCase()
        console.log(o)
    if(o.indexOf('khỏe không')!==-1){
        res=new SpeechSynthesisUtterance(
          // "i'm fine thank you, and you"
          "tao ổn"
          )
        //   console.log(res.voice)
        res.pitch=1
        res.rate=1
        res.volume=1
        // voices = window.speechSynthesis.getVoices();
        // console.log(voices)
        // res.voice = voices[2];
        // speechSynthesis.voiceURI = 'native';
      //   speechSynthesis.getVoices().forEach(function(voice) {
      //     console.log(voice.name, voice.default ? voice.default :'');
      // });
      //   res.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Whisper'; })[2];
      res.lang = 'vi-VN'
        speechSynthesis.speak(res)
    }
    curDate=new Date
    if(o.indexOf("giờ")!==-1){
        res=new SpeechSynthesisUtterance(curDate.getHours()+'giờ')
        res.lang = 'vi-VN'
        speechSynthesis.speak(res)
        res=new SpeechSynthesisUtterance(curDate.getMinutes()+'phút')
        res.lang = 'vi-VN'
         speechSynthesis.speak(res)
        res=new SpeechSynthesisUtterance(curDate.getSeconds()+'giây')
        res.lang = 'vi-VN'
        speechSynthesis.speak(res)
    }
    if(o.indexOf("ngày")!==-1){
        res=new SpeechSynthesisUtterance('ngày'+curDate.getDate())
        res.lang = 'vi-VN'
        speechSynthesis.speak(res)
        res=new SpeechSynthesisUtterance('tháng'+curDate.getMonth())
        res.lang = 'vi-VN'
        speechSynthesis.speak(res)
        res=new SpeechSynthesisUtterance('năm'+curDate.getFullYear())
        res.lang = 'vi-VN'
        speechSynthesis.speak(res)
    }
else
{res=new SpeechSynthesisUtterance('bú bú bú')
res.lang = 'vi-VN'
speechSynthesis.speak(res)}
    
    };
    // recognition.lang = 'en-VN'
    recognition.start();
} 
// var msg = new SpeechSynthesisUtterance();
// msg.lang = "vi-VN"; 
// msg.text = "Xin Chào, tôi là Tâm";
// speechSynthesis.speak(msg); 