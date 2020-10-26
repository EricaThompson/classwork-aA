# == Schema Information
#
# Table name: users
#
#  id       :bigint           not null, primary key
#  username :string
#
class User < ApplicationRecord
    has_many :authored_polls,
        foreign_key: :id,
        class_name: :Poll

    has_many :responses,
        foreign_key: :id,
        class_name: :Response

    has_many :polls,
        foreign_key: :id,
        class_name: :Poll
end
