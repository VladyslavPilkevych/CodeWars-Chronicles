var createOperator = (function() {

  return function(name, oper){
    return function(){
      this.expressions = [].slice.call(arguments);

      this.eval = () =>  new Value(this.expressions.map((expression) => expression.eval().value).reduce(oper));
      this.toString = () =>  this.expressions.map((expression) => expression.toString()).join(" " + name + " ");
    };
  };
  
})();
