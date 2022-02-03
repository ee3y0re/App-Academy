class AttrAccessorObject
  def self.my_attr_accessor(*names)
    #conditional to indicate return of reader or writer but how
    names.each do |name|
      define_method(name) do
        # puts ":D" #for some reason still passes
        # self.class.send(:attr_accessor, name)
        instance_variable_get("@#{name}")
      end

      define_method("#{name}=") do |new_name| #interpolating double quotes
        instance_variable_set("@#{name}", new_name)
      end
    end
  end
end

# class AttrReaderObject
#   def self.my_attr_reader(*names)
#     name.each do |name|
#       define_method(name) do |num = 1|
#         self.send(:instance_variable_get, :name)
#       end
#     end
#   end
# end

# class AttrWriterObject
#   def self.my_attr_writer(*names)
#     name.each do |name|
#       define_method(name) do |num = 1|
#         self.(:instance_variable_set, :name)
#       end
#     end
#   end
# end
