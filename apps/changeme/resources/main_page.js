// ==========================================================================
// Project:   Changeme - mainPage
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Changeme */

// This page describes the main user interface for your application.  
Changeme.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'labelView'.w(),
    
    labelView: SC.ContainerView.design({
      layout: { top: 100, right: 100, bottom: 100, left: 100 },
      classNameBindings: ['isCSSGreen:green', 'isCSSYellow:yellow'],
      isCSSGreenBinding: 'Changeme.viewController.isCSSGreen', 
      isCSSYellowBinding: 'Changeme.viewController.isCSSYellow', 
    }),
    
  })

});
