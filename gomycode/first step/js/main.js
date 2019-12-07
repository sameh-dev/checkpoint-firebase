

function BeBolt(){
    if( document.getElementById("area-text").style.fontWeight!="bold")
   document.getElementById("area-text").style.fontWeight="bold";
   else 
   document.getElementById("area-text").style.fontWeight="normal";
    }
function BeItalic(){
     if(document.getElementById("area-text").style.fontStyle !="italic") {
         document.getElementById("area-text").style.fontStyle="italic";}
    else 
    document.getElementById("area-text").style.fontStyle="normal";
        }
function Underline(){

            document.getElementById("area-text").style.textDecorationLine="underline";
            document.getElementById("area-text").style.textDecorationStyle="solid";
          
          
              }

function sizes(){
    document.getElementById("area-text").style.fontSize=document.getElementById("mySelect").value;
}
function changeFamily(){
    document.getElementById("area-text").style.fontFamily=document.getElementById("mySelectPolice").value;
}
$(".open").on("click", function(){
  $(".popup, .popup-content").addClass("active");
  });

  $(".close, .popup").on("click", function(){
      $(".popup, .popup-content").removeClass("active");
      });

$(".picture1").hover(function(){
  $(".btn1").toggleClass('btn1Hover')
});
$(".picture2").hover(function(){
  $(".btn2").toggleClass('btn1Hover')
});
$(".picture3").hover(function(){
  $(".btn3").toggleClass('btn1Hover')
});

$(".picture2").click(function(){
  $("#fade").modal({
      fadeDuration: 100
    });
  })
  $(".picture1").hover(function(){
    $(".btn1").toggleClass('btn1Hover')
  });
  
  $(".picture1").click(function(){
    $("#fade").modal({
        fadeDuration: 100
      });
    })
    $(".picture3").hover(function(){
      $(".btn3").toggleClass('btn3Hover')
    });
    
    $(".picture3").click(function(){
      $("#fade").modal({
          fadeDuration: 100
        });
      })
      $(".picture4").hover(function(){
        $(".btn4").toggleClass('btn4Hover')
      });
      
      $(".picture4").click(function(){
        $("#fade").modal({
            fadeDuration: 100
          });
        })
        $(".picture5").hover(function(){
          $(".btn5").toggleClass('btn5Hover')
        });
        
        $(".picture5").click(function(){
          $("#fade").modal({
              fadeDuration: 100
            });
          })
          $(".picture6").hover(function(){
            $(".btn6").toggleClass('btn6Hover')
          });
          
          $(".picture6").click(function(){
            $("#fade").modal({
                fadeDuration: 100
              });
            })
            $(".picture7").hover(function(){
              $(".btn7").toggleClass('btn7Hover')
            });
            
            $(".picture7").click(function(){
              $("#fade").modal({
                  fadeDuration: 100
                });
              })
              $(".picture8").hover(function(){
                $(".btn8").toggleClass('btn8Hover')
              });
              
              $(".picture8").click(function(){
                $("#fade").modal({
                    fadeDuration: 100
                  });
                })
                $(".picture9").hover(function(){
                  $(".btn9").toggleClass('btn9Hover')
                });
                
                $(".picture9").click(function(){
                  $("#fade").modal({
                      fadeDuration: 100
                    });
                  })


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD0qtLwUrq6gQsxqo43oQj2JAfgx2lloA4",
  authDomain: "myproject-b6805.firebaseapp.com",
  databaseURL: "https://myproject-b6805.firebaseio.com",
  projectId: "myproject-b6805",
  storageBucket: "myproject-b6805.appspot.com",
  messagingSenderId: "852132647578",
  appId: "1:852132647578:web:dacfee669782bc1f968523",
  measurementId: "G-740V3TSWRN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 // Get a reference to the database service
var messageref=firebase.database().ref('GMCApp');//setting the name of your database
  function submitform(e){
    e.preventDefault();
    //get values
    var name=document.getElementById('name').value;
    var track=document.getElementById('track').value;
    var email=document.getElementById('email').value;
    var phone=document.getElementById('phone').value; 
    saveMessage(name,track,email,phone);
  }
  //add event
  document.getElementById('contactForm').addEventListener('submit',submitform);
  //save message to our firebase
  function saveMessage(name,track,email,phone){
  var newmesgref=messageref.push();
  newmesgref.set({ID:name,
    email:email,
   track:track,
  phone:phone
});
  }