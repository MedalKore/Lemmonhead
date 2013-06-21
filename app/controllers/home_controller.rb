class HomeController < ApplicationController
  

  def index
    @recent_posts = Post.all.limit(3).order("created_at DESC")
  end

  def about
  	
  end

  def contact
  	
  end

  def submit
  	
  end

  def medalkore
  	redirect_to "http://medalkore.com"
  end

  def twitter
  	redirect_to "http://www.twitter.com/_lemmonhead"
  end

  def linked_in
  	redirect_to "http://www.linkedin.com/in/andrewlemmons"
  end

  def google_plus
  	redirect_to "http://plus.google.com/"
  end
end
