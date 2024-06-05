from game_classes.combatant import Combatant

class Paladin(Combatant):
    def __init__(self, name) -> None:
        super().__init__()
        self.name = name
        self.intelligence = 20
        self.defense = 6
        self.strength = 4

    def attack(self,target):
        print(f"{self.name} brings down a ray of light upon {target.name}")
        target.defend(self.intelligence)