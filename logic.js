let x=0;
          let b1="",b2="",b3="",b4="",b5="",b6="",b7="",b8="",b9="";
          let a=0,b=0;
          let ic=0;
          let pa="",pb="";
          let draw=0;
          function input()
          {
            ic++;
            if(ic==1)
            {
            pa=document.getElementById("input1").value;
            pa=(pa.slice(0,1)).toUpperCase() + pa.slice(1);
            document.getElementById("input1").value="";
            document.getElementById("input1").placeholder="Enter Player B Name";
            document.getElementById("msg1").innerHTML="Enter Player B Name";
            
            }
            else if(ic==2)
            {
            pb=document.getElementById("input1").value;
            pb=(pb.slice(0,1)).toUpperCase() + pb.slice(1);
            document.getElementById("input1").value="";
            document.getElementById("input1").placeholder="Let's Play";
            document.getElementById("msg1").innerHTML="Let's Play";
            document.getElementById("msg2").innerHTML=pa+"'s Turn";
            
            }
            else
            {
              document.getElementById("input1").value="";
              document.getElementById("input1").placeholder="Let's Play";
            }

            
            
            
            
          }
          function func1()
          {
            if(ic==0)
            {
              pa="Player A";
              pb="Player B";
            }
            
             if(x==0)
            {
              document.getElementById("b1").innerHTML="X";
              x=1;
              document.getElementById("b1").onclick="";
              b1="X";
              a++;
              document.getElementById("msg2").innerHTML=pb+"'s Turn";
            }
             else
            {
              document.getElementById("b1").innerHTML="O";
              x=0;
              document.getElementById("b1").onclick="";
              b1="O";
              b++;
              document.getElementById("msg2").innerHTML=pa+"'s Turn";
            }
    
           }
           function func2()
          {
            if(ic==0)
            {
              pa="Player A";
              pb="Player B";
            }
             if(x==0)
            {
              document.getElementById("b2").innerHTML="X";
              x=1;
              document.getElementById("b2").onclick="";
              b2="X";
              a++;
              document.getElementById("msg2").innerHTML=pb+"'s Turn";
            }
             else
            {
              document.getElementById("b2").innerHTML="O";
              x=0;
              document.getElementById("b2").onclick="";
              b2="O";
              b++;
              document.getElementById("msg2").innerHTML=pa+"'s Turn";
            }
    
           }
           function func3()
          {
            if(ic==0)
            {
              pa="Player A";
              pb="Player B";
            }
             if(x==0)
            {
              document.getElementById("b3").innerHTML="X";
              x=1;
              document.getElementById("b3").onclick="";
              b3="X";
              a++;
              document.getElementById("msg2").innerHTML=pb+"'s Turn";
            }
             else
            {
              document.getElementById("b3").innerHTML="O";
              x=0;
              document.getElementById("b3").onclick="";
              b3="O";
              b++;
              document.getElementById("msg2").innerHTML=pa+"'s Turn";
            }
    
           }
           function func4()
          {
            if(ic==0)
            {
              pa="Player A";
              pb="Player B";
            }
             if(x==0)
            {
              document.getElementById("b4").innerHTML="X";
              x=1;
              document.getElementById("b4").onclick="";
              b4="X";
              a++;
              document.getElementById("msg2").innerHTML=pb+"'s Turn";
            }
             else
            {
              document.getElementById("b4").innerHTML="O";
              x=0;
              document.getElementById("b4").onclick="";
              b4="O";
              b++;
              document.getElementById("msg2").innerHTML=pa+"'s Turn";
            }
    
           }
           function func5()
          {
            if(ic==0)
            {
              pa="Player A";
              pb="Player B";
            }
             if(x==0)
            {
              document.getElementById("b5").innerHTML="X";
              x=1;
              document.getElementById("b5").onclick="";
              b5="X";
              a++;
              document.getElementById("msg2").innerHTML=pb+"'s Turn";
            }
             else
            {
              document.getElementById("b5").innerHTML="O";
              x=0;
              document.getElementById("b5").onclick="";
              b5="O";
              b++;
              document.getElementById("msg2").innerHTML=pa+"'s Turn";
            }
    
           }
           function func6()
          {
            if(ic==0)
            {
              pa="Player A";
              pb="Player B";
            }
             if(x==0)
            {
              document.getElementById("b6").innerHTML="X";
              x=1;
              document.getElementById("b6").onclick="";
              b6="X";
              a++;
              document.getElementById("msg2").innerHTML=pb+"'s Turn";
            }
             else
            {
              document.getElementById("b6").innerHTML="O";
              x=0;
              document.getElementById("b6").onclick="";
              b6="O";
              b++;
              document.getElementById("msg2").innerHTML=pa+"'s Turn";
            }
    
           }
           function func7()
          {
            if(ic==0)
            {
              pa="Player A";
              pb="Player B";
            }
             if(x==0)
            {
              document.getElementById("b7").innerHTML="X";
              x=1;
              document.getElementById("b7").onclick="";
              b7="X";
              a++;
              document.getElementById("msg2").innerHTML=pb+"'s Turn";
            }
             else
            {
              document.getElementById("b7").innerHTML="O";
              x=0;
              document.getElementById("b7").onclick="";
              b7="O";
              b++;
              document.getElementById("msg2").innerHTML=pa+"'s Turn";
            }
    
           }
           function func8()
          {
            if(ic==0)
            {
              pa="Player A";
              pb="Player B";
            }
             if(x==0)
            {
              document.getElementById("b8").innerHTML="X";
              x=1;
              document.getElementById("b8").onclick="";
              b8="X";
              a++;
              document.getElementById("msg2").innerHTML=pb+"'s Turn";
            }
             else
            {
              document.getElementById("b8").innerHTML="O";
              x=0;
              document.getElementById("b8").onclick="";
              b8="O";
              b++;
              document.getElementById("msg2").innerHTML=pa+"'s Turn";
            }
    
           }
           function func9()
          {
            if(ic==0)
            {
              pa="Player A";
              pb="Player B";
            }
             if(x==0)
            {
              document.getElementById("b9").innerHTML="X";
              x=1;
              document.getElementById("b9").onclick="";
              b9="X";
              a++;
              document.getElementById("msg2").innerHTML=pb+"'s Turn";
             
              
            }
             else
            {
              document.getElementById("b9").innerHTML="O";
              x=0;
              document.getElementById("b9").onclick="";
              b9="O";
              b++;
              document.getElementById("msg2").innerHTML=pa+"'s Turn";
            }
    
           }

        function hello()
        {
          
            if(a>=3)
           {
              if((b1=="X" && b2=="X" && b3=="X") || (b4=="X" && b5=="X" && b6=="X") || (b7=="X" && b8=="X" && b9=="X"))
              {
                document.getElementById("result").innerHTML=pa+" Won";
                document.getElementById("msg1").innerHTML=pa+" Won";
                document.getElementById("msg2").innerHTML=".......................................";
              
                document.getElementById("b1").onclick="";
                document.getElementById("b2").onclick="";
                document.getElementById("b3").onclick="";
                document.getElementById("b4").onclick="";
                document.getElementById("b5").onclick="";
                document.getElementById("b6").onclick="";
                document.getElementById("b7").onclick="";
                document.getElementById("b8").onclick="";
                document.getElementById("b9").onclick="";
                document.getElementById("celebration_img_1").style.display="block";
                document.getElementById("celebration_img_2").style.display="block";
                draw=1;
              }
              else if((b1=="X" && b4=="X" && b7=="X") || (b2=="X" && b5=="X" && b8=="X") || (b3=="X" && b6=="X" && b9=="X"))
              {
                document.getElementById("result").innerHTML=pa+" Won";
                document.getElementById("msg1").innerHTML=pa+" Won";
                document.getElementById("msg2").innerHTML=".......................................";
                document.getElementById("b1").onclick="";
                document.getElementById("b2").onclick="";
                document.getElementById("b3").onclick="";
                document.getElementById("b4").onclick="";
                document.getElementById("b5").onclick="";
                document.getElementById("b6").onclick="";
                document.getElementById("b7").onclick="";
                document.getElementById("b8").onclick="";
                document.getElementById("b9").onclick="";
                document.getElementById("celebration_img_1").style.display="block";
                document.getElementById("celebration_img_2").style.display="block";
                draw=1;
              }
              else if((b1=="X" && b5=="X" && b9=="X") || (b3=="X" && b5=="X" && b7=="X"))
              {
                document.getElementById("result").innerHTML=pa+" Won";
                document.getElementById("msg1").innerHTML=pa+" Won";
                document.getElementById("msg2").innerHTML=".......................................";
                document.getElementById("b1").onclick="";
                document.getElementById("b2").onclick="";
                document.getElementById("b3").onclick="";
                document.getElementById("b4").onclick="";
                document.getElementById("b5").onclick="";
                document.getElementById("b6").onclick="";
                document.getElementById("b7").onclick="";
                document.getElementById("b8").onclick="";
                document.getElementById("b9").onclick="";
                document.getElementById("celebration_img_1").style.display="block";
                document.getElementById("celebration_img_2").style.display="block";
                draw=1;
              }

           }
          



          if(b>=3)
          {
            if((b1=="O" && b2=="O" && b3=="O") || (b4=="O" && b5=="O" && b6=="O") || (b7=="O" && b8=="O" && b9=="O"))
            {
                document.getElementById("result").innerHTML=pb+" Won";
                document.getElementById("msg1").innerHTML=pb+" Won";
                document.getElementById("msg2").innerHTML=".......................................";
                document.getElementById("b1").onclick="";
                document.getElementById("b2").onclick="";
                document.getElementById("b3").onclick="";
                document.getElementById("b4").onclick="";
                document.getElementById("b5").onclick="";
                document.getElementById("b6").onclick="";
                document.getElementById("b7").onclick="";
                document.getElementById("b8").onclick="";
                document.getElementById("b9").onclick="";
                document.getElementById("celebration_img_1").style.display="block";
                document.getElementById("celebration_img_2").style.display="block";
                draw=1;

            }
            else if((b1=="O" && b4=="O" && b7=="O") || (b2=="O" && b5=="O" && b8=="O") || (b3=="O" && b6=="O" && b9=="O"))
            {
                document.getElementById("result").innerHTML=pb+" Won";
                document.getElementById("msg1").innerHTML=pb+" Won";
                document.getElementById("msg2").innerHTML=".......................................";
                document.getElementById("b1").onclick="";
                document.getElementById("b2").onclick="";
                document.getElementById("b3").onclick="";
                document.getElementById("b4").onclick="";
                document.getElementById("b5").onclick="";
                document.getElementById("b6").onclick="";
                document.getElementById("b7").onclick="";
                document.getElementById("b8").onclick="";
                document.getElementById("b9").onclick="";
                document.getElementById("celebration_img_1").style.display="block";
                document.getElementById("celebration_img_2").style.display="block";
                draw=1;
            }
            else if((b1=="O" && b5=="O" && b9=="O") || (b3=="O" && b5=="O" && b7=="O"))
            {
                document.getElementById("result").innerHTML=pb+" Won";
                document.getElementById("msg1").innerHTML=pb+" Won";
                document.getElementById("msg2").innerHTML=".......................................";
                document.getElementById("b1").onclick="";
                document.getElementById("b2").onclick="";
                document.getElementById("b3").onclick="";
                document.getElementById("b4").onclick="";
                document.getElementById("b5").onclick="";
                document.getElementById("b6").onclick="";
                document.getElementById("b7").onclick="";
                document.getElementById("b8").onclick="";
                document.getElementById("b9").onclick="";
                document.getElementById("celebration_img_1").style.display="block";
                document.getElementById("celebration_img_2").style.display="block";
                draw=1;
            }
            

          }
          if(draw==0 && a==5 && b==4)
          {
           
            document.getElementById("msg1").innerHTML="Match Draw";
            document.getElementById("msg2").innerHTML=".......................................";
            document.getElementById("result").innerHTML="Match Draw";
          

          }
          
        }
        function resetgame()
        {
            location.reload();
        }