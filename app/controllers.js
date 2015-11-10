app.controller("redditCloneController", function($scope, moment){
    $scope.showSubmit = false;
    $scope.sortByVotes = function() {
      $scope.sortType = "-this.votes"
    }
    $scope.sortByDates = function() {
      $scope.sortType = "this.message.time"
    }
    $scope.sortByTitle = function() {
      $scope.sortType = "this.title"
    }
    $scope.showSubmitForm = function() {
      $scope.showSubmit = $scope.showSubmit === false ? true: false;
    };
    $scope.blogPosts = [];
    $scope.submitNewPost = function() {
      $scope.showSubmit = false;
      $scope.blogPost.comments = [];
      $scope.blogPost.votes = 0;
      $scope.blogPost.showComment = false;
      $scope.blogPost.showAllComments = false;
      $scope.blogPost.time = new Date();
      $scope.blogPosts.push($scope.blogPost);
      $scope.blogPost = {};
    };
    $scope.showCommentForm = function() {
      this.blogPost.showComment = this.blogPost.showComment === false ? true: false;
    };
    $scope.submitNewComment = function() {
      this.blogPost.comment.time = new Date();
      this.blogPost.comments.push(this.blogPost.comment);
      this.blogPost.comment = {};
      this.blogPost.showComment = false;
      this.blogPost.showAllComments = true;
    };
    $scope.showComments = function() {
      this.blogPost.showAllComments = this.blogPost.showAllComments === false ? true: false;
    }
    $scope.downVote = function() {
      this.blogPost.votes--;
      $scope.sortType = "-this.votes"
    }
    $scope.upVote = function() {
      this.blogPost.votes++;
      $scope.sortType = "-this.votes"
    }
  })
