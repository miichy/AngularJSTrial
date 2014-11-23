#1 json  not the ''  bug  double ""

#2 chrome disable-security flag use the http get in angular

#3 一个逗号引发的“血案” var myApp = angular.module('myApp'['ngRoute','playerController']);
                     var myApp = angular.module('myApp'['ngRoute','playerController']);

#4 改错文件，同名不同路径的文件，更改后不能生效。各种坑爹啊！细心！！！！！F＊＊K


## Step 8

### ng-app   RootScope

### ng-controller ControllerScope  -  Repeater Scope

### workflow

  controller -->$http --> Dependency Injector --> Service Instance($http,$log,$timeout) 
												--> Service Factories
  use $http in controler<--

### app.js   

- Route
- Add modules as dependencies of our app ,such as ngRoute  and such as our own controller

### controller.js

A module actually act the logic method

### $routeParams

- app.js     you use 'playerId' in 'when', use the 'playerId' in controller.js;Use the 'id' or something else,use the same word will do.

[links](https://docs.angularjs.org/tutorial/step_08)