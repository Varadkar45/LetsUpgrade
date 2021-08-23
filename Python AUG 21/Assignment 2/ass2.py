a = list(input("Enter a string: "))
for n, i in enumerate(a):
    if i not in a[:n] :
        print(f"{i} - {a.count(i)}" , end=",")
print("")
print("<--------------------------------------------------------->")

st = input("Enter a Word: ")
li = list(set(st))
for i in li:
    print(f"{i} - {st.count(i)}", end=",")