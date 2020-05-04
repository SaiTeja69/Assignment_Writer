import os
'''
for i in range(1, 27):
    os.system("rename " + str(i) + ".jpg" + " " + str(count) + ".jpg")
    count += 1
'''

count = 65
for i in range(27, 52):
    os.system("rename " + str(i) + ".jpg" + " " + str(count) + ".jpg")
    count += 1 
for i in range(53,62):
	os.system("rename " + str(i) + ".jpg" + " " + str(i-4) + ".jpg")