Changeme.statechart = SC.Statechart.create({

  initialState: 'readyState',
  
  readyState: SC.State.plugin('Changeme.ReadyState'),
  // someOtherState: SC.State.plugin('Changeme.SomeOtherState')

});