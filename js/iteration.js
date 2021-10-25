/*
* 1)Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u».
строки - итерируемые.
* */

/*for;while;do-while*/


function countVowels(string) {
  let counter = 0;

  for (let i = 0; i < string.length; i++) {
    const currentLetter = string[i];
    if (
      currentLetter === 'a'
      || currentLetter === 'e'
      || currentLetter === 'i'
      || currentLetter === 'o'
      || currentLetter === 'u'
    ) {
      counter++;
    }
  }
  return counter;
}

/*
* Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
вывод fizz вместо чисел, кратных 3;
вывод buzz вместо чисел, кратных 5;
* */


function fizzBuzz(n) {
  for (let i = 1; i < n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('fizzbuzz')
    } else if (i % 5 === 0) {
      console.log('buzz')
    } else if (i % 3 === 0) {
      console.log('fizz')
    } else {
      console.log(i)
    }
  }
}

fizzBuzz(100)

console.log(countVowels('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at aut autem dignissimos ducimus earum et eveniet ex hic, inventore ipsum laudantium magni mollitia nemo non obcaecati officia qui quisquam quo repellendus rerum, sapiente similique tempora, unde voluptas voluptate voluptatem. Ab accusantium animi atque autem beatae consectetur consequatur dolor doloremque, dolorum error esse, et exercitationem facilis fuga id itaque maxime minima, optio perferendis placeat quidem quis recusandae rem reprehenderit sunt ullam voluptas. Aliquam beatae earum eos exercitationem expedita, iure mollitia natus, obcaecati quaerat reiciendis sequi, unde vel. Accusamus alias aperiam architecto dicta exercitationem iste iusto libero odio quaerat repudiandae? Molestias.')) // 2
console.log(countVowels('word')) // 1
console.log(countVowels('tst')) // 0
