class Comment < ActiveRecord::Base
  attr_accessible :content
  belongs_to :post

  validates_presence_of :content
end
