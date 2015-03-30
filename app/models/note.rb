class Note
  include Mongoid::Document
  field :startTime, type: String
  field :endTime, type: String
  field :content, type: String
  field :editMode, type: Boolean
end
