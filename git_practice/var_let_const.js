// const num=[
//     {
//       "a": 4,
//       "b": 12
//     },
//     {
//       "a": 3,
//       "b": 2
//     },
//     {
//       "a": 2,
//       "b": 40
//     },
//     {
//       "a": 1,
//       "b": 3
//     }
//   ]


//   num.sort((obj1,obj2) => obj1.a-obj2.a)
//   console.log( num)


//   var x = 23;
// (function(){
//   var x = 43;
//   (function random(){
//     //   var x = 12;
//     x++;
//     //var x = 12;
//     console.log(x); //12    //13
//     // let x = 50;
//   })();
// })();

// let name = 'Niha'
// const b = {
//     name:"vivek",
//     f: function(){
//       var self = this;
//       console.log(this); //object b
//       console.log(this.name);   //vivek
//       (function(){
//           console.log(this);    //function -prototype anonymous scope
//         console.log(this.name); //undefined
//         console.log(self.name); //vivek
//       })();
//       }
//     }
//     b.f();

    var x = 23;
(function(){
  var x = 43;
  (function random(){
    x++;
    console.log(x);
    var x = 21;
  })();
})();