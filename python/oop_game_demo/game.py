from game_classes.snake import Snake
from game_classes.paladin import Paladin
import random
# from game_classes import combatant

player = Snake("Player One")
computer = Paladin("Computer")

print("Welcome to Snake vs Paladin! You are a snake!")
print("What will you do?")
while player.health > 0 and computer.health > 0:
    # print(choice)
    choice = ""
    while choice != '1' and choice != '2':
        choice = input("1) attack 2)heal \n>>>")
        if choice == '1':
            player.attack(computer)
        elif choice == '2':
            player.heal()
        else:
            print("Please choose a valid option")

    roll = random.randint(1,2)
    if roll == 1:
        computer.attack(player)
    else:
        computer.heal()

if player.health > 0:
    print("That paladin had it comin")
elif computer.health <= 0:
    print("Tie!")
else:
    print("You have been smote by the paladin")

