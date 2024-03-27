

let title = document.querySelector('.title');
let turn = 'x';

let squareElement = [];
function end(n1, n2, n3) {
    title.innerHTML = ` ${squareElement[n1]} winner ^_^`;
    document.getElementById('item' + n1).style.background = "#000";
    document.getElementById('item' + n2).style.background = "#000";
    document.getElementById('item' + n3).style.background = "#000";
    
    setInterval(() => {
        title.innerHTML += '.';
    }, 1000);

    setTimeout(() => {
        location.reload();
    } , 4000)
}

function winner() {
    for (let i = 1; i < 10; i++)
    {
        squareElement[i] = document.getElementById('item' + i).innerHTML;
    }

    if ( squareElement[1] == squareElement[2] && squareElement[2] == squareElement[3] && squareElement[1] != '')
    {
       
        end(1, 2, 3);
    }

     else if (squareElement[4] != '' && squareElement[4] == squareElement[5] &&
        squareElement[5] == squareElement[6])
    {
         end(4, 5, 6);
    }

    else if (squareElement[7] != '' && squareElement[7] == squareElement[8] &&
        squareElement[8] == squareElement[9])
    {
      end(7, 8, 9);
    }

    else if ( squareElement[1] == squareElement[4] &&
        squareElement[4] == squareElement[7]  && squareElement[1] != '')
    {
       end(1, 4, 7);
    }

    else  if (squareElement[2] != '' && squareElement[2] == squareElement[5] &&
        squareElement[5] == squareElement[8])
    {
         end(2, 5, 8);
    }

    else if (squareElement[3] != '' && squareElement[3] == squareElement[6] &&
        squareElement[6] == squareElement[9])
    {
        end(3, 6, 9);
    }

    else if (squareElement[1] != '' && squareElement[1] == squareElement[5] &&
        squareElement[5] == squareElement[9])
    {
        end(1, 5, 9);
    }

    else if (squareElement[3] != '' && squareElement[3] == squareElement[5] &&
        squareElement[5] == squareElement[7])
    {
         end(3, 5, 7);
    }
    
}

let z = 0;
function game(id) {
    let element = document.getElementById(id);
    if (element.innerHTML == '') {
        element.innerHTML = turn;
    
    }

    if (turn === 'x' )
    {
        turn = 'o';
       
    }
    else
    {
        turn = 'x';
    }
    title.innerHTML = turn;
    winner();
}

