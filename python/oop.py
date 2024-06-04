#OOP - Object Oriented Programming

#Classes -- are the blue print for the objects we create -- a class is essentially a new data type
#Object / Instance -- a realized version of the class, one created version of the class
#Attributes -- variables, things that describe our object
#Methods - functions, things our objects can do

dog_one = {
    'name':'Wiley',
    'age': 5,
    'breed': 'ChiPom'
}

dog_two = {
    'name': 'Pepe',
    'age': 6,
    'breed':'Mini Terrier'
}

# class Dog:
#     def __init__(self, name, age, param_breed="Generic Breed"):
#         self.name = name
#         self.age = age
#         self.breed = param_breed
#         self.is_cute = True

#     def print_info(self):
#         print(f"{self.name} is a {self.breed} that is {self.age} years old")

class Dog:
    def __init__(self, data_dict):
        self.name = data_dict['name']
        self.age = data_dict['age']
        self.breed = data_dict['breed']
        self.is_cute = True

    def print_info(self):
        print(f"{self.name} is a {self.breed} that is {self.age} years old")
        return self

    def have_birthday(self):
        self.age += 1
        return self

    def bark(self):
        print(f'{self.name} makes a loud yip!')
        return self
    
    def __repr__(self):
        return f"Dog Object: {self.name} is a {self.breed} that is {self.age} years old"

# first_dog_instance = Dog('Fred',5,'chihuaha')
# second_dog = Dog('Bob',5,'Great Dane')
first_dog_instance = Dog(dog_one)
second_dog = Dog(dog_two)
first_dog_instance.color = "Yellow"
# print(first_dog_instance.age)
# first_dog_instance.print_info()
# second_dog.print_info()

print(first_dog_instance)
print(second_dog)
# bob = second_dog.__init__() #don't do this, but you could
second_dog.bark().bark().print_info()