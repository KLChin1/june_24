"""
def name_of_func(param_1,param_2):
    #logic to run
    print("this is a read out")
    return "Return val"
"""

def multiply(num_1, num_2):
    # print(num_1 * num_2)
    return num_2 * num_1

print(multiply(9,10))

def say_hello(name,times=1):
    for i in range(times):
        print("Hello " + name)

say_hello("bob",20)
say_hello("George")

say_hello(times=199,name="Bob")

