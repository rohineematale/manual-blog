class Post < ActiveRecord::Base
  attr_accessible :title, :description
  has_many :comments
  has_many :tags
end
