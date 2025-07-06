def announce(f):
    def wrapper():
      print("About to run function...")
      f()
      print("Done running function.")
    return wrapper

@announce
def greet():
   print("Hello, world!")

greet()