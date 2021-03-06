# == Schema Information
#
# Table name: answer_choices
#
#  id          :bigint           not null, primary key
#  answer      :text
#  question_id :integer
#
class AnswerChoice < ApplicationRecord
    belongs_to :question,
        foreign_key: :question_id,
        class_name: :Question

    has_many :responses,
        foreign_key: :response_id,
        class_name: :Response

    belongs_to :users,
        foreign_key: :user_id,
        class_name: :user_id
        
end
