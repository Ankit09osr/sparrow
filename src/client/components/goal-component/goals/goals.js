angular.module('sparrowFit')
.controller('GoalsCtrl', function(goalService) {
  //console.log('in goal controller and was passed the service')
  //console.log('in goal controller and goals from the service = ',goalService.getAllGoals())
})
.component('goals', {
  bindings : { resolveGoal :'<'},
  controller: 'GoalsCtrl',
  templateUrl: 'client/components/goal-component/goals/goals.html'
});
