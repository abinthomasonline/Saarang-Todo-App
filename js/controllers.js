app.controller("todoctrl", function($scope) {	

	$scope.todos = [{text:'junk',id:-1}];
	$scope.todos.splice(0,1); 
	var editindex;
	var editid;
	var editstatus;

	$scope.newtodo = function () {
		if($scope.newtodotext) {
			if(!$scope.todos.length) {
				$scope.todos.push({text:this.newtodotext,id:1});
				$scope.newtodotext = "";
			} else {
				$scope.todos.push({text:this.newtodotext,id:($scope.todos[$scope.todos.length-1].id+1)});
				$scope.newtodotext = "";
			}
		}

	};

	$scope.removetodo = function(index, id) {
		$scope.todos.splice(index,1);
	};

	$scope.edittodo = function(index, id) {
		editindex=index;
		editid=id;
		editstatus=true;
		$scope.temptodotext = $scope.todos[index].text;
		$scope.todos[index].id *= -1;
	};

	$scope.submitedit = function(index, id) {
		if($scope.todos[index].text) {
			$scope.todos[index].id *= -1;		
		} else {

			$scope.todos[index].id *= -1;
			$scope.removetodo(index,id);
		}
		editstatus=false;
	};

	$scope.globalclick = function() {
		if(editstatus) {
			$scope.submitedit(editindex,editid);
		}
	};

});