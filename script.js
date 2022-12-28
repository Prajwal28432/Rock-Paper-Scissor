let play = document.getElementById('btn');
let images = ["img/rock.jpg","img/paper.jpg","img/scissor.jpg"];
let text_blick = document.getElementById('blink');
let computer_img = document.getElementById('computer_src');
let human_img = document.getElementById('human_src');
let main_section = document.querySelector('.main');
play.addEventListener('click',()=>{
    // console.log(text_blick.innerText);
    // setTimeout(() => {
        //     text_blick.style.background = 'red';
        // }, 1000);
        // window.alert("Click your option");
        // let id_clicked;
        // console.log(rand_no);
        main_section.style.display = 'block';
        let show=  document.querySelector('.show');
        let clicked = function(value){
            let id = this.id
    let rand_no = Math.floor(Math.random()*10)%3;
             let show_text="";
            if(id==rand_no){
            
        //   show.innerText = "You Won";
                    show_text  ="Draw";
            }
            else if(rand_no==0&&id==1){
                show_text="You Won"
            }
            else if(rand_no==0&&id==2){
                show_text="You Loose"
            }
            else if(rand_no==1&&id==0){
                show_text="You Loose"
            }
            else if(rand_no==1&&id==2){
                show_text="You Win";
            }
            else if(rand_no==2&&id==0){
                show_text="You Win";
            }
            else{
                show_text="You Loose";
            }
            show.innerHTML = show_text;
            computer_img.src = images[rand_no];
            human_img.src=images[id];
           
        }      
document.getElementById('0').onclick = clicked;
document.getElementById('1').onclick = clicked;
document.getElementById('2').onclick = clicked;
        
        // console.log(id_clicked);

              

})