class CreateUser < ActiveRecord::Migration[8.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :cpf
      t.datetime :date_of_birthday

      t.timestamps
    end

    create_table :addresses do |t|
      t.references :state
      t.references :city
      t.string :zip_code
      t.string :street
      t.string :number
    end

    create_table :states do |t|
      t.string :abbreviation
      t.string :name
    end

    create_table :cities do |t|
      t.string :name
    end
  end
end
