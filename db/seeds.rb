pat = User.create(username: "pat", password: "asdf")
amanda = User.create(username: "amanda", password: "asdf")

puts "Friending pat and amanda"
pat.friends << amanda
amanda.friends << pat
