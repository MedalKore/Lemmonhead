class Post < ActiveRecord::Base
	belongs_to :admin_user
	has_many :tags, through: :tag_user_relationship
end
