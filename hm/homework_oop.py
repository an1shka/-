#1
# class Timer:
#     def __item__(self,m,s):
#         self.minutes = m
#         self.seconds = s
    
#     def add_time(self, m, s):
#         total_seconds = self.minutes * 60 + self.seconds + m * 60 + s
#         self.minutes = total_seconds // 60
#         self.seconds = total_seconds % 60
        
#     def reser(self):
#         self.minutes = 0
#         self.seconds = 0
    
#     def get_time(self):
#         return f"{self.minutes:02d}:{self.seconds:02d}"
    
#2
# class Playlist:
#     def __init__(self, songs):
#         self.songs = []
        
#     def show(self):
#         if not self.songs:
#             print("Playlist is empty")
#         else:
#             for i, song in enumerate(self.songs):
#                 print(f"{i+1}. {song}")

#     def add_song(self, song):
#         self.songs.append(song)
        
#     def remove_song(self, song):
#         self.show()

#         if song in self.songs:
#             self.songs.remove(song)
#             print(f"Песня '{song}' удалена")
#         else:
#             print("Такой песни нет")
            
#     def count(self):
#         return len(self.songs)

# pl = Playlist()
# pl.add_song("Nirvana – Smells Like Teen Spirit")
# pl.add_song("Queen – Bohemian Rhapsody")
# pl.add_song("AC/DC – Thunderstruck")

# pl.show()
# print("Всего песен:", pl.count())

# pl.remove_song("Queen – Bohemian Rhapsody")
# pl.show()

#3
# class ShopCart:
#     def __init__(self, name, price, quantity):
#         self.name = name
#         self.price = price
#         self.quantity = quantity
    
#     def add_product(self, name, price, quantity):
#         self.name = name
#         self.price = price
#         self.quantity = quantity
    
#     def remove_product(self,name):
#         if self.name == name:
#             self.name = None
#             self.price = 0
#             self. quantity = 0
#         else:
#             print("Такого товара нет")
    
#     def get_total(self):
#         return self.price * self.quantity
    

#4
# class SafeBankAccount:
#     def __init__(self, owner, balance):
#         self.owner = owner
#         self.balance = balance

#     def deposit(self, amount):
#         if amount > 0:
#             self.balance += amount
#         else:
#             print("Ошибка")

#     def withdraw(self, amount):
#         if amount > 0 and amount <= self.balance:
#             self.balance -= amount
#         else:
#             print("Ошибка")

#     def get_balance(self):
#         return self.balance
#условия, циклы, функции, массивы, картежи, словари, классы