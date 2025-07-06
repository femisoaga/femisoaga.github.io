s = set()

s.add("sa")
s.add("ba")
s.add("ba")
s.add("foo")
s.add(2)

print(s)

s.remove(2)
print(s)

print(f"the number of elements in the set is {len(s)}")