
# level 1


c = input('enter your name: ')

print('your name is ' + c)



# 2


c2 = int(input('enter number: '))

print(c2 + 1)



# level 2

c3 = int(input('enter num: '))

if (c3 % 2 == 0):
    print('even')
else:
    print(*'odd')


# 2


for i in range(1, 11):
    if (i % 2 == 0):
        print(i)



# level 3

x =  int(input(' '))
x2 =  int(input(' '))

x3 = input('enter operator: ')

if (x3 == '+'):
    print(x + x2)
elif(x3 == '-'):
    print(x - x2)
elif(x3 == '*'):
    print(x * x2)
elif(x3 == '/'):
    print(x / x2)