(function() {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('menu', {
        url: '/',
        abstract: true,
        templateUrl: 'app/menu.html'
      })
      .state('menu.button', {
        url: 'button',
        templateUrl: 'app/button.html'
      })
      .state('menu.card', {
        url: 'card',
        templateUrl: 'app/card.html'
      })
      .state('menu.checkbox', {
        url: 'checkbox',
        templateUrl: 'app/checkbox.html'
      })
      .state('menu.chips', {
        url: 'chips',
        templateUrl: 'app/chips.html'
      })
      .state('menu.datepicker', {
        url: 'datepicker',
        templateUrl: 'app/datepicker.html'
      })
      .state('menu.fab-speed-dial', {
        url: 'fab-speed-dial',
        templateUrl: 'app/fab-speed-dial.html'
      })
      .state('menu.grid', {
        url: 'grid',
        templateUrl: 'app/grid.html'
      })
      .state('menu.input', {
        url: 'input',
        templateUrl: 'app/input.html'
      })
      .state('menu.list', {
        url: 'list',
        templateUrl: 'app/list.html'
      })
      .state('menu.progress', {
        url: 'progress',
        templateUrl: 'app/progress.html'
      })
      .state('menu.radio', {
        url: 'radio',
        templateUrl: 'app/radio.html'
      })
      .state('menu.select', {
        url: 'select',
        templateUrl: 'app/select.html'
      })
      .state('menu.slider', {
        url: 'slider',
        templateUrl: 'app/slider.html'
      })
      .state('menu.switch', {
        url: 'switch',
        templateUrl: 'app/switch.html'
      })
      .state('menu.tab', {
        url: 'tab',
        templateUrl: 'app/tab.html'
      })
      .state('menu.toolbar', {
        url: 'toolbar',
        templateUrl: 'app/toolbar.html'
      })
      .state('menu.tooltip', {
        url: 'tooltip',
        templateUrl: 'app/tooltip.html'
      })
      ;

    $urlRouterProvider.otherwise('/card');
  }

})();
