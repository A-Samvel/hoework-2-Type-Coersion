const a = {
    valueOf: function () {
      return "hello";
    },
  };
  const b = {
    valueOf: function () {
      return 3;
    },
  };
  const c = {
    valueOf: function () {
      return new Number(3);
    },
  };
  const d = {
    toString: function () {
      return 123;
    },
  };
  const e = {
    toString: function () {
      return new Number(3);
    },
  };
  
  const f = null;
  
  /*
    
    null + undefined //for + => NaN // for - => NaN
    null + true //for + => 1// for - => -1
    null + false //for + => 0// for - => 0
    null + 3  //for + => 3// for - => -3
    null + NaN //for + => NaN// for - => NaN  nullhello
    null + 'hello' //for + => 'nullhello' // for - => NaN
    null + a + b + c + d + e + f // for + => Error // for - => Error
    undefined + true //for + => NaN // for - => NaN
    undefined + false //for + => NaN // for - => NaN
    undefined + 5 //for + => NaN // for - => NaN
    undefined + NaN //for + => NaN // for - => NaN
    undefined + 'hello' //for + => 'undefinedhello' // for - => NaN
    undefined + a + b + c + d + e + f // for + => Error // for - => Error
    true + false //for + => 1// for - => 1
    true + 2 //for + => 3// for - => -1
    true + NaN //for + => NaN // for - => NaN
    true + 'hello' //for + => 'truehello' // for - => NaN
    true + a + b + c + d + e + f // for + => Error // for - => Error
    false + 4 //for + => 4 // for - => -3
    false + NaN //for + => NaN // for - => NaN
    false + 'hello' //for + => 'falsehello' // for - => NaN
    false + a + b + c + d + e + f // for + => Error // for - => Error
    5 + 3  // //for + => 8 // for - => 2
    5 + NaN //for + => NaN // for - => NaN
    5 + 'hello' //for + => '5hello' // for - => NaN
    5 + a + b + c + d + e + f // for + => Error // for - => Error
    'hello' + NaN //for + => NaN // for - => NaN
    'hello' + a + b + c + d + e + f // for + => Error // for - => Error
    */