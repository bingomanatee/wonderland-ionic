describe('services/LorenIpsum', function(){

  beforeEach(function(){
    angular.module('Wonderland').service('Random', function(){
      var index = 0;
      var choices = [0.5, 0, 0.25, 0.95];

      function Random(){
        var out = choices[index % choices.length];
        ++index;
        return out;
      }

      Random.reset = function(){ index = 0; }

      return Random;
    });

    module('Wonderland');
  });

  it('should give expected random results', function(){

    var Random = $injector.get('Random');

    expect(Random()).to.eql(0.5);
  });

  afterEach(function(){
    angular.module('Wonderland').service('Random').reset();
  });

});
