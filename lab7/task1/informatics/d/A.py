n = int(input())
nums = list(map(int, input().split()))
print(*nums[::2])
