import os

count = 65
for i in range(27, 52):
    os.system("rename " + str(i) + ".jpg" + " " + chr(count) + ".jpg")
    count += 1