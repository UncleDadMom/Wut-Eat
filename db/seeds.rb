pat = User.create(username: "pat", password: "asdf")
amanda = User.create(username: "amanda", password: "asdf")

puts "Friending pat and amanda"
pat.friends << amanda
amanda.friends << pat

puts "creating group"
g1 = Group.create(location: "305 Picea View Ct", cuisine: "Chinese")

puts "adding pat and amanda to group"
g1.users << amanda
g1.users << pat
