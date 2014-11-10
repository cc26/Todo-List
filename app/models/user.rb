class User < ActiveRecord::Base
  attr_accessible :email, :name
  validates :name, presence: true
  email_rgex = /\A[\w+\-.]+@[\w\-.]+\.[a-z]+\z/i

  validates :name, presence: true, length:{maximum: 50}, format:{with: email_rgex}, 
  			uniquess: {case_sensitive: false}

  password_rgex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6}$/
  validate :password, precense: true, format:{password_rgex}
  before_save { |user| user.email = email.downcase }

end
