function receivesAFunction(Spy) {
    Spy();
  }


  function returnsANamedFunction() {
    
    return function foo() {
        // do stuff..
    };
  }

  function returnsAnAnonymousFunction() {
    
    return(function () {
        //...
     });
  }




  