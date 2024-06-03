print("Hello World with a change")

#comments! Comments use the hashtag or pound 
"""
For all 
intents and purposes
this is a multiline comment
"""

my_value = 9
#snake_case! snake_case_looks_like_this
#exceptions: Classes and GLOBAL vars

if my_value == 8:
    print("That is an 8")
elif my_value == 7:
    print("This is a seven")
else:
    print("Oh it wasn't an 8 or a 7 afterall")


"""
js -> py

|| -> or
&& -> and
=== -> is
! -> not
"""

#Data Types

#Primitive
#boolean
my_bool = False #True

#number -- float, int
integer = 7
an_int = 4
float = 6.99



sum = integer + float
print(sum)
print(type(float))


#strings
my_f_string = f"This wouldn't be a great string for single quotes! \n {integer} + {float} = {sum}"
my_raw_string = r'new \n line?'
print(my_f_string)
print(my_raw_string)

if type(my_f_string) is int:
    print("It's an integer, no length")
else:
    print(len(my_f_string))


#conversion methods
#int()
#float()
#str()
my_concat = "String" + str(float)


#Composite

#lists -- similar to an array in js
#LIST Literally Indexed, Single Things
my_list = [5,6,8,"Number",[1,2,3]]
        #  0 1 2    3       4
my_list[0] = "This is my new first value"

print(my_list[4][1]) # = [1,2,3][1]    = 2 
#                         0 1 2
#adding to a list []
my_list.append("This is my new last value!")

#removing 
my_list.remove(6)
popped_val = my_list.pop(4)
my_list *= 3
# print(my_list)

copy_list = my_list[:]
#dictionaries {} -- similar to an object js
#DICT Don't Index Coupled Thing 
#KVP Key Value Pairs
#Curlies hold the Keys
dog_dict = {
    'name': 'Wiley',
    'age': 5,
    'breed': 'ChiPom'
}
# if 'key' in dictionary:
if 'nam' in dog_dict:
    print(dog_dict['nam'])
# print(dog_dict['nam'])

dog_nam = dog_dict.get('nam')
print(dog_nam)

# del dog_dict['breed']
# breed = dog_dict.pop('breed')
dog_dict.clear()
print(dog_dict)


#tuples
tuple = (1,2,3,4,5,6)
print(tuple[4])
tuple[4] = 9