app.controller('about-controller', ['$scope', function($scope) { 
	$scope.tech = [
  		{
  			name: 'HTML',
  			color: '#e74c3c'
  		},
  		{
  			name: 'CSS',
  			color: '#3498db'
  		},
  		{
  			name: 'Javascript',
  			color: '#9b59b6'
  		},
  		{
  			name: 'Java',
  			color: '#2c3e50'
  		},
  		{
  			name: 'C',
  			color: '#2ecc71'
  		},
  		{
  			name: 'C#',
  			color: '#f1c40f'
  		},
  		{
  			name: 'Python',
  			color: '#e67e22'
  		},
  		{
  			name: 'Objective C',
  			color: '#95a5a6'
  		},
  		{
  			name: 'Assembly',
  			color: '#2980b9'
  		}
  	];
}]);

app.controller('projects-controller', ['$scope', function($scope) { 
  $scope.projects = [
      {
        name: 'Personal Website',
        github: 'https://github.com/vinceix/vincentxie.com',
        desc: 'The source code for this website, vincentxie.com. This website is built using Bootstrap, AngularJS, and the animations are done using JQuery.',
        link: 'http://www.vincentxie.com/',
      },
      {
        name: 'Intro to CS Textbook',
        github: 'https://github.com/vinceix/Cache-Simulator',
        desc: 'An intro to computer science textbook that I contributed to writing. This textbook will supplement the intro courses offered at codehs.com.',
        link: 'http://codehs.gitbooks.io/introcs/content/',
      },
      {
        name: 'Cache simulator',
        github: 'https://github.com/vinceix/Cache-Simulator',
        desc: 'Simulates L1 cache behavior using a least recently used replacement algorithm. Can simulate both write-through and write-back. Written in C. ',
      }
    ];
  $scope.hasDemo = function(project){
    if (project.link == ''){
      return false;
    }
    return true;
  }
}]);