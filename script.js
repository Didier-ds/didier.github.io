
    function $u_case(){
    input_Case = document.getElementsByTagName("input")
    for(let x = 0; $max = input_Case.length, x<$max; x++){
        input_Case[x].style.textTransform = "uppercase";
    }
    }
    $u_case();
       function caser(){

            let a = document.getElementById("first_txt");
          a.value = a.value.toUpperCase();   
        }
   
      let b = document.getElementById("first_txt").oninput = "caser()";
      
    function swap(){
        let txt1 = document.getElementById("first_txt").value;
        _txt1 = txt1;
       document.getElementById("first_txt").value = document.getElementById("second_txt").value;
       document.getElementById("second_txt").value = _txt1;
    }
    function see(){
        
        document.getElementById("div").innerHTML = document.getElementById("inp_ut").value;
    }
    function $change() {
        let $bgcolor = document.getElementById("bg_color").value;
        let $txtcolor = document.getElementById("txt_color").value;
          let $bg = document.getElementById("$bg");
          $bg.style.backgroundColor = $bgcolor;
          $bg.style.color = $txtcolor;
    }
