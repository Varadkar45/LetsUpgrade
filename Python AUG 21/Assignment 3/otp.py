import random
import string
otp = ''
characters_list=list(string.ascii_letters+string.digits)
for i in range(6):
    otp += random.choice(characters_list)
print(otp)   