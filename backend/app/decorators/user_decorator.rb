class UserDecorator < Draper::Decorator
  def format_date
    model.date_of_birthday.strftime("%d/%m/%Y")
  end
end