from game_classes.combatant import Combatant
import random

class Snake(Combatant):
    def __init__(self, name) -> None:
        super().__init__()
        self.name = name
        self.strength = 20
        self.health = 50

    def defend(self,damage):
        roll = random.randint(1,4)
        if roll == 4:
            print(f"{self.name} is too slippery to get hit!")
        else:
            super().defend(damage)
