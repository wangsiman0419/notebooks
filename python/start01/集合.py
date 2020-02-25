# 集合  特点：里面值是不能重复的，是无序的
# arr=[1,2,3,4,5]
# print(5 in arr)
# print(5 not in arr)

# max|min
# arr=[1,2,3]
# print(min(arr))

# 并集
# a={1,2,3,4}
# b={2,3,5}
# print(a|b)

# 交集
# a={1,2,3}
# b={2,3}
# print(a&b)


# 差集
# a={1,2,3,4}
# b={2,3,4,5}
# print(a-b)

# 添加
# arr={'html','css'}
# arr.add("js")
# print(arr)

# update()向前增加，可以增加多个
arr={'html','java','css'}
arr.update({'react','vue'})
print(arr)

# 删除  随机删除
# arr={'html','css','javascript'}
# arr.pop()
# print(arr)


# remove  定点删除
# arr={'html','css','javascript'}
# arr.remove('css')
# print(arr)

# arr={'html','css','js'}
# arr.clear()
# print(arr)