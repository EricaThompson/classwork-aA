# == Schema Information
#
# Table name: cats
#
#  id          :bigint           not null, primary key
#  birth_date  :date             not null
#  color       :string           not null
#  name        :string           not null
#  sex         :string(1)        not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require "action_view"

COLOR = ['red', 'gray', 'blue', 'yellow', 'white', 'purple', 'black', 'orange', 'brown', 'green', 'pink']

class Cat < ApplicationRecord
    include ActionView::Helpers::DateHelper
    validates :birth_date, :color, :name, :sex, :description, presence: true
    validates :color, inclusion: { in: COLOR  }
    validates :sex, inclusion: { in: ['F', 'M'] }

    def age
        Date.today.year - self.birth_date.year
    end

    has_many :rental_requests,
        foreign_key: :cat_id,
        class_name: :CatRentalRequest,
        dependent: :destroy

end
