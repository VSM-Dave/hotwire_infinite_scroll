class Post < ApplicationRecord
  belongs_to :user

  after_create_commit { broadcast_prepend_to(user, :timeline, target: :timeline_page_1) }
end
