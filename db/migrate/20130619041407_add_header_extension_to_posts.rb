class AddHeaderExtensionToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :header_extension, :string
  end
end
