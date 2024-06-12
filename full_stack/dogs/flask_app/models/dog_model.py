from flask_app.config.mysqlconnection import connect_to_mysql
from flask_app import DATABASE

class Dog:
    def __init__(self,data) -> None:
        self.id = data['id']
        self.name = data['name']
        self.age = data['age']
        self.breed = data['breed']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    @classmethod
    def get_all(cls):
        query = """
            SELECT * FROM dogs;
        """
        results = connect_to_mysql(DATABASE).query_db(query)
        all_dogs = []
        for row_from_db in results:
            dog_instance = cls(row_from_db)
            all_dogs.append(dog_instance)
        return all_dogs
    
    @classmethod
    def get_one(cls,data):
        query = """
            SELECT * FROM dogs WHERE dogs.id = %(id)s;
        """
        results = connect_to_mysql(DATABASE).query_db(query,data)
        if results:
            return cls(results[0])
        return False
        

    @classmethod
    def create(cls,data):
        query = """
            INSERT INTO dogs (name, age, breed)
            VAlUES (%(name)s, %(age)s, %(breed)s)
        """
        return connect_to_mysql(DATABASE).query_db(query,data)