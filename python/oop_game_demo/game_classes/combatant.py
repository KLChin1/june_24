class Combatant:
    def __init__(self) -> None:
        self.name = "Generic Combatant"
        self.health = 100
        self.strength = 10
        self.defense = 2
        self.intelligence = 5

    #attack
    def attack(self,target):
        print(f"{self.name} is attacking {target.name}")
        target.defend(self.strength)

    #defend
    def defend(self,damage):
        damage -= self.defense
        self.health -= damage
        print(f"{self.name} takes {damage} damage, they now have {self.health} health")

    #heal
    def heal(self):
        self.health += self.intelligence
        print(f"{self.name} heals for {self.intelligence} damage, they now have {self.health} health")
        