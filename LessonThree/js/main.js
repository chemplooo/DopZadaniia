    let a = 'урок-3-был слишком легким';
    function newStr() {
        a = a.charAt(0).toUpperCase() + a.substr(1);
        a = a.replace("-" ," " );
        a = a.replace("-" ," " );
        a = a.replace("легким" ,"легкоо" );
        alert(a);
    };
    newStr();

    let arr = [20, 33, 1, 'Человек', 2, 3];
        arr.splice(3, 1);

    let sum = arr.reduce((a,b) => Math.pow(a,2) + Math.pow(b,2)),
        square = arr.reduce((a,b) => Math.sqrt(a,2) + Math.sqrt(b,2));
        alert(Math.sqrt(sum));
    
<<<<<<< HEAD
    a = "   Сочинение — вид письменной школьной работы, представляющий рассуждение   ";
=======
    a = "Сочинение — вид письменной школьной работы, представляющий рассуждение";
>>>>>>> b8c9c9a4fe61b054570d133581ecbc04dc5d4c7c
    a = a.trim();
    console.log(a);
    function newFunc(a) {
        if (typeof a !== "string") {
          console.log(" Не строка");
        } else {
          a = a.trim();
          let sliced = a.slice(0, 50);
          if (sliced.length < a.length) {
            return (sliced += "...");
          }
        }
        console.log(sliced);
      }
      console.log(newFunc(a));
