pat = User.create(username: "pat", password: "asdf", password_confirmation: "asdf")
amanda = User.create(username: "amanda", password: "asdf", password_confirmation: "asdf")

puts "Friending pat and amanda"
pat.friends << amanda
amanda.friends << pat

puts "creating group"
g1 = Group.create(location: "305 Picea View Ct", cuisine: "Chinese")

