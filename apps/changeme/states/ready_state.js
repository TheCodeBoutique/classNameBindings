Changeme.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    Changeme.getPath('mainPage.mainPane').append();
    Changeme.viewController.set('isCSSGreen', YES);
    this.invokeLater(this.fadeIn, 1000);
  },
  
  fadeIn: function() {
    Changeme.viewController.set('isCSSYellow', YES);
    Changeme.viewController.set('isCSSGreen', NO);
  },

  exitState: function() {
    Changeme.getPath('mainPage.mainPane').remove();
  }

});

