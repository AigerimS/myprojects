
def game(L,R,k):
	res = []
	for i in range(L,R+1):
		st = str(i)
		ind = 0

		while ind<len(st)-1:
			if abs(int(st[ind])-int(st[ind+1]))==k:
				ind+=1
			else:
				break
		if ind==len(st)-1:
			res.append(i)
	return res

def permutation(a,k=0):
	if k == len(a):
		print(a)


	else:
		for i in range(k, len(a)):
			a[k], a[i] = a[i] ,a[k]
			permutation(a, k+1)
			a[k], a[i] = a[i], a[k]



print(permutation([1,2,3,4]))
print(res)