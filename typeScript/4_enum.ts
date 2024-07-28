
enum Membership {
Simple, 
Standart, 
Premium
}

const membership = Membership.Standart  // вывод: 1
const membershipReverse = Membership[2] // вывод: Premium

enum SocialMeadia {
	VK = 'VK',
	FACEBOOK = 'Facebook',
	INST = 'Instagram'
}

const socialInst = SocialMeadia.INST // вывод: Instagram