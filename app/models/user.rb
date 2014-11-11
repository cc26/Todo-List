class User < ActiveRecord::Base
  has_secure_password
  attr_accessible :name, :email, :password, :password_confirmation

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[\w\-.]+\.[a-z]+\z/i

  validates :email, presence:   true,
            format:     { with: VALID_EMAIL_REGEX },
            uniqueness: { case_sensitive: false }
  # VALID_PASSWORD_REGEX = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6}$/

  validates :password, presence: true
  validates :password_confirmation, presence: true
  before_save { |user| user.email = email.downcase }
  after_validation {self.errors.messages.delete(:password_digest)}

end
