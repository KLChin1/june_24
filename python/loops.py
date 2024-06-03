#Loops! -- iterate through a number of steps, repeat code for a set amount of times

"""
for _1__ in _2___:
    pass
"""

#Blank one: iterative variable
#Blank two: collection or sequence we are iterating over

for i in (1,2,3,4,5,6,7):
    print(i)

for i in "Hello World":
    print(i)


#range()
#start -- the first number in the sequence, inclusive -- OPTIONAL -- default 0
#stop -- exclusive, required
#step -- increment / decrement, optional -- default 1

for number in range(20,50,7):
    print(number)

my_foods = ['ramen','hot dog', 'ice cream', 'chickpeas', 'chocolate','hot cheetos n cheese']

for one_food in my_foods:
    one_food = "slop" #this will not update the original list
    print(f"{one_food} was added to the database")

for index in range(len(my_foods)): # (0,1,2,3,4)
    my_foods[index] = "slop"

print(my_foods)

cat_1 = {
    'name': 'Dhuma',
    'breed': 'Chausie',
    'color': 'Grey'
}
cat_2 = {
    'name': 'Meowface',
    'breed': 'Tuxedo',
    'color': 'Black and White'
}

# for key in cat_1:
#     print(f"{key} has a value of {cat_1[key]}")

# #iterate over a list: variable represents each element
# #iterate over a dict: variable represents each key

# for key,val in cat_1.items():
#     print(f"{key} has a value of {val}")

cat_list = [cat_1,cat_2]

for cat_dict in cat_list:
    msg = ""
    for key in cat_dict:
        msg += f"{key} has a value of {cat_dict[key]}"
    print(msg)

"""
while(condition):
    pass
"""

while(True):
    print("uh oh....")