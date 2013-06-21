ActiveAdmin.register Post do


	form do |f|
		f.inputs "Details" do
			f.input :title
			f.input "Header Image", as: :file
			f.input :tags
		end
		f.inputs "Content" do
			f.input :body
		end
		f.actions
	end

end
