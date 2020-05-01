import matplotlib.pyplot as plt

plt.plot([100, 28, 3, -20])
plt.xlabel("Days")
plt.ylabel('Turnip Value')

plt.savefig('plots/newplot')
print("newplot.png\n")