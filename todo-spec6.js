describe('Protractor Demo App', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
    function addtion(var1, var2,total){
        firstNumber.sendKeys(var1);
        secondNumber.sendKeys(var2);  
        goButton.click();
        expect(latestResult.getText()).toEqual(total);
    }

    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/'); 
    })

    it('should have a title spec2', function() {       
        expect(browser.getTitle()).toEqual('Super Calculator');       
    });

    it('adding 1 and 3', function() {             
      addtion(1,3,'4');
    });

    it('adding 3 and 3', function() {
        addtion(3,3,'6');          
    });

    it('adding 3 and 3', function() {
        addtion(5,5,'100');  
        browser.takeScreenshot()        
    });
  });